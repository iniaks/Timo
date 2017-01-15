import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: false}
// interceptors
Vue.http.interceptors.push((response, next) => {
	next((response) => {
		try {
			response.body = JSON.parse(response.body)
		} catch (e) {
			response.body = response.body
		}
	})
})
