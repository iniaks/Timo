import Vue from 'vue'
import Vuex from 'vuex'
import ExchangeActions from './modules/exchange/exchange.action.js'
import ExchangeVuexStore from './modules/exchange/exchange.mutation.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Exchanges: {
			...ExchangeActions,
			...ExchangeVuexStore
		}
	}
})
