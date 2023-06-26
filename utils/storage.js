export function setStorageSync(name,data){
	try{
		uni.setStorageSync(name,data)	//将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
	}catch(e){
		console.log(e)
	}
}