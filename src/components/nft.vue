<template>
  <div class="container px-3 my-4">
    <Header/>
    <section class="site-home-scene scene-cases">
      <div class="inner-container">
        <h2 class="shc-title">NFT</h2>
        <div style="height: 10px">&nbsp;</div>
        <p class="shc-sub-title">NFT를 발행해볼까요?</p>
        <div style="height: 10px">&nbsp;</div>
        <button class="btn btn-nft-mint" style="width: 150px; padding-top: 14px; padding-bottom: 14px; font-size: 18px; border-radius: 60rem" @click="nftRouterLink()">
          NFT 발행하기
        </button>
        <p class="shc-sub-title">&nbsp;</p>
        <div style="height: 10px">&nbsp;</div>
        <p class="shc-sub-title">보유한 NFT</p>
        <p class="shc-descriptions">연결 중인 환경에서 발행된 NFT만 표시됩니다.</p>
      </div>
      <div v-if="this.tokens.length !== 0" class="inner-container">
        <div class="row">
          <a :href="`https://nft-viewer.luniverse.io/nft/v1/metadata/${token.currencyCode}/${token.tokenId}`" v-for="token in tokens" v-bind:key="token.id" class="col-sm-6 col-lg-4 p-4">
            <div style="text-align: center;">
              <img :src=token.metadata.image width="200"/>
            </div>
            <div class="progress-wrap" style="height: 50px;">
              &nbsp;
            </div>
            <div style="display: flow-root;">
              <span class="font-weight-700 mb-2" style="margin-top: -20px; float: left;">{{ token.metadata.name }}</span>
              <span class="t_gry2 small mb-3" style="margin-top: -20px; float: left;"> &nbsp;ㅣ&nbsp;{{ token.metadata.createdBy }}</span>
            </div>
            <div class="t_gry3 small" style=" text-align: left; margin-top: -10px;">
              {{ token.metadata.description }}
            </div>
          </a>
          <div style="height: 80px;"> &nbsp;</div>
        </div>
      </div>
      <div v-else class="inner-container">
        <div style="text-align: center">
          <img src="@/assets/img2/nft/X.png" width="200" style="opacity: 0.5">
        </div>
        <div>&nbsp;</div>
        <h2 class="shc-title" style="text-align: center; opacity: 0.5">NFT가 존재하지 않습니다.</h2>
        <p class="shc-sub-title" style="text-align: center; opacity: 0.5">메타마스크를 연결하고 NFT를 발행해보세요.</p>
      </div>
    </section>
    <Modal v-if="installModal" @close-modal="installModal = false">
      <Content/>
    </Modal>
  </div>
</template>

<script>
import Header from '@/components/header'
import Modal from '@/components/modal';
import {Config} from '@/js/config';
import {initialize, account, chainId} from '@/js/metamask';

export default {
  components: {
    Header,
    Modal,
  },

  data () {
    return {
      connectAccount: '0x0',
      connectChainId: '',
      contracts: [],
      tokens: [],
      installModal: false,
    }
  },

  mounted(){
    this.load();
    this.installModal = false;
  },

  computed: {
    apiKey() {
      return Config.apiKey.token
    },
    account() {
      return account;
    },
  },

  methods: {
    load() {
      initialize()
          .then((response) => {
            this.connectAccount = account;
            this.connectChainId = chainId;
            if (response) {
              if (this.account !== '0x0') {
                const txId = this.uuidv4();
                window.txIds.push(txId);
                this.axios.get(`/svc/v2/nft/contracts`, {
                  headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                  },
                })
                    .then((response) => {
                      this.contracts = response.data.data.contracts.items;
                      for (let i = 0; i < this.contracts.length; i++) {
                        this.loadTokens(this.contracts[i].id);
                      }
                    });
              }
            } else {
              this.installModal = true;
            }
          });
    },

    loadTokens(contractId) {
      const txId = this.uuidv4();
      window.txIds.push(txId);
      this.axios.get(`/svc/v2/nft/contracts/${contractId}/tokens?searchKeyword=${this.account}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      })
          .then((response) => {
            this.tokens = this.tokens.concat(response.data.data.items)
          })
          .catch(() => {
          })
    },

    nftRouterLink() {
      if (!(this.connectAccount !== '0x0' && this.connectChainId.toLowerCase() === Config.nft.network.chainId.toLowerCase())) {
        alert("MetaMask 연결 후 다시 진행해주세요!");
        this.load();
        this.$router.go();
      } else {
        this.$router.push({name: 'nft-mint'});
      }

    },

    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
  }
}
</script>

<style scoped>
.portfolio-image {
  background-image: url('../assets/img2/detail/1.jpg');
}
.inner-container{
  padding-top: 80px !important;
}
</style>
