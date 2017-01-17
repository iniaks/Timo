import api from '../../../api/resource.js'
import * as test from './exchange.types.js'

const actions = {
	getExchange ({commit}, bank) {
		api.getInfoByBank(bank).then(res => {
			commit(test.GET_EXCHANGE, {
				bank: bank,
				exchanges: res.data
			})
		})
	}
}
export default {
	actions
}
