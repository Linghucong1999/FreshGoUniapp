import Fly from 'flyio/dist/npm/wx';
const fly = new Fly();
import path from './Pathconfig.js';

//响应时间
fly.config.timeout = 20000;

//配置接口地址
fly.config.baseURL = path.basePath;

//添加请求拦截器	官方文档：Fly支持请求／响应拦截器，可以通过它在请求发起之前和收到响应数据之后做一些预处理。
fly.interceptors.request.use((config, promise) => {
	return config;
})

//添加响应拦截
fly.interceptors.response.use(
	(response) => {
		//只将请求结果的data字段返回
		return response.data;
	},
	(err) => {
		uni.showModal({
			title: '提示',
			content: `${err.message}`,
			showCancel: false
		});
		//发生网络失败的话，再另写代码

	}

)

export default fly;
