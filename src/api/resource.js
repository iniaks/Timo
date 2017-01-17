import axios from 'axios'

const resource = axios.create({
	baseURL: 'http://49.51.10.135/',
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
