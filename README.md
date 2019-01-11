# 注
  * 这个版本是我大三时候写的，很多命名都不规范，目录结构也非常的混乱，git提交的版本也很混乱。虽然最近想要重新重构一下项目，曾经重构过一次。但是总感觉  缝缝补补很不痛快，正好我最近也想做一个VueJS来复习一下VueJS，所以打算重新将elm写过一遍。
  * 目前只打算重写前端部分，有时间再考虑重写后台的koa2部分 
  * [正在重写的git地址](https://github.com/The-Never/elm2)

#[线上访问地址](http://www.xuguobin.club/projects/elm/index.html)


## @copy elm@2.1-dev开发版本

注意：

 * 我的服务器内存有限，反应时间可能有些延迟。
 * 请不要往我服务器内插入恶意代码。
 * 不要往我服务器传送过多的数据。
 * 用户名：admin；密码：1111

-------

### 技术栈

 * 前端部分
	vuejs，vuex，axios，element-ui，webpack
 * 后台部分
	koa2，mysql

### 安装和运行

 * 后台部分
	安装依赖
	```npm install``` 
	```node index``` 
	成功执行！

 * 前端部分
	安装依赖
	```npm install``` 
	```npm run dev``` 
	成功执行！

写的不好，欢迎star和fork。

### 项目更新

 * 第二次更新（2018 4月21日）
		将axios操作抽离成单独的app.js文件
 * 第三次更新（2018 4月21日）
 		提交了后台代码
 * 第四次更新（2018 7月8日）
    重构了前台结构（重大更新）

### 项目结构

<pre>

├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
│
├── server             // 项目后台
│   ├── api            // api操作
│   ├── db             // 与数据库交互
│   ├── index.js       // 后台入口文件
│   └── package.json   // 项目配置文件
│
├── src                // 生产目录
│   └── axios           // axios操作
|         ├──base       // axios模板
|         |    ├──base.js     //axios基类
|         |    └──setting.js  //状态码
|         └── user
|               ├──cache.js     //请求函数
|               └──config.js    //配置信息
|
|   ├── base           //vue模板
│   ├── components     // 组件
|   |     ├──common    //公共组件
|   |     └──admin
|   |          ├── ui.vue             // 输出组件
|   |          ├── component.html     // template
|   |          ├── component.js       // script
|   |          └── component.less     // style
|   |  
│   ├── router         // 路由
│   ├── store          // vuex状态管理器
│	   ├── App.vue        // 首页
│   └── main.js        // Webpack 预编译入口
│     

</pre>
