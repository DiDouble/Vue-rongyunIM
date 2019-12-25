import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/style.css' // 外部static样式 ------重要
import '@/assets/common.css'
import 'lib-flexible/flexible'
import axios from 'axios'

import {Cell, CellGroup, Field, Button , Swipe, SwipeItem , ImagePreview , Loading , Tag , Image , Overlay , Toast , Tab, Tabs, Grid, GridItem, SwipeCell, Dialog} from "vant";
const arr = [Cell, CellGroup, Field, Button, Swipe, SwipeItem, ImagePreview, Loading, Tag, Image, Overlay, Toast, Tab, Tabs, Grid, GridItem, SwipeCell, Dialog];
arr.map(e => {
 //动态生成组件
 Vue.use(e);
});

Vue.config.productionTip = false
Vue.prototype.$http = axios

import * as filters from './filters' // global filters
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
	App.vue中的token
	Chat.vue的targetId
**/

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
