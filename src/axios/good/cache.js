import BaseCache from '../base/base'
import config from './config'
const CACHE_KEY = 'good_cache_key'

export default class GoodCache extends BaseCache {
	constructor () {
		super()
		this.settingKey = CACHE_KEY
	}

	init () {
		this.doFlushSetting(CACHE_KEY, config)
	}

	getGood(options) {
		this.sendRequest('good-getGood',options);
	}

	getGoods(options) {
		this.sendRequest('good-getGoods',options);
	}
}


