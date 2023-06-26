<template>
	<view class="classify">

		<view class="bar">
			<view class="bar-list">
				<template v-for="item in barList" :key="item.id">
					<view v-bind:class="[currentTab==item.id?'activeTab':'','bar-list-item']" @click="changeDetail(item.id)">{{item.name}}</view>
				</template>
			</view>
		</view>

		<scroll-view scroll-y="true">
			<view class="right-content">
				<template v-for="(item,index) in dataList" :key="item.id">
					<view class="good-item">
						<image v-bind:src="item.coverImage" class="good-image"  @click="toGooddetail(item.id)"></image>
						<view class="right-slide">
							<view class="good-name"  @click="toGooddetail(item.id)">{{item.name}}</view>
							<view class="good-sale-num" >已售<text
									class="sale-num">{{item.saleNum}}</text>{{item.saledUnit}}</view>
							<view class="good-price">
								<text class="discount-price">
									<text class="big-font">{{item.discountPrice}}</text>元/{{item.saledUnit}}
								</text>
								<text class="market-price">{{item.marketPric}}元/{{item.saledUnit}}</text>
								<button class="item-buy" @click="addShopCart(item)"></button>
							</view>

						</view>
					</view>
				</template>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barList: [{
						id: 1,
						name: '新鲜水果'
					},
					{
						id: 2,
						name: '蔬瓜菜品'
					},
					{
						id: 3,
						name: '飞禽走兽'
					},
					{
						id: 4,
						name: '海鲜水产'
					},
					{
						id: 5,
						name: '酒水饮料'
					}
				],
				currentTab: 1, //当前列表id
				dataList: [], //数据

			}
		},
		onShow() {
			//#ifdef H5
			const id = this.$route.query.categoryId || this.currentTab
			this.currentTab = id
			this.getGoodList(id)
			// console.log(this.$route.query.categoryId)
			// console.log(this.$router)
			//#endif
		},
		onLoad(option) {
			//#ifdef MP-WEIXIN
			const id = option.categoryId || this.currentTab
			this.currentTab = id
			this.getGoodList(id)
			// console.log(option.categoryId)
			//#endif
		},
		methods: {
			//获取商品信息
			getGoodList(id) {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				this.$Http.getGoodLists('', {
					page: 1,
					limit: 20,
					discountPrice: 'asc',
					category: id
				}).then(res => {
					uni.hideLoading()
					if (res.code == 1) {
						this.dataList = res.data
					} else {
						uni.showLoading({
							title: '提示',
							content: '网络出错了',
							showCancel: false
						})
					}
				}).catch(err => {
					uni.hideLoading()
				})
			},
			//切换商品
			changeDetail(id){
				this.currentTab=id
				this.getGoodList(id)
			},
			//跳转详情页
			toGooddetail(id){
				//#ifdef MP-WEIXIN
				uni.navigateTo({
					url:'/pages/good/detail?detailId='+id
				})
				//#endif
				
				//#ifdef H5
				this.$router.push({path:'/pages/good/detail',query:{detailId:id}})
				//#endif
				
			},
			//添加进入购物车
			addShopCart(item){
				try{
					let value=uni.getStorageSync('shopCart')||[]
					let index=value.findIndex((value,index)=>{
						return value.id===item.id
					})
					if(index !==-1){
						value[index].buyNum++
					}else{
						item.buyNum=1
						value.push(item)
					}
					
					try{
						uni.setStorageSync('shopCart',value)
						uni.showToast({
							title:'已添加进入购物车',
							icon:'success',
							duration:1000
						})
					}catch(e){
						uni.showToast({
							title:'加入购物车失败,请联系开发人员',
							icon:'error',
							duration:1000
						})
						//TODO handle the exception
					}
				}catch(e){
					uni.showToast({
						title:'数据未完成渲染,请联系开发人员',
						icon:'error',
						duration:1000
					})
				}
			}
		}
	}
</script>

<style>
	.classify {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}

	.bar {
		width: 200rpx;
		height: 100%;
		/* border-right: 1px solid #d8d8d8; */
		background-color: #F8F8F8;
	}

	.bar-list-item {
		font-size: 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #888888;
		border-left: 3px solid transparent;
	}

	.activeTab {
		border-left: 3px solid #2B9939;
		background-color: #FFFFFF;
		/* transition: all .3s ease-in; */
		color: #000000;
	}
	
	

	.right-content {
		flex: 1;
		margin-left: 30rpx;
	}

	.good-item {
		display: flex;
		margin-top: 30rpx;
		width: 540rpx;
		height: 220rpx;
	}

	.good-image {
		width: 230rpx;
		height: 220rpx;
	}

	.right-slide {
		position: relative;
		margin-left: 30rpx;
	}

	.good-name {
		width: 100%;
		font-size: 30rpx;
	}

	.good-sale-num {
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #787878;
	}

	.sale-num {
		color: #d37e53;
		margin: 0 10rpx;

	}
	.good-price{
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: 320rpx;
		margin-top: 20rpx;
	}
	.discount-price{
		font-size: 26rpx;
		color: #c73634;
		font-weight: bold;
	}
	.big-font{
		font-size: 40rpx;
	}
	.market-price{
		font-size: 20rpx;
		color: #a9a9a9;
		text-decoration: line-through;
	}
	.item-buy{
		position: absolute;
		top: 15rpx;
		right: 20rpx;
		width: 36rpx;
		height: 40rpx;
		background-image: url('../../static/images/home/tianjia.png');
		background-repeat: no-repeat;
		background-size: 75%;
		background-color: transparent;
	}
	.item-buy::after{
		border: 0;
		outline: 0;
	}
</style>
