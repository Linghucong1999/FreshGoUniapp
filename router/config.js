//路由配置配置数组，用于定义程序中的页面路径和页面
// import Index from '../pages/index/index'
// import Classify from '../pages/classify/index'
// import ShopCart from '../pages/shopCart/index'
// import Mine from '../pages/mine/index'
// import Login from '../pages/mine/login'
// import Register from '../pages/mine/register'
// import GoodDetail from '../pages/good/detail'
export default [
	{
		path:'/pages/index/index',name:'index/index',
	},
	{
		path:'/pages/classify/index/:categoryId?',name:'classify/index',
	},{
		path:'/pages/shopCart/index',name:'shopCart/index' ,
	},{
		path:'/pages/mine/index',name:'mine/index',
	},{
		path:'/pages/mine/login',name:'mine/login',
	},{
		path:'/pages/mine/register',name:'mine/register',
	},{
		path:'/pages/good/detail',name:'good/detail',
	}
]