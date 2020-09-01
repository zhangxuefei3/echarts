import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(vueMiniPlayer)

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
