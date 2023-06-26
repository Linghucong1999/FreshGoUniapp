import ServerBase from './ServerBase.js';

class HttpServer extends ServerBase {
	constructor() {
		super();
		this.$$path = { //封装私有
			indexLists: '/index', //首页数据
			goodLists: '/good/lists', //所有商品数据
			goodDetail: '/good/detail', //商品详细信息

			//用户再细说
		};
	};

	getIndexLists(params, data) {
		return this.getRequest(this.$$path.indexLists, params, data);
	};

	getGoodLists(params, data) {
		return this.getRequest(this.$$path.goodLists, params, data);
	};

	getGoodDetail(params, data) {
		return this.getRequest(this.$$path.goodDetail, params, data);
	}
}

const $HttpServer = new HttpServer();
export default $HttpServer;
