<template>
  <div class="container px-3 my-4">
    <Header/>
    <section class="site-home-scene scene-cases">
      <div class="inner-container" style="padding-top: 80px">
        <h2 class="shc-title">NFT 발행하기</h2>
        <div style="height: 10px">&nbsp;</div>
        <p class="shc-sub-title">Luniverse LPOA에서 NFT를 발행합니다.</p>
      </div>
      <div class="inner-container" style="padding-top: 10px">
        <div id="jb-container">
          <div id="jb-header">
            <p>NFT Contract</p>
            <select name="contract" form="minting" v-model="contractId">
              <option disabled value="">Select one</option>
              <option :key="i" :value="contract.id" v-for="(contract, i) in contracts">{{ contract.name }} / {{ contract.symbol }}</option>
            </select>
          </div>
          <div id="jb-content">
            <div style="padding-top: 40px">&nbsp;</div>
            <div class="drop-zone">
              <span class="drop-zone__prompt">Drop file here or click to upload</span>
              <input type="file" id="myFile" class="drop-zone__input">
            </div>
          </div>
          <div id="jb-sidebar">
            <form id="minting">
              <p>이름</p>
              <input type="text" name="nftName" placeholder="WhatIsTheName" v-model="nftName" style="width: 30vw; max-width: 560px; height: 40px">
              <div>&nbsp;</div>
              <p>창작자</p>
              <input type="text" name="nftCreator" placeholder="CreateBy" v-model="nftCreator" style="width: 30vw; max-width: 560px; height: 40px">
            </form>
            <div>&nbsp;</div>
            <p>설명</p>
            <textarea rows="5" cols="60" name="nftDesc" placeholder="Description" v-model="nftDesc" form="minting"></textarea>
          </div>
          <div id="jb-footer" style="text-align: center">
            <button class="btn btn-nft-mint" style="width: 150px; padding-top: 14px; padding-bottom: 14px; font-size: 18px; border-radius: 60rem" @click="mint()" >
              NFT 발행
            </button>
          </div>
        </div>
      </div>
    </section>
    <ModalMint v-if="minting"></ModalMint>
  </div>
</template>

<script>
import Header from '@/components/header'
import {Config} from '@/js/config';
import {account} from '@/js/metamask';
import ModalMint from '@/components/modal-mint';

export default {
  components: {
    ModalMint,
    Header,
  },

  data () {
    return {
      contracts: [],
      contractId: '',
      nftName: '',
      nftCreator: '',
      nftDesc: '',
      isFileUploaded: false,
      minting: false,
    }
  },

  mounted(){
    this.fileUpload();
    this.loadContracts();
  },

  computed: {
    apiKey() {
      return Config.apiKey.token
    },
    account() {
      return account;
    }
  },

  methods: {
    async mint() {
      if (!this.isFileUploaded || this.isEmpty(this.contractId) || this.isEmpty(this.nftName) || this.isEmpty(this.nftCreator) || this.isEmpty(this.nftDesc)) {
        alert("빈 값을 모두 채워주세요!");
      } else{
        this.minting = true;
        const mediaFile = document.getElementById('myFile').files[0];
        const mediaId = await this.uploadMedia(mediaFile);
        const metadataId = await this.createMetadata(mediaId);
        // mint
        const jsonStr = JSON.stringify({
          issuedTo: this.account,
          metadataId: metadataId
        });
        await this.axios.post(`/svc/v2/nft/contracts/${this.contractId}/tokens`, JSON.parse(jsonStr), {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        });
        this.minting = false;
        this.$router.push({name: 'nft'});
      }
    },

    async uploadMedia(mediaFile) {
      const formData = new FormData();
      formData.append("file", mediaFile);
      const response = await this.axios.post(`/svc/v2/nft/media`, formData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data.data.id;
    },

    async createMetadata(image) {
      const jsonStr = JSON.stringify({
        name: this.nftName,
        createdBy: this.nftCreator,
        createdDate: this.getDate(),
        image: image,
        thumbnailImage: image,
        description: this.nftDesc
      });
      const response = await this.axios.post(`/svc/v2/nft/metadata`, JSON.parse(jsonStr), {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data.data.id;
    },

    fileUpload() {
      document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", () => {
          inputElement.click();
        });

        inputElement.addEventListener("change", () => {
          if (inputElement.files.length) {
            this.isFileUploaded = true;
            this.updateThumbnail(dropZoneElement, inputElement.files[0]);
          }
        });

        dropZoneElement.addEventListener("dragover", (e) => {
          e.preventDefault();
          dropZoneElement.classList.add("drop-zone--over");
        });

        ["dragleave", "dragend"].forEach((type) => {
          dropZoneElement.addEventListener(type, () => {
            dropZoneElement.classList.remove("drop-zone--over");
          });
        });

        dropZoneElement.addEventListener("drop", (e) => {
          e.preventDefault();

          if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            this.isFileUploaded = true;
            this.updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
          }

          dropZoneElement.classList.remove("drop-zone--over");
        });
      });
    },

    updateThumbnail(dropZoneElement, file) {
      let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }

      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
      }

      thumbnailElement.dataset.label = file.name;

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    },

    async loadContracts() {
      const response = await this.axios.get(`/svc/v2/nft/contracts`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      this.contracts = response.data.data.contracts.items
    },

    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month >= 10 ? month : '0' + month;
      day = day >= 10 ? day : '0' + day;
      return year + "-" + month + "-" + day;
    },

    isEmpty(obj){
      if(typeof obj == "undefined" || obj == null || obj == "")
        return true;
      else
        return false ;
    },
  }
}

</script>

<style>
#jb-container {max-width: 1194px;width: 70vw;margin: 10px auto;padding: 20px;}
#jb-header {padding: 20px;margin-bottom: 20px;}
#jb-content {width: 380px;padding: 20px;margin-bottom: 20px;float: left;}
#jb-sidebar {max-width: 770px;width: 40vw;padding: 20px 20px 20px 50px ;margin-bottom: 20px;float: right;}
#jb-footer {clear: both;padding: 20px;}
@media ( max-width: 1399px ) {  #jb-container {width: auto;}  #jb-content {float: none;width: auto;}  #jb-sidebar {float: none;width: auto;}  }

p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; font-weight: bold; font-size: 30px;
}

input::placeholder, textarea::placeholder {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; font-weight: lighter; font-size: 18px; color: darkgray;
}

select {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 28px; color: black;
}
</style>
