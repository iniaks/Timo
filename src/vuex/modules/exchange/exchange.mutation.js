import {
	GET_EXCHANGE
} from './exchange.types.js'

const state = {
	exchanges: []
}

const getters = {
	exchanges: state => state.exchanges
}

const mutations = {
	[GET_EXCHANGE] (state, action) {
		state.exchanges = action.exchanges.items
	}
}

export default {
	state,
	getters,
	mutations
}
