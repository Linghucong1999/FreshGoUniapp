// 常用工具函数封装

//随便写写JsDoc可要可不要
/**
 *时间转换
 *@param {Number} targetTime
 *@return {Array} [天，时，分，秒]
 */

export function countdowmn(time) {


	// const startTime=new Date('2023-5-01 00:00:00');
	const endTime = new Date('2023-06-01 12:00:00');

	//time是用户的时间


	//当前活动时间开始的时间差
	// const beginDiff=parseInt((startTime.getTime()-nowTime.getTime())/1000)

	//当前活动距离结束时间
	const endDiff = parseInt((endTime.getTime() - time) / 1000);
	if (endDiff < 0) { //时间过期
		return -1;
	} else {
		const day = timeFullZero(parseInt(endDiff / 3600 / 24));
		const hour = timeFullZero(parseInt((endDiff / 3600) % 24));
		const minute = timeFullZero(parseInt((endDiff / 60) % 60));
		const second = timeFullZero(parseInt(endDiff % 60));

		return [day, hour, minute, second];
	}



}

function timeFullZero(num) {
	return num >= 10 ? `${num}` : `0${num}`;
}
