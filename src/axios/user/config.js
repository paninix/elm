export default {
	'user-getUser': {
		url: 'user/infor',
		method: 'get'
	},
	'user-getOrders': {
		url: 'user/order?type=',
		method: 'get'
	},
	'user-submitOrder': {
		url: 'user/submit?order=',
		method: 'get'
	},
	'user-confirmOrder': {
		url: 'user/confirm?orderId=',
		method: 'get'
	},
	'user-submitRating': {
		url: 'user/rating?rating=',
		method: 'get'
	},
	'user-userLogin': {
		url: 'user/login',
		method: 'post'
	}
}