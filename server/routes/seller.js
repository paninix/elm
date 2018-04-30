const Router = require('koa-router');
const api = require('../api/');
const router = new Router();

router
.get('/top',async(ctx)=>{
	let seller;
	await api.getSellerInfo()
	.then(res=>{
		seller = res[0];
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	api.initSellerId( seller.sellerId );
	await api.getSellerSupports()
	.then(res=>{
		seller.supports = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	ctx.body = {'status':true,'data':seller};
})
.get('/all',async(ctx)=>{
	let seller;
	await api.getSellerInfo()
	.then(res=>{
		seller = res[0];
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	await api.getSellerSupports()
	.then(res=>{
		seller.supports = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	await api.getSellerPics()
	.then(res=>{
		seller.pics = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	await api.getSellerInfos()
	.then(res=>{
		seller.infos = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	ctx.body = {'status':true,'data':seller};
})
.get('/rating',async(ctx)=>{
	let ratings;
	await api.getSellerRatings(ctx.query.type)
	.then(res=>{
		ratings = res;
	}).catch(err=>{
		ctx.body = {'status':false};
	});
	for(let rating of ratings){
		await api.getUserInfo(rating.userId)
		.then(res=>{
			rating.nick = res[0].nick;
			rating.avatar = res[0].headSrc;
		}).catch(err=>{
			ctx.body = {'status':false};
		})
	}
	ctx.body = {'status':true,'data':ratings};
});

module.exports = router;