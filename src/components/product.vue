<template>
  <div class="container px-3 my-4">
    <Header/>
    <section class="site-home-scene scene-cases">
      <div class="inner-container">
        <h2 class="shc-title">Products</h2>
        <p class="shc-sub-title">상품 구매하기</p>
        <p class="shc-descriptions">획득한 {{ stSymbol }} 토큰으로 원하는 상품을 구매해보세요!</p>
      </div>

      <div class="shop-list-row row" >
        <img src="@/assets/img2/product/Product1.png" alt class="photo6 col-md-3 col-xl-2 text-center p-4 pr-md-0">
        <div class="col-md-6 col-xl-7 py-md-4 px-4 pb-2">
          <div class="d-flex justify-content-start mb-1">
            <h5 class="flex-shrink-1 m-0"> Front Attack 멤버들의친필 사인 폴라로이드 세트</h5>
          </div>
          <div style="margin-top: 20px;"><span class="t_dgray">{{products[0].text}}</span></div>
          <div style="margin-top: 10px;"><span class="t_dgray text-blue">{{products[0].thx}}</span></div>
        </div>
        <div class="d-flex col-md-3 col-xl-3 flex-md-column flex-wrap justify-content-md-center align-items-center pt-md-4 pb-4">
          <div class="text-big m-2" :class="{disabled: products[0].disabled}"><strong>{{products[0].price}} {{ stSymbol }}</strong></div>
          <button class="button-normal" v-on:click="valid_check(0)" v-bind:class="{disabled: products[0].disabled}">{{products[0].buy}}</button>
        </div>
      </div>

      <div class="shop-list-row row">
        <img src="@/assets/img2/product/Product2.jpg" alt class="photo6 d-block col-md-3 col-xl-2 text-center p-4 pr-md-0">
        <div class="shop-list-content col-md-6 col-xl-7 py-md-4 px-4 pb-2">
          <div class="d-flex justify-content-start mb-1">
            <h5 class="flex-shrink-1 m-0"> LuniBaaS 앨범 준비 과정 미공개 이미지 파일 세트 (Digital)</h5>
          </div>
          <div style="margin-top: 20px;"><span class="t_dgray">{{products[1].text}}</span></div>
          <div style="margin-top: 10px;"><span class="t_dgray text-blue">{{products[1].thx}}</span></div>
        </div>
        <div class="d-flex col-md-3 col-xl-3 flex-md-column flex-wrap justify-content-md-center align-items-center px-3 px-md-0 pt-md-4 pb-4">
          <div class="text-big m-2" :class="{disabled: products[1].disabled}"><strong>{{products[1].price}} {{ stSymbol }}</strong></div>
          <button class="button-normal" v-on:click="valid_check(1)" v-bind:class="{disabled: products[1].disabled}">{{products[1].buy}}</button>
        </div>
      </div>

      <div class="shop-list-row row">
        <img src="@/assets/img2/product/Product3.png" alt class="photo6 d-block col-md-3 col-xl-2 text-center p-4 pr-md-0">
        <div class="shop-list-content col-md-6 col-xl-7 py-md-4 px-4 pb-2">
          <div class="d-flex justify-content-start mb-1">
            <h5 class="flex-shrink-1 m-0" > ‘Intern net’ 팬미팅 티켓 얼리버드 (2장)</h5>
          </div>
          <div style="margin-top: 20px;"><span class="t_dgray">{{products[2].text}}</span></div>
          <div style="margin-top: 10px;"><span class="t_dgray text-blue">{{products[2].thx}}</span></div>
        </div>
        <div class="d-flex col-md-3 col-xl-3 flex-md-column flex-wrap justify-content-md-center align-items-center px-3 px-md-0 pt-md-4 pb-4">
          <div class="text-big m-2" :class="{disabled: products[2].disabled}"><strong>{{products[2].price}} {{ stSymbol }}</strong></div>
          <button class="button-normal" v-on:click="valid_check(2)" v-bind:class="{disabled: products[2].disabled}">{{products[2].buy}}</button>
        </div>
      </div>

      <div class="shop-list-row row">
        <img src="@/assets/img2/product/Product4.png" alt class="photo6 d-block col-md-3 col-xl-2 text-center p-4 pr-md-0">
        <div class="shop-list-content col-md-6 col-xl-7 py-md-4 px-4 pb-2">
          <div class="d-flex justify-content-start mb-1">
            <h5 class="flex-shrink-1 m-0" > ‘Bread N Jam’ 한정판 굿즈 세트 ( 엽서 + 키링 + 티셔츠 )</h5>
          </div>
          <div style="margin-top: 20px;"><span class="t_dgray">{{products[3].text}}</span></div>
          <div style="margin-top: 10px;"><span class="t_dgray text-blue">{{products[3].thx}}</span></div>
        </div>
        <div class="d-flex col-md-3 col-xl-3 flex-md-column flex-wrap justify-content-md-center align-items-center px-3 px-md-0 pt-md-4 pb-4">
          <div class="text-big m-2" :class="{disabled: products[3].disabled}"><strong>{{products[3].price}} {{ stSymbol }}</strong></div>
          <button class="button-normal" v-on:click="valid_check(3)" v-bind:class="{disabled: products[3].disabled}">{{products[3].buy}}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/header'
import {Config} from '../js/config'

export default {
  components: {
    Header,
  },
  data () {
    return {
      products: [
        {
          buy: '구매하기',
          disabled: false,
          text: 'Front Attack 멤버들의 폴라로이드 사진과 친필싸인이 들어있는 상품입니다. 멤버는 랜덤으로 선정되며 코팅처리가 되어있어 튼튼합니다.',
          thx: '',
          price: '300'
        },
        {
          buy: '구매하기',
          disabled: false,
          text: '공개되지않은 앨범 비하인드 컷 5장을 디지털 파일로 보내드립니다. 노트북, 패드, 휴대전화 등 배경화면으로도 사용하실 수 있도록 다양한 사이즈를 지원합니다.',
          thx: '',
          price: '700'
        },
        {
          buy: '구매하기',
          disabled: false,
          text: '팬미팅 얼리버드 티켓 2장입니다. 좌석을 선택하실 수 있습니다. 당일 얼리버드 티켓을 제시하시면, 간단한 간식과 담요를 제공하고 있습니다.',
          thx: '',
          price: '1000'
        },
        {
          buy: '구매하기',
          disabled: false,
          text: 'Bread N Jam 멤버들의 엽서와 티셔츠 그리고 직접 만든 D.I.Y 키링을 함께 드립니다!  키링은 선택하실 수 있으며 , 엽서와 티셔츠는 랜덤으로 제공됩니다.',
          thx: '',
          price: '1200'
        }
      ]
    }
  },
  computed: {
    walletAddress() {
      return Config.walletAddress
    },
    wallet() {
      return Config.wallet
    },
    walletId() {
      return Config.wallet.user.id
    },
    mtSymbol() {
      return Config.mt.symbol
    },
    stSymbol() {
      return Config.st.symbol
    },
    stDec() {
      return Config.st.dec
    },
    apiKey() {
      return Config.apiKey.token
    },
    txActionName() {
      return Config.txActionName
    },
    txAction() {
      return Config.txAction
    },
    userName() {
      return Config.wallet.user.name
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load() {
      for(let productId = 0; productId < 4; productId++){
        const txId = this.uuidv4();
        window.txIds.push(txId);
        this.axios.post(`/tx/v2.0/transactions/${this.txAction.getOwner}`,{
          'txId': txId,
          'from': this.wallet.user.address,
          'inputs': {
            '_index': productId
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        })
          .then((response) => {
            if (this.wallet.user.name === response.data.data.output[0]) {
              this.products[productId].buy='구매 완료';
              this.products[productId].disabled='true';
              this.products[productId].thx=((response.data.data.output[0])+"님, 구매가 확정되었습니다.");
            }
          })
          .catch(() => {
          })
      }
    },
    valid_check(productId){
      if(this.products[productId].disabled) {
        alert('이미 구매하셨습니다.')
        return
      }
      this.axios.get(`/be/v2.0/env-accounts/${this.walletId}/tokens`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      })
        .then((response) => {
          const token = response.data.data.tokens.items.find(token => token.symbol === this.stSymbol)
          const balance = Number(token && token.balance || '0')
          if(balance >= parseInt(this.products[productId].price)){
            this.purchase(productId);
          }
          else{
            alert(`보유하신 ${this.stSymbol}를 확인해주세요!`)
          }
        })
        .catch(() => {
          alert('잔고 확인 실패')
        })
    },
    purchase(productId){
      let txId = this.uuidv4();
      window.txIds.push(txId);

      this.axios.post(`/tx/v2.0/transactions/${this.txAction.purchase}`,{
          'txId': txId,
          'from': this.wallet.user.address,
          'inputs' : {
            '_value': this.products[productId].price  + this.stDec,
          }
        },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `application/json`
        }
      })
        .then(() => {
          txId = this.uuidv4();
          window.txIds.push(txId);
          this.axios.post(`/tx/v2.0/transactions/${this.txAction.setOwner}`,{
              'txId': txId,
              'from': this.wallet.user.address,
              'inputs': {
                '_index': productId,
                '_name': this.userName
              }
          },
          {
            headers: {
              'Authorization': `Bearer ${this.apiKey}`,
            },
          })
            .then(() => {
              alert('구매에 성공하였습니다.')
              this.products[productId].buy='구매 완료';
              this.products[productId].disabled='true';

              txId = this.uuidv4();
              window.txIds.push(txId)
              this.axios.post(`/tx/v2.0/transactions/${this.txAction.getOwner}`,{
                'txId': txId,
                'from': this.wallet.user.address,
                'inputs': {
                  '_index': productId
                }
              },
              {
               headers: {
                  'Authorization': `Bearer ${this.apiKey}`,
                },
              })
                .then((response) => {
                  if (response.data.data.output[0] !== '') {
                    this.products[productId].thx=((response.data.data.output[0])+"님 구매가 확정되었습니다.");
                  }
                })
                .catch(() => {
                  alert('구매 내역 불러오기에 실패했습니다. getOwner 함수를 확인해주세요.')
                })
            })
            .catch(() => {
              alert('구매 확정에 실패했습니다. 구매 확정을 위해, setOwner 함수를 확인해주세요.')
            });
        })
        .catch(() => {
          alert('구매에 실패하였습니다. purchase 함수를 확인해주세요.')
        });

    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
}
</script>

<style scoped>
  .inner-container{
    padding-top: 80px !important;
  }
</style>
