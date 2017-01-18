import Vue from 'vue'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
import store from './vuex/store'
import {routes} from './routes.js'
import App from './components/App'
// import filters from './utils/filter.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
// style
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/core.less'
// config
// import {BASE_URL} from './config/base.js'

/* eslint-disable no-new */
Vue.use(VueRouter)

Vue.config.silent = (process.env.NODE_ENV === 'production')
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
	routes,
	mode: 'history'
})

sync(store, router)
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
window.router = router
