import api from '../../../api/resource.js'
import * as test from './exchange.types.js'

const actions = {
	getExchange ({commit}, banks) {
		api.getInfoByBank(banks).then(res => {
			if (res.data.status === 200) {
				commit(test.GET_EXCHANGE, {
					exchanges: res.data
				})
			}
		})
	}
}
export default {
	actions
}
