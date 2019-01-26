import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {$http, $baseUrl} from './http'
import * as $utils from './utils'
import filters from './filters'
import '@/plugins/websocket.js'
import "@/plugins/my-websocket.js"
import '@/common/css/reset.css';
import '@/common/css/global.styl';

/* ElementUi */
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = $http
Vue.prototype.$utils = $utils;

filters(Vue)
Vue.use(ElementUI);


Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
