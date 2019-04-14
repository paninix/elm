// 引入状态码表
import setting from './base/setting'
// 引入config配置表
import userConfig from './user/config';
import goodConfig from './good/config';
import sellerConfig from './seller/config';

export default {
    __setting: setting,
    __config:  {
        'user_cache_key': userConfig,
        'good_cache_key': goodConfig,
        'seller_cache_key': sellerConfig
    }
}
