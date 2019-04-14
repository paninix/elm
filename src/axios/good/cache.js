import sendRequest from '../base';
const CACHE_KEY = 'good_cache_key'

export default {
	getGood(options) {
		return sendRequest(CACHE_KEY, 'good-getGood',options);
	},
	getGoods(options) {
		return sendRequest(CACHE_KEY, 'good-getGoods',options);
	}
}


