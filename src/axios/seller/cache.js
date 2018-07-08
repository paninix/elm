import BaseCache from '../base/base'
import config from './config'
const CACHE_KEY = 'seller_cache_key'

export default class SellerCache extends BaseCache {
	constructor () {
		super()
		this.settingKey = CACHE_KEY
	}

	init () {
		this.doFlushSetting(CACHE_KEY, config)
	}

	getSeller(options) {
		this.sendRequest('seller-getSeller',options)
	}

	getSellerAll(options) {
		this.sendRequest('seller-getSellerAll',options)
	}

	getRatings(options) {
		this.sendRequest('seller-getRatings',options)
	}	
}