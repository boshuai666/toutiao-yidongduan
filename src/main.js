import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.less'
// 导入全局第三方vant组件库插件
import './plugins/index'
// 导入flexible第三方动态设置 REM 基准值插件
import 'amfe-flexible'
// 导入flexible第三方动态设置 REM 基准值插件
import './utils/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
