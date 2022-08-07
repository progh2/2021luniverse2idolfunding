import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BigNumber from 'bignumber.js'
import './assets/css/luniverstar.css'
import './assets/vendor/css/bootstrap.css'

Vue.use(VueAxios, axios)
Vue.use(BigNumber)

axios.defaults.timeout = 10 * 1000;

Vue.config.productionTip = false

window.database = {
    money: '100000',
    people: '14',
    like: '256'
  };

// NOTE: history 조회 시 조회 할 txIds
window.txIds = [];

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')