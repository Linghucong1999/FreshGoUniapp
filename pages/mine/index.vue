<template>
	<!-- 登录选项 -->

	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="container-wechat">
			<open-data type="userAvatarUrl" class="container-button-avtatr"></open-data>

			<open-data type="userNickName" class="container-button-nickname"></open-data>
			<view class="container-button-icon">
				<uni-icons type="shop-filled"  size="30"></uni-icons>
				<uni-icons type="location" size="30"></uni-icons>
				<uni-icons type="home" size="30"></uni-icons>
			</view>
		</view>

		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<view class="container">
			<image src="../../static/images/mine/wallhaven-4oewd5.jpg" class="container-image" ></image>
			<text class="container-name">生鲜Go</text>
			<view class="container-icons">
				<uni-icons type="shop-filled"  size="30" ></uni-icons>
				<uni-icons type="location" size="30"></uni-icons>
				<uni-icons type="home" size="30"></uni-icons>
			</view>
			
			
		</view>
		<!-- #endif -->
		
		<view class="flexicons">
			<view class="flexicons-second">
				<view class="flexicons-content">
					<uni-icons type="shop" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">购物</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="wallet" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">钱包</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="heart" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">我的收藏</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="home" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">收货地址</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="gift" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">优惠</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="phone" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">客服</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="cart" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">购物车</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="help" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">寻求帮助</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="staff" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">常看商铺</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="vip" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">我的会员</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="chatboxes" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">联系商铺</text>
				</view>
				<view class="flexicons-content">
					<uni-icons type="chatbubble" size="40" color="#2D9A3A"></uni-icons>
					<text class="flexicons-content-text">联系快递员</text>
				</view>
				
			</view>
		</view>
		
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				// userInfo: [], //把用户信息存进数组里面
			}
		},
		methods: {

		},
		onLoad() {
			//#ifdef MP-WEIXIN
			// this.onUserLogin()
			//#endif
		},



	}
</script>

<style>
	/* 微信 */
	<!-- #ifdef MP-WEIXIN -->
	.container-wechat {
		
		display: flex;
		/* align-items: center;
		justify-content: center; */
		flex-direction: row;
		position: relative;
		margin-left: 10px;
	}
	.container-button-avtatr{
		margin-top: 50rpx;
		margin-right: 50rpx;
		box-shadow: 0 1px 5px #939393;
		width: 200rpx;
		height: 200rpx;
	}
	.container-button-nickname{
		position: absolute;
		left: 220rpx;
		top: 20%;
		font-size: 36rpx;
		font-weight: bold;
	}
	.container-button-icon{
		position: absolute;
		left: 220rpx;
		top: 60%;
		display: flex;
		/* flex-direction: row; */
		align-items: center;
		justify-content: space-around;
		
	}
	<!-- #endif -->
	/* 浏览器 */
	.container{
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		margin-left: 20px;
		position: relative;
	}
	.container-image{
		width: 350rpx;
		height: 250rpx;
		margin-right: 10px;
		border-radius: 10%;
		box-shadow: 0 1px 5px #939393;
	}
	.container-name{
		font-size: 36rpx;
		font-weight: bold;
		letter-spacing: 5rpx;
		
	}
	.container-icons{
		position: absolute;
		left: 360rpx;
		top: 50%;
		
	}
	
	
	.flexicons{
		margin-top: 50px;
		display: flex;
	}
	.flexicons-second{
		box-shadow: 0px -3px 5px #C7C7C7;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		display: flex;
		flex-wrap: wrap;
		
		
	}
	.flexicons-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 20px 5px 10px 20px;
	}
	.flexicons-content-text{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		font-weight: bold;
		color: #8b8b8b;
	}
	
</style>
