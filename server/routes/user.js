const Router = require('koa-router');
const api = require('../api/');
const formatDate = require('../middleware/formatDate');
const router = new Router();

router
.post('/login',async(ctx)=>{
	console.log(1111);
	let user = ctx.request.body;
	let userId;
	//进行登录验证
	await api.userLogin(user.username)
	.then(res=>{
		let info = res[0];
		if(info == undefined){
			ctx.body = {'status':false,'data':'用户名不存在'};
		}else{
			if(info.password != user.password){
				ctx.body = {'status':false,'data':'密码错误'};
			}else{
				userId = info.userId;
				ctx.body = {'status':true,'data':'登录成功'};
			}
		}
	}).catch(err=>{
		console.log(err);
	});
	//用户ID初始化
	api.initUserId( userId );
})
.get('/infor',async(ctx)=>{
	//获取用户基本信息
	await api.getUserInfo( )
	.then(res=>{
		ctx.body = {'status':true,'data':res[0]};
	}).catch(err=>{
		ctx.body = {'status':false,'data':'未知错误'};
	});
})
.get('/order',async(ctx)=>{
	await api.getUserOrders(ctx.query.type)
	.then(res=>{
		ctx.body = {'status':true,'data':res};
	}).catch(err=>{
		ctx.body = {'status':false};
	});
})
.get('/confirm',async(ctx)=>{
	await api.userConfirmOrder(ctx.query.orderId)
	.then(res=>{
		ctx.body = {'status':true,'data':'已收货'};
	}).catch(err=>{
		ctx.body = {'status':false,'data':'收货失败'};
	});
})
.get('/submit',async(ctx)=>{
	let order = JSON.parse(ctx.query.order);
	let account = 0;
	//获取用户余额信息
	await api.getUserInfo()
	.then(res=>{
		account = res[0].account;
	}).catch(err=>{
		ctx.body = {'status':false,'data':'未知错误'};
	});
	if(account < order.price){
		ctx.body = {'status':false,'data':'余额不足'};
		return;
	}else{
		account = account - order.price;
	}
	//修改用户余额信息
	await api.userAccountSub(account)
	.then(res=>{
		;
	}).catch(err=>{
		ctx.body = {'status':false,'data':'支付失败'};
	});
	//用户下单
	await api.userSubmitOrder(order)
	.then(res=>{
		ctx.body = {'status':true,'data':'下单成功'};
	}).catch(err=>{
		ctx.body = {'status':false,'data':'下单失败'};
	});
})
.get('/rating',async(ctx)=>{
	let rating = JSON.parse(ctx.query.rating);
	await api.userSubmitRating(rating)
	.then(res=>{
		;
	}).catch(err=>{
		ctx.body = {'status':false,'data':'评价失败'};
	});
	await api.userRatedOrder(rating.orderId)
	.then(res=>{
		ctx.body = {'status':true,'data':'评价成功'};
	}).catch(err=>{
		ctx.body = {'status':false,'data':'评价失败'};
	});
})


module.exports = router;