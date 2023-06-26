import fly from './Flyconfig.js';

class ServerBase {
	constructor() {

	};

	getRequest(url = '', params = '', data = null) { //url地址,params请求参数,data请求体中的参数
		return fly.request(`${url}/${params}`, data, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		})
	}

	// deleteRequest(url='',params=''){

	// };

	postRequest(url = '', params = null, data = '') {
		return fly.request(`${url}`, params, {
			method: 'POST',
		})
	}
}
export default ServerBase