const env = process.env.NODE_ENV;
let basePath = '';

if (env === 'development') { //开发环境
	basePath = 'http://172.17.49.236:8806'
} else { //生产环境
	basePath = 'http://172.17.49.236:8806'
}
export default {
	basePath
}
