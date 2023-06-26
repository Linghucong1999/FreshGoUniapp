<template>
	<view class="page-index">

		<!-- 顶部轮播 -->
		<view class="swiper-center">
			<swiper class="swiper" autoplay="true" interval="2000" circular="true" indicator-dots="true">
				<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 菜单栏 -->
		<view class="menu">
			<template v-for="item in menuList" :key="item.id">
				<view class="menu-item" @click="toClassifyPage(item.id)">
					<image :src="item.image" class="menu-item-image"></image>
					<text class="menu-item-text">{{item.desc}}</text>
				</view>
			</template>
		</view>

		<!-- 限时秒杀 -->
		<view class="limit-time">

			<view class="limit-time-top">
				<text class="limit-time-title">限时优惠</text>
				<text class="limit-time-end">距结束:
					<text class="time-block">{{countDownTime[0]}}</text><text class="time-sign">:</text>
					<text class="time-block">{{countDownTime[1]}}</text><text class="time-sign">:</text>
					<text class="time-block">{{countDownTime[2]}}</text><text class="time-sign">:</text>
					<text class="time-block">{{countDownTime[3]}}</text>
				</text>
				<button class="more">
					<text class="more-sign">
						<text class="icon arrow"></text>
					</text>
					<text class="button-text">更多</text>
				</button>
			</view>

			<scroll-view scroll-x="true">
				<view class="seckill-list">

					<template v-for="item in dataList.discountList" v-bind:key="item.id">
						<view class="seckill-item">
							<image v-bind:src="item.coverImage" @click="toGoodLists(item.id)" class="seckill-image">
							</image>
							<image src="../../static/images/home/xianshimiaosha.png" class="seckill-icon"></image>
							<text class="seckill-shop-name" @click="toGoodLists(item.id)">{{item.name}}</text>
							<view class="seckill-price"  @click="toGoodLists(item.id)">
								<text class="seckill-discount-price">{{item.discountPrice}}元/{{item.saledUnit}}</text>
								<text class="seckill-market-price">{{item.marketPric}}元/{{item.saledUnit}}</text>
							</view>
						</view>
					</template>

				</view>
			</scroll-view>
		</view>

		<!-- 新人优享 -->
		<view class="new-comer">
			<view class="new-comer-top">
				<view class="new-comer-text">
					<text class="new-comer-title">新人优享</text>
					<text class="new-comer-desc">新人优惠享不停</text>
				</view>
				<button class="more">
					<text class="more-sign">
						<text class="icon arrow"></text>
					</text>
					<text class="button-text">更多</text>
				</button>
			</view>
		</view>
		<scroll-view scroll-x="true">
			<view class="seckill-list">
				<template v-for="item in dataList.newComerList" v-bind:key="item.id">
					<view class="seckill-item">
						<image v-bind:src="item.coverImage" class="seckill-image" @click="toGoodLists(item.id)"></image>
						<image src="../../static/images/home/xinren.png" class="comer-icon"></image>
						<text class="seckill-shop-name" @click="toGoodLists(item.id)">{{item.name}}</text>
						<view class="seckill-price" @click="toGoodLists(item.id)">
							<text class="seckill-discount-price">{{item.discountPrice}}元/{{item.saledUnit}}</text>
							<text class="seckill-market-price">{{item.marketPric}}元/{{item.saledUnit}}</text>
						</view>
					</view>
				</template>
			</view>
		</scroll-view>
		
		
		<!-- 水果区域 -->
		<view class="section">
			<image src="../../static/images/home/fruit-sale.jpg" class="section-sale-image"></image>
			<view class="section-list">
				<template v-for="item in dataList.fruitList" v-bind:key="item.id">
					<goodItem v-bind:goodList="item" class="good-item"></goodItem>
				</template>
			</view>
		</view>
		
		
		<!-- 蔬菜专区 -->
		<view class="section">
			<image src="../../static/images/home/fruit2.jpg" class="section-sale-image" style="height: 300rpx;"></image>
			<view class="section-list">
				<template v-for="item in dataList.vegetableList" v-bind:key="item.id">
					<goodItem v-bind:goodList="item" class="good-item"></goodItem>
				</template>
			</view>
		</view>
		
		<!-- 海鲜专区 -->
		<view class="section">
			<image src="../../static/images/home/seafood-sale2.jpg" class="section-sale-image" style="height: 300rpx;"></image>
			<view class="section-list">
				<template v-for="item in dataList.seafoodList" v-bind:key="item.id">
					<goodItem v-bind:goodList="item" class="good-item"></goodItem>
				</template>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		countdowmn
	} from '../../utils/index.js'
	import goodItem from '../../components/goodItem.vue'
	export default {
		data() {
			return {
				//轮播列表
				swiperList: [
					'../../static/images/home/banner-1.jpg',
					'../../static/images/home/banner-2.jpg',
					'../../static/images/home/banner-3.jpg',
				],

				//菜单列表
				menuList: [{
					id: 1,
					image: '../../static/images/home/menu-lanmei.jpg',
					desc: '新鲜水果'
				}, {
					id: 2,
					image: '../../static/images/home/menu-vegetable.jpg',
					desc: '蔬瓜菜品'
				}, {
					id: 3,
					image: '../../static/images/home/menu-beef.jpg',
					desc: '飞禽走兽'
				}, {
					id: 4,
					image: '../../static/images/home/menu-fish.jpg',
					desc: '海鲜水产'
				}, {
					id: 5,
					image: '../../static/images/home/menu-juice.jpg',
					desc: '酒水饮料'
				}],

				//首页数据列表
				dataList: [],

				//倒计时
				countDownTime: ['**', '**', '**', '**'],
				timer: null,
			}
		},
		onLoad() {
			this.getIndexLists()

		},
		onUnload() {
			clearInterval(this.timer) //确保定时器被消除
		},
		methods: {
			getIndexLists() {
				let that = this
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				this.$Http.getIndexLists().then(res => { //连接数据库,需要改变物品就换参数
					uni.hideLoading()
					if (res.code == 1) {
						this.dataList = res.data
						this.creatCountDown()
						// console.log(this.dataList)
					}
				}).catch(err => {
					uni.hideLoading()
					console.log(err)
				})
			},
			creatCountDown() { //倒计时
				clearInterval(this.timer)
				let nowTime = new Date().getTime()
				const insterval = 1000
				let timearr = []
				this.timer = setInterval(() => {
					nowTime += insterval //更新时间戳
					timearr = countdowmn(nowTime)
					if (timearr !== -1) {
						this.countDownTime = timearr
					} else {
						clearInterval(timer)
					}
				}, insterval)
				// this.$on('hook:onUnload',()=>{
				// 	clearInterval(timer)
				// })
			},
			toClassifyPage(id) { //跳转分类
				const categoryId = id
				
				//#ifdef MP-WEIXIN
				uni.reLaunch({
					url:`/pages/classify/index?categoryId=${categoryId}`
				})
				//#endif

				//#ifdef H5
				this.$router.push({
					path: '/pages/classify/index',
					query: {
						categoryId
					}
				})
				//#endif

			},
			toGoodLists(id) { //跳转到详情页
				//#ifdef MP-WEIXIN
				uni.navigateTo({
					url:'/pages/good/detail?detailId='+id
				})
				//#endif
				
				//#ifdef H5
				this.$router.push({path:'/pages/good/detail',query:{detailId:id}})
				//#endif
			}
		},
		components:{
			goodItem
		}
	}
</script>

<style>
	.swiper-center {
		display: flex;
		justify-content: center;
		border-radius: 20px;
	}

	.swiper {
		width: 80%;
		height: 400rpx;
		box-shadow: 0px 5px 20px;
		border-radius: 20px;
	}

	.swiper-item {
		/* background: #fff center center no-repeat; */
		border-radius: 20px;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.menu {
		margin-top: 30px;
		display: flex;
	}

	.menu-item {
		display: flex;
		width: 20%;
		flex-direction: column;
		align-items: center;
	}

	.menu-item-image {
		border-radius: 50%;
		width: 60px;
		height: 70px;
	}

	.menu-item-text {
		margin-top: 10px;
		font-size: 20rpx;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.limit-time {
		margin-top: 30rpx;
	}

	.limit-time-top {
		display: flex;
		align-items: center;
		padding-left: 30rpx;
	}

	.limit-time-title {
		font-size: 35rpx;
		font-weight: bold;
	}

	.limit-time-end {
		margin-left: 40rpx;
		font-size: 25rpx;
		color: #acacae;

	}

	.time-block {
		display: inline-block;
		font-weight: 700;
		color: #2B9939;
		text-shadow: 0 0 10rpx #23917A;
		margin: 0 10rpx;
		text-align: center;
		width: 45rpx;
		height: 45rpx;
		line-height: 45rpx;
	}

	.time-sign {
		font-size: 30rpx;
		color: #2B9939;
	}

	button {
		position: relative;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		background-color: transparent;
		padding: 0;
		font-size: inherit;
		font-family: inherit;
	}

	button.more {
		width: 130rpx;
		height: auto;
	}

	button.more::after {
		border: 0;
	}

	button.more .more-sign {
		display: inline-block;
		transition: all .45s cubic-bezier(0.65, 0, 0.076, 1);
		position: relative;
		/* margin-top: 0.5rem; */
		margin-left: -1.5rem;
		/* font-weight: 700; */
		/* background: #1e7e69; */
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 1.625rem;
		/* width: 100rpx; */
	}

	button.more .more-sign .icon {
		transition: all .45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		background-color: #2B9939;
	}



	button.more .button-text::before {
		position: absolute;
		content: '';
		top: 0.9rem;
		right: 0.4625rem;
		width: 0.525rem;
		height: 0.525rem;
		border-top: 0.125rem solid #2B9939;
		border-right: 0.125rem solid #2B9939;
		transform: rotate(45deg);
	}

	button.more .button-text {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		margin: 0 0 0 0.385rem;
		position: absolute;
		top: 0rem;
		left: -1rem;
		right: 0;
		bottom: 0;
		padding: 0.15rem 0;
		line-height: 2.2rem;
		text-align: center;
		font-weight: 700;
		color: #2B9939;
		text-shadow: 0 0 10rpx #23917A;
	}

	.seckill-list {
		display: flex;
		white-space: nowrap;
		/* margin: 15rpx auto 0 auto; */
		width: 680rpx;
	}

	.seckill-item {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-left: 40rpx;
	}

	.seckill-image {
		width: 220rpx;
		height: 220rpx;
		/* border-radius: 5rpx; */
	}

	.seckill-icon {
		margin-top: 15rpx;
		width: 146rpx;
		height: 29.6rpx;
	}

	.seckill-shop-name {
		font-size: 24rpx;
		margin-top: 10rpx;
		text-align: left;
	}

	.seckill-price {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 5rpx;
		margin-bottom: 15rpx;
		;
	}

	.seckill-discount-price {
		font-size: 20rpx;
		color: #C73634;
		text-align: center;
		font-weight: bold;
	}

	.seckill-market-price {
		position: absolute;
		right: 0;
		font-size: 17rpx;
		color: #A9A9A9;
		text-decoration: line-through;
		text-align: center;
	}
	
	.new-comer{
		margin-top: 30rpx;
	}
	.new-comer-top{
		display:flex;
		align-items: center;
		margin-left: 30rpx;
	}
	.new-comer-text{
		padding-right: 5.5rem;
	}
	.new-comer-title{
		font-size: 40rpx;
		color: #2B9939;
	}
	.new-comer-desc{
		margin-left: 30rpx;
		font-size: 26rpx;
		color: #A4A4A4;
		line-height: 50rpx;
	}
	.comer-icon{
		position: absolute;
		top: 0;
		left: 0;
		width: 50rpx;
		height: 50rpx;
	}
	
	.section-sale-image{
		display: block;
		width: 650rpx;
		height: 200rpx;
		margin: 56rpx auto 30rpx auto;
		box-shadow: 0px 5px 20px #A4A4A4;
	}
	.section-list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-items: center;
		align-items: center;
		
		/* 如果想微信水果排版对其那就把这个注释掉 */
		padding-left: 30rpx;	
	}
	.good-item{
		margin: 0 5px 10px 7px;
		
	}
</style>
