import types from './types.js'

const actions={
	//购物车加入一件商品
	addOrder({commit,state},food) {
		let orders = state.cart;
		state.total += food.price;
		for(let i=0;i<orders.length;i++){
			//如果商品已经在订单中
			if(orders[i].foodId === food.foodId){
				orders[i].count++;
				orders[i].total += food.price;
				return;
			} 
		}
		//如果商品不在订单中
		food.count = 1;
		food.total = food.price;
		orders.push(food);
	},
	//购物车减去一件商品
	subOrder({commit,state},food) {
		let orders = state.cart;
		state.total -= food.price;
		for(let i=0;i<orders.length;i++){
			//如果商品已经在订单中
			if(orders[i].foodId === food.foodId){
				//购物车里就最后一件商品了
				if(orders[i].count === 1){
					orders.splice(i,1);
				}else {
					orders[i].count--;
					orders[i].total -= food.price;
				}
				return;
			} 
		}
		//如果商品不在订单中 高级漏洞
	},
	//清空购物车
	cleanOrder({commit,state}) {
		state.cart = [];
		state.total = 0;
	},
	//改变登录状态
	changeLoginState({commit,state}) {
		state.isLogin = !state.isLogin;
	},
}

export default actions;