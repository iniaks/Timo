import axios from 'axios'
import * as test from './exchange.types.js'

const url = 'http://49.51.10.135/exchange'
const actions = {
	getExchange ({commit}) {
		axios.get(url).then(res => {
			commit(test.GET_EXCHANGE, {
				exchanges: res.data
			})
		})
	}
}
export default {
	actions
}
