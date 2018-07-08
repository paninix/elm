import axios from 'axios'
import setting from './setting'

let httpURL = "http://www.xuguobin.club/api/elm/" //这是我服务器的api接口
let localURL = 'http://localhost/api/elm/';     //这是本地koa2的api接口

axios.defaults.baseURL = httpURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class AxiosCache {
	constructor() {
		this.__config = {}
		this.__setting = setting;
		this.init();
	}

	init() {
		this.doFlushSetting(CACHE_KEY, )
	}

	doFlushSetting(key, conf) {
		if (!key && typeof key !== 'string') {
			return
		}
		this.__config[key] = conf
	}

	resultJudge(code) {
		return code
	}

	sendRequest(key, options) {
		let send = this.__config[this.settingKey][key];
		let self = this;
		let baseURL = send.url;
		send.method == 'get'
			? options.data && (send.url += options.data)
			: send.data = options.data
		console.log(send.url)
		axios(send)
			.then(function (response) {
				send.url = baseURL;
				if (self.resultJudge(response.data.status)) {
					options.success(response.data.data)
				} else {
					options.fail
						? options.fail(response.data.data)
						: self.handleErrorCase(response.data.status)
				}
			}).catch(function (error) {
				self.handleErrorCase(error)
			})
	}

	handleErrorCase(error) {
		if (typeof error == 'Number') {
			console.log(error)
		} else {
			alert(error)
		}
	}
}