import {
	GET_EXCHANGE
} from './exchange.types.js'
import localStorage from '../../../utils/localStorageService'

const state = {
	exchanges: {},
	selected_banks: localStorage.get('banks') || ['ICBC', 'ABC', 'BOC', 'CCB']
}

const mutations = {
	[GET_EXCHANGE] (state, action) {
		state.exchanges = action.exchanges.result
		localStorage.set('prev', state.exchanges)
	}
}

export default {
	state,
	mutations
}
