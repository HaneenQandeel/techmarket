import Vue from 'vue'
import about from './about.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(about),
}).$mount('#app')
