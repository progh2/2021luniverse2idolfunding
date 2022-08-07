<template>
  <div>
    <Header/>
    <div class="pt-5">
      <div class="mypage-img my-img"></div>
      <div class="py-5">
        <div class="wrapper py-xl-5">
          <div class="portfolio-caption">
            <div class="portfolio-caption t_white font-weight-500"><div class="h1 mb4">{{username}}</div></div>
            <div class="portfolio-caption t_white font-weight-500">{{balance}} <span class="h1 mb4">{{stSymbol}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-3">
      <div class="row justify-content-between">
        <div class="mb-3" style="margin-top: 6rem;">
          <h3>History</h3>
        </div>
        <table class="tbl">
            <colgroup>
            <col style="width:20%">
            <col style="width:40%">
            <col style="width:10%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">일시</th>
              <th scope="col">항목</th>
              <th scope="col">실행결과</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="`${i}`" v-for="(history, i) in histories">
              <td><time datetime="">{{history.time}}</time></td>
              <td>{{history.name.toUpperCase()}}</td>
              <td :style="{color: history.color}">{{history.status}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header'
import {Config} from '../js/config'
import BigNumber from 'bignumber.js'

export default {
  components: {
    Header,
  },
  data() {
    return {
      balance: 0,
      isLoading: false,
      username: Config.userName ? Config.userName + ' 님의 지갑' : '지갑',
      histories: []
    }
  },
  computed: {
    environmentId() {
      return Config.environment.id
    },
    walletId() {
      return Config.wallet.user.address
    },
    mtSymbol() {
      return Config.mt.symbol
    },
    stSymbol() {
      return Config.st.symbol
    },
    apiKey() {
      return Config.apiKey.token
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.axios.get(`/tx/v2.0/wallets/${this.walletId}/${this.mtSymbol}/${this.stSymbol}/balance`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        },
      })
      .then((response) => {
        const balance = response.data.data && response.data.data.balance || '0';
        this.balance = (BigNumber(balance)).div((BigNumber('10')).pow(18)).toFixed(5);
      })
      .catch(() => {
        this.balance = 0;
      });

      this.axios.get(`/be/v2.0/tx-action-histories/search`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `application/json`
        },
        params: {
          environmentId: `${this.environmentId}`,
          itemsPerPage: 100
        }
      }).then(({data}) => {
          const actions=data.data.items.filter(
              tx => {
                return (tx.status === "Success" || tx.status === "Fail") && [
                    Config.txAction.funding, Config.txAction.like, Config.txAction.purchase,
                  Config.txAction.getOwner, Config.txAction.setOwner].includes(tx.actionName)
              });

        actions.map(tx => this.histories.push({time: tx.date, name: tx.actionName, status: tx.status}));

          this.histories.map(history => {
            if(history.status === "Success"){
              history.color="#00B580"
            }
            else if(history.status === 'Fail'){
              history.color="#F14E4E"
            }
          });
        })
        .catch(() => {
          this.histories = [];
        });
    },
  }
}
</script>