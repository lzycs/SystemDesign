<template>
	<view class="dynamic" v-if="myData">
		<view class="container">


			<view class="dyMain">
				<navigator class="dyItem" url="/pages/detail/detail" bintap="handleNavigatorTap">
					<view class="pic">
						<image src="/static/pics/pic3.jpg" />
					</view>
					<view class="txt">
						<view class="title">当所有人都重生了，除了吴邪</view>
						<view class="info">盗墓笔记</view>
						<view class="info">同人文</view>
					</view>
				</navigator>
				<view class="divLineX"></view>
				<navigator class="dyItem" url="/pages/detail/detail0/detail0" bintap="handleNavigatorTap0">
					<view class="pic">
						<image src="/static/pics/pic2.jpg" />
					</view>
					<view class="txt">
						<view class="title">【杭州】10.03 COMICUP </view>
						<view class="info">同人展</view>
						<view class="info">线下活动</view>
					</view>
				</navigator>
				<view class="divLineX"></view>
				<navigator class="dyItem" url="/pages/detail/detail1/detail1" bintap="handleNavigatorTap1">
					<view class="pic">
						<image src="/static/pics/pic4.jpg" />
					</view>
					<view class="txt">
						<view class="title">【珠海】 10.26 漫次元 万有魔力 </view>
						<view class="info">同人展</view>
						<view class="info">线下活动</view>
					</view>
				</navigator>
				<view class="divLineX"></view>
				<navigator class="dyItem" url="/pages/detail/detail2/detail2" bintap="handleNavigatorTap2">
					<view class="pic">
						<image src="/static/pics/pic5.jpg" />
					</view>
					<view class="txt">
						<view class="title">“秋风之狩-为崽应援”同人助力活动</view>
						<view class="info">阴阳师</view>
						<view class="info">线上活动</view>
					</view>
				</navigator>
				<view class="divLineX"></view>
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