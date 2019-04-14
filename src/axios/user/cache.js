import sendRequest from '../base';
const CACHE_KEY = 'user_cache_key'

export default  {
	getUser(options) {
		return sendRequest(CACHE_KEY, 'user-getUser',options)
	},

	getOrders(options) {
		return sendRequest(CACHE_KEY, 'user-getOrders',options)
	},

	getRatings(options) {
		return sendRequest(CACHE_KEY, 'user-getRatings',options)
	},

	submitOrder(options) {
		return sendRequest(CACHE_KEY, 'user-submitOrder',options)
	},

	confirmOrder(options) {
		return sendRequest(CACHE_KEY, 'user-confirmOrder',options)
	},

	submitRating(options) {
		return sendRequest(CACHE_KEY, 'user-submitRating',options)
	},

	userLogin(options) {
		return sendRequest(CACHE_KEY, 'user-userLogin',options)
	}
}