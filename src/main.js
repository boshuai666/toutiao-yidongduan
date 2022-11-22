import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.less'
// 导入全局第三方vant组件库插件
import './plugins/index'

// 全局使用Vant组件库
// 下载vant组件库 yarn add vant@2 并导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)// 区局注册Vant组件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
