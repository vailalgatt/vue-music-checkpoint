// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import Home from '@/components/Home'
import Itunes from '@/components/Itunes'
import MyTunes from '@/components/MyTunes'

Vue.config.productionTip = false
Vue.use(Vuetify)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
