<template>
	<view class="good-item">
		<image class="item-image" v-bind:src="goodList.coverImage" @click="toGoodList(goodList.id)"></image>
		<view class="item-name">{{goodList.name}}</view>
		<view class="item-under">
			<text class="item-discount-price">{{goodList.discountPrice}}元/{{goodList.saledUnit}}</text>
			<text class="item-market-price">{{goodList.marketPric}}元/{{goodList.saledUnit}}</text>
			<button class="item-buy" @click="addShopCart()"></button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'goodItem',
		props: {
			goodList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			//跳转商品详情页
			toGoodList(id) {
				const detailId = id

				//#ifdef MP-WEIXIN
				uni.navigateTo({
					url: '/pages/good/detail?detaiId=' + id
				})
				//#endif


				//#ifdef H5
				this.$router.push({
					path: '/pages/good/detail',
					query: {
						detailId
					}
				})
				//#endif
			},
			//添加到购物车
			addShopCart() {
				try {
					let value=uni.getStorageSync('shopCart')||[]
					let index=value.findIndex((valueid)=>{
						return valueid.id == this.goodList.id
					})
					if(index!==-1){
						value[index].buyNum++
					}else{
						this.goodList.buyNum=1
						value.push(this.goodList)
					}
					try{
						uni.setStorageSync('shopCart',value)
						uni.showToast({
							title:'已添加进购物车',
							icon:'success',
							duration:1000
						})
					}catch(e){
						uni.showToast({
							title:'加入购物车失败,联系开发人员',
							icon:'error',
							duration:1500
						})
						// console.log(e)
					}
				} catch (e) {
					uni.showToast({
						title:'购物车出错,联系开发人员',
						icon:'error',
						duration:1500
						
					})
					// console.log(e)
				}
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.good-item {
		width: 320rpx;
		border-radius: 20rpx;
		box-shadow: 0px 2px 10px #c8c8c8;
	}

	.item-image {
		width: 320rpx;
		height: 320rpx;
		border-radius: 20rpx 20rpx 0 0;
	}

	.item-name {
		margin-top: 10rpx;
		font-size: 27rpx;
	}

	.item-under {
		position: relative;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.item-discount-price {
		font-size: 27rpx;
		color: #C73634;
		font-weight: bold;
	}

	.item-market-price {
		font-size: 17rpx;
		color: #A9A9A9;
		text-decoration: line-through;
	}

	.item-buy {
		display: inline-block;
		position: absolute;
		top: 2rpx;
		right: 0;
		background: url("../static/images/home/tianjia.png");
		background-repeat: no-repeat;
		width: 36rpx;
		height: 40rpx;
		background-size: 75%;
	}

	.item-buy::after {
		border: 0;

	}
</style>
