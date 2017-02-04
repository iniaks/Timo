import axios from 'axios'
import {BASE_URL} from '../config/base'

const resource = axios.create({
	baseURL: BASE_URL,
	withCredentials: false,
	headers: {
		'Access-Control-Allow-Headers': '*'
	}
})

export default {
	getInfoByBank: (bank) => {
		return resource.get('exchange', {
			params: {
				bank: bank
			}
		})
	}
}
