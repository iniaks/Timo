import {
	GET_EXCHANGE
} from './exchange.types.js'
import localStorage from '../../../utils/localStorageService'

const state = {
	exchanges: {}
}

const getters = {
	exchanges: state => state.exchanges
}

const mutations = {
	[GET_EXCHANGE] (state, action) {
		let _bank = action.bank.toUpperCase()
		state.exchanges = Object.assign({}, state.exchanges, {[_bank]: {
			name: _bank,
			exchanges: action.exchanges.items
		}})
		localStorage.set('prev', state.exchanges)
	}
}

export default {
	state,
	getters,
	mutations
}
