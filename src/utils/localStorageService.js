const prefix = 'ls.'
const storage = window.localStorage

export default {
	get: key => {
		var _key = prefix + key
		var _value = storage.getItem(_key)
		try {
			return JSON.parse(_value)
		} catch (e) {
			return _value
		}
	},
	set: (key, value) => {
		var _key = prefix + key
		var _value
		try {
			_value = JSON.stringify(value)
		} catch (e) {
			_value = value
		}
		storage.setItem(_key, _value)
	},
	remove: key => {
		var _key = prefix + key
		storage.removeItem(_key)
	}
}
