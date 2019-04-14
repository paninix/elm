import axios from 'axios'
import Vue from 'vue'

let httpURL = "http://www.xuguobin.club/api/elm/" //这是我服务器的api接口
let localURL = 'http://localhost/api/elm/';     //这是本地koa2的api接口

axios.defaults.baseURL = httpURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 判断状态码
function resultJudge(code) {
	return code
}
// 处理错误公共方法
function handleErrorCase(error) {
	if (typeof error == 'Number') {
		console.log(error)
	} else {
		alert(error)
	}
}
// 发送请求
export default function sendRequest(settingKey, key, data) {
	let send = Vue.$axios.__config[settingKey][key];
	let baseURL = send.url;
	send.method == 'get'
		? data && (send.url += data)
		: send.data = data;
	return new Promise((resolve,reject) => {
		axios(send)
		.then((res)=>{
			send.url = baseURL;
			resultJudge(res.data.status) ? resolve(res.data.data) : reject(res.data.data);
		}).catch((err)=>{
			handleErrorCase(err)
		});
	});
}