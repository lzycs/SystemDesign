<template>
	<view class="dynamic" v-if="myData">
		<view class="container">

			<view class="dyMain">
				<view class="dyItem" style="display: flex;">
					<view class="pic">
						<image  src="/static/pictures/pic3.png" />
					</view>
					<view class="txt">
						<view class="title">身份证</view>
						<view class="info">时间：2024.5.1</view>
						<view class="info">地点：行云食堂</view>

					</view>
				</view>

				<view class="divLineX"></view>

				<view class="dyItem">
					<view class="pic">
						<image src="/static/pictures/pic4.jpg" mode="" />
					</view>
					<view class="txt">
						<view class="title">钥匙串</view>
						<view class="info">时间：2024.5.2</view>
						<view class="info">地点：中门食堂</view>
					</view>
				</view>

				<view class="divLineX"></view>

				<view class="dyItem">
					<view class="pic">
						<image src="/static/pictures/pic5.jpg" mode="" />
					</view>
					<view class="txt">
						<view class="title">笔记本电脑</view>
						<view class="info">时间：2024.5.3</view>
						<view class="info">地点：图书馆四楼</view>
					</view>
				</view>

				<view class="divLineX"></view>

				<view class="dyItem">
					<view class="pic">
						<image src="/static/pictures/pic6.jpg" mode="" />
					</view>
					<view class="txt">
						<view class="title">鼠标</view>
						<view class="info">时间：2024.5.4</view>
						<view class="info">地点：信息楼114</view>
					</view>
				</view>
<!-- 
				<view class="divLineX"></view> -->
            <view class="" style="font-size: 10px; display: flex; justify-content: center; margin-top: 50rpx; color: #cfcfcf;">
				 <span>没有更多了~~</span>
			</view>


			</view>
			<view class="wkMain">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myData: 0
			}
		},
		onLoad() {
			this.myData = localStorage.getItem('token')
			if (!this.myData) {
				uni.showModal({
					content: '请登陆',
					success: res => {
						if (res.confirm) {
							uni.reLaunch({
								url: '/pages/login'
							})
						}
					},
				});
			}
		},
		methods: {

		}
	}
</script>

<style>
	.banner,
	.banner image {
		width: 750rpx;
		height: 320rpx;
		/* 设置轮播图高度 */
	}


	.pubTitle {
		display: flex;
		justify-content: space-between;
		height: 60rpx;

		align-items: center;

		position: relative;

	}

	.pubTitle .txt1 {
		font-size: 35rpx;
		position: relative;
		padding-left: 30rpx;
		font-weight: bold;
	}

	.pubTitle .more {
		font-size: 30rpx;
		color: #717375;
		padding-right: 0rpx;
	}

	.dynamic {

		padding: 15rpx 0 10rpx;
		position: relative;
		left: 6rpx;
	}

	.dyItem {
		display: flex;
		padding: 20rpx 0;

		justify-content: space-between;
	}

	.dyItem .pic {
		width: 230rpx;
		height: 150rpx;
	}

	.dyItem .pic image {
		width: 100%;
		height: 100%;
		padding-left: 20rpx;

	}

	.dyItem .txt {
		width: 490rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		left: 40rpx;
	}

	.dyItem .title {
		font-size: 26rpx;
		border-left: 100rpx;
		position: relative;
		left: 6rpx;
		font-weight: 600;
		font-size: 26rpx;
	}

	.dyItem .info {
		font-size: 24rpx;
		padding-top: 25rpx;
		padding-left: 10rpx;
		color: #717375;
		text-align: left;
	}

	.divLineX {
		background: #E4E6ED;
		width: 100%;
		height: 1rpx;
	}

	.container {
		width: 690rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		border-radius: 16rpx;
		overflow: hidden;
	}
</style>