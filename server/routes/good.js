const Router = require('koa-router');
const api = require('../api/');
const router = new Router();

router
.get('/all',async(ctx)=>{
	let goods;
	await api.getGoodTypes()
	.then(res=>{
		goods = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	for(good of goods){
		await api.getGoodsByType( good.fTypeId )
		.then(res=>{
			good.foods = res;
		}).catch(err=>{
			ctx.body = {'status':false};
		});
	}
    ctx.body = {'status':true,'data':goods};
})
.get('/food',async(ctx)=>{
	await api.getGoodByGoodId(ctx.query.foodId)
	.then(res=>{
		ctx.body = {'status':true,'data':res[0]};
	}).catch(err=>{
		ctx.body = {'status':false};
	});
});

module.exports = router;