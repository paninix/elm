import BaseCache from '../base/base'
import config from './config'
const CACHE_KEY = 'user_cache_key'

export default class UserCache extends BaseCache {
	constructor () {
		super()
		this.settingKey = CACHE_KEY
	}

	init () {
		this.doFlushSetting(CACHE_KEY, config)
	}

	getUser(options) {
		this.sendRequest('user-getUser',options)
	}

	getOrders(options) {
		this.sendRequest('user-getOrders',options)
	}

	getRatings(options) {
		this.sendRequest('user-getRatings',options)
	}

	submitOrder(options) {
		this.sendRequest('user-submitOrder',options)
	}

	confirmOrder(options) {
		this.sendRequest('user-confirmOrder',options)
	}

	submitRating(options) {
		this.sendRequest('user-submitRating',options)
	}

	userLogin(options) {
		this.sendRequest('user-userLogin',options)
	}
}