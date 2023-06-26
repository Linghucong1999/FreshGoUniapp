<template>
	<view class="shop-cart-index">

		<!-- 没有商品数据 -->
		<view v-if="shopCart.length===0" class="shop-none">
			<image src="../../static/images/shopCart/jingdog.png" class="shop-none-image"></image>
			<text class="shop-none-title">购物车空空如也</text>
			<text class="shop-none-desc">我们不如去逛逛吧</text>
		</view>

		<!-- 有商品数据 -->
		<view v-else class="shop-list">
			
			<scroll-view scroll-y="true">
				<view class="switch" v-bind:class="{active:isActive}" @click="handClickActive()">
					<text></text>
				</view>
				<checkbox-group>
					<template v-for="(item,index) in shopCart" v-bind:key="item.id">
						<view class="list-item">
							<checkbox v-bind:value="item.id.toString()" v-bind:checked="item.checked"
								@click="getCheckbox(index)"></checkbox>
							<image v-bind:src="item.coverImage" class="list-item-image"></image>
							<view class="list-item-right">
								<text class="list-item-name">{{item.name}}</text>
								<text class="list-item-dscp"><text
										class="list-item-sign">￥</text>{{item.discountPrice}}</text>

								<view class="num-group">
									<button class="buyAddSub" @click="subNum(index)"> - </button>
									<text class="buy-num">{{item.buyNum}}</text>
									<button class="buyAddSub" @click="addNum(index)"> + </button>
								</view>
							</view>
						</view>

					</template>
				</checkbox-group>
			</scroll-view>
			<view class="under">
				<label class="all-select" v-if="isActive===false">
					<label @click="radioChange()">
						<radio value="" :checked="redioChecked"></radio>
						<text class="all-select-word">全选</text>
					</label>
					<text class="all-select-total">合计:</text>
					<text class="total-price">
						{{totalPrice}}
					</text>

					<button class="to-pay">买单</button>
				</label>
				<label class="all-select" v-else>
					<label @click="radioChange()">
						<radio value="" :checked="redioChecked"></radio>
						<text class="all-select-word">全选</text>
					</label>

					<button class="detele" type="warn" @click="deleteGood">删除</button>
				</label>
			</view>

		</view>



	</view>
</template>

<script>
	import {
		setStorageSync
	} from '../../utils/storage.js'
	export default {
		data() {
			return {
				shopCart: [],
				deleteActived: false,
				totalPrice: 0,
				redioChecked: null,
				isActive: false
			}
		},
		onShow() {
			this.shopCart = uni.getStorageSync('shopCart') || []
			this.shopCart.map((item, index) => {
				return item.checked = false
			})
			this.totalPrice = new Number(0).toFixed(2)
			this.redioChecked = false

			// uni.clearStorageSync()		//清空本地数据缓存
		},
		onLoad() {
			// console.log(uni.getStorageSync('shopCart'))
			// console.log(typeof this.shopCart)
		},
		methods: {
			getCheckbox(index) {
				this.shopCart[index].checked = !this.shopCart[index].checked
				let checkNum = this.shopCart.filter(item => item.checked === true).length //查询购物车里面勾选的数据有多少条
				if (checkNum === this.shopCart.length) { //如果是全选的状态
					this.redioChecked = true
				} else {
					this.redioChecked = false
				}
				this.countPrice() //勾选就调用函数计算金额

			},
			handClickActive() { //动态样式变换
				this.isActive = !this.isActive
				// this.isDetele()
			},
			deleteGood() { //删除商品
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定要删除吗?',
					success: res => {
						if (res.confirm) {
							that.shopCart = that.shopCart.filter((item, index) => {
								return item.checked !== true //过滤掉未被选中的商品然后返回给shopCart
							})
							setStorageSync('shopCart', that.shopCart)
							that.totalPrice = new Number(0).toFixed(2)
							that.radioChange()
						}
					}
				})
			},
			isDetele() { //检查是否可以删除 暂时用不到了应为我在上面用到了v-if做判断,显示删除按钮的
				this.deleteActived = this.shopCart.some(item => {
					return item.checked === true
				})
			},
			countPrice() { //计算总金额
				let initPrice = 0
				this.totalPrice = this.shopCart.reduce((total, value, index) => {
					let tempPrice = value.checked ? value.discountPrice * value.buyNum :
						0 //判断如果是勾选状态就把值传给tempPrice
					return total + tempPrice //返回累加器
				}, initPrice).toFixed(2)
			},
			//增加数量
			addNum(index) {
				this.shopCart[index].buyNum++
				this.countPrice()
				setStorageSync('shopCart', this.shopCart)
			},
			//减少商品
			subNum(index) {
				if (this.shopCart[index].buyNum > 1) {
					this.shopCart[index].buyNum--
					this.countPrice()
					setStorageSync('shopCart', this.shopCart)
				}
			},
			radioChange() {
				if (this.redioChecked) {
					this.shopCart.map((item, index) => {
						return item.checked = false
					})
				} else {
					this.shopCart.map((item, index) => {
						return item.checked = true
					})
				}
				this.redioChecked = !this.redioChecked
				this.countPrice()
			},

			//点击买单跳转到订单页面

		}
	}
</script>

<style>
	page {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
	}

	.shop-cart-index {}

	.shop-none {
		position: absolute;
		left: 0;
		right: 0;
		top: 20%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.shop-none-image {
		width: 300rpx;
		height: 300rpx;
	}

	.shop-none-title {
		margin-top: 50rpx;
		font-size: 35rpx;
		font-weight: bold;
	}

	.shop-none-desc {
		/* font-size: 30rpx; */
		color: #A4A4A4;
	}

	.shop-list {
		margin-bottom: 120rpx;
	}

	/* 按钮触发 */
	.switch {
		display: flex;
		float: right;
		align-items: center;
		background-color: #2B9939;
		height: 32px;
		width: 48px;
		border-radius: 100px;
		padding: 0 4px;
		transition: all 350ms;
	}

	.switch text {
		display: flex;
		height: 24px;
		width: 24px;
		border-radius: 100px;
		background-color: #ffffff;
		transition: all 350ms;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 2, 38, 0.13);
	}

	.switch:hover {
		background-color: #2B9939;
	}

	.switch:hover text {
		transform: translateX(2px);
	}

	.switch:active text {
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);

	}

	.switch.active {
		transition: all 350ms;
		background-color: #E64340;
	}

	.switch.active text {
		transform: translateX(24px);
	}

	.list-item {
		clear: both;
		height: 240rpx;
		padding-left: 30rpx;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;
		background-color: #ffffff;
		box-shadow: -1px 3px 10px #e7eaed;
		border-radius: 50rpx;
		transition: all .5s ease-in-out;
	}


	.list-item-image {
		margin-left: 30rpx;
		width: 200rpx;
		height: 200rpx;
	}

	.list-item-right {
		margin-left: 30rpx;
		width: 360rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
	}

	/* 商品名称 */
	.list-item-name {
		font-size: 27rpx;
		line-height: 20rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	/* 金额 */
	.list-item-dscp {
		margin-top: 20rpx;
		font-size: 34rpx;
		color: red;
		font-weight: bold;
	}

	.list-item-sign {
		font-size: 25rpx;
	}

	/* 加加减减 */
	.num-group {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
	}

	.buyAddSub {
		width: 60rpx;
		height: 50rpx;
		line-height: 40rpx;
		border-radius: 100%;
		background-color: #eee;
		font-size: 35rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: .2s;
		/* user-select: none; */
	}

	.buyAddSub:hover {
		background-color: #ddd;
	}

	button::after {
		outline: none;
		border: 0;
	}

	.buy-num {
		box-sizing: border-box;
		font-size: 30rpx;
		text-align: center;
		width: 60rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-left: -50rpx;
		margin-right: -50rpx;
	}


	.under {
		position: fixed;
		bottom: var(--window-bottom);
		/* 根据不同平台返回不同的值 windowBottom */
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		box-shadow: -5px 10px 20px #333333;
		background-color: #ffffff;
		z-index: 1;
	}

	.all-select {
		margin-left: 40rpx;
	}

	.all-select-word {
		font-size: 26rpx;
		margin-right: 20rpx;
		color: #A4A4A4;
	}

	.total-price {
		margin-left: 10rpx;
		font-size: 35rpx;
		color: red;
		font-weight: bold;
	}

	.total-price-sign {
		font-size: 25rpx;
	}

	.detele {
		position: absolute;
		right: 0;
		top: 0;
		width: 200rpx;
		height: 100rpx;
		font-size: 40rpx;
		letter-spacing: 2rpx;
		text-align: center;
		border-radius: 50rpx;
	}

	.to-pay {
		position: absolute;
		top: 0;
		right: 0;
		width: 200rpx;
		height: 100rpx;
		color: #ffffff;
		text-align: center;
		background-color: #2B9939;
		font-size: 40rpx;
		letter-spacing: 2rpx;
		border-radius: 50rpx;
	}
</style>
