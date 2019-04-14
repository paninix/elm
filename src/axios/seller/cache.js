import sendRequest from '../base';
const CACHE_KEY = 'seller_cache_key'

export default  {
	getSeller(options) {
		return sendRequest(CACHE_KEY, 'seller-getSeller',options)
	},
	getSellerAll(options) {
		return sendRequest(CACHE_KEY, 'seller-getSellerAll',options)
	},
	getRatings(options) {
		return sendRequest(CACHE_KEY, 'seller-getRatings',options)
	}	
}