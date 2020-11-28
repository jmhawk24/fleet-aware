import Calendar from './components/Calendar'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hello from './components/Hello'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/foo', component: Hello},
  {path: '/calendar', component: Calendar}
]
const router = new VueRouter({routes: routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
