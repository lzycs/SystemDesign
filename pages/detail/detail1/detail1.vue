<template>
	<view>
		<!-- 轮播图 -->
		<view class="banner-box">
			<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<swiper-item>
					<image src="/static/pics/pic4.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 物品详情介绍 -->
		<view class="item-details-box">
			<!-- 物品名称 -->
			<view class="item-info-box">
				<image src="/static/logo/goods.png" class="info-icon"></image>
				<view class="item-info">作者：李桃沫</view>
			</view>
			<view class="divider"></view>


			<!-- 物品详情描述 -->

			<view class="contact-info-box">
				<view class="item-description">
					珠海AF02 漫次元•万有魔力<br />
					2024年10月26-27日每日13:00-21:00<br />
					【惊喜放送】<br />
					嘉宾确认！快来AF和喜欢的老师见面吧 ，【签绘墙】【全天候舞台演出】【游园集章互动】场内更有贴心服务，让你全程无忧，尽享这场专属于二次元的盛宴！！<br />
					【现场玩法】<br />
					NO.1《超绝痛车》 震撼登场，绝美痛车直击心扉！<br />
					NO.2《嘉宾签售》本场嘉宾情报全部解锁！快来AF和喜欢的老师见面吧心）丿<br />
					NO.3《排球少年》舞台剧热血上演，诚邀您的观战！<br />
					NO.4《同人市集》即可开启爽吃模式！<br />
					NO.6 《Liveshow》经典旋律穿越次元壁，剧场级现场演绎<br />
					震撼来袭！<br />
					N0.7《宅舞比赛》 希望能让热爱宅舞的大家在即将过去的夏夭不留遗憾<br />
					No.8《游园集章》每站集章，解锁专属惊喜与互动乐趣！<br />
					更多惊喜玩法正紧锣密鼓地筹备中，只为给每一位热爱二次元的你带来前所未有的体验！！<br />
				</view>
			</view>
			<view class="contact-info-box">
				<view class="tip-text">温馨提示：</view>
				<view class="item-description">
					未完待续，未经同意，禁止转载
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 可以在此处定义数据
			};
		},
	};
</script>

<style scoped>
	/* 轮播图样式 */
	.banner-box {
		background-color: #fff;
		/* 设置轮播图盒子的背景色 */
		padding-left: 0px;
		padding-right: 8px;
		position: relative;
		/* 添加相对定位 */
		z-index: 1;
		/* 设置较小的 z-index 值 */
	}

	.banner,
	.banner image {
		width: 750rpx;
		height: 400rpx;
		/* 设置轮播图高度 */
	}

	/* 物品详情介绍样式 */
	.item-details-box {
		background-color: #fffce7;
		/* 设置物品详情介绍盒子的背景色 */
		padding: 20px;
		/* 设置内边距 */
		margin-top: 5px;
		/* 设置负的 margin-top 以向上移动 */
		border-radius: 18px 18px 0 0;
		/* 上面两个角为圆角，下面两个角为方角 */
		position: relative;
		/* 添加相对定位 */
		top: -10px;
		/* 向上偏移 10px */
		z-index: 2;
		/* 设置较大的 z-index 值 */
	}


	.item-info-box,
	.item-description-box,
	.contact-info-box {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 15px;
		/* 调整内部与外部的距离 */
		margin-bottom: 15px;
		/* 调整内部与外部的距离 */
		font-weight: bold;
		font-family: fangsong;
	}

	.info-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}

	.item-info,
	.item-description {
		flex: 1;
	}

	.divider {
		height: 1px;
		background-color: #bce9f7;
		margin: 10px 0;
	}

	.item-description {
		line-height: 1.5;
		/* 设置行高 */
	}

	/* 拾到者联系方式样式 */
	.contact-info-box {
		background-color: #ffffff;
		/* 设置底色 */
		padding: 10px;
		margin-top: 20px;
		/* 添加间距 */
		margin-bottom: 20px;
		/* 添加间距 */
		border-radius: 10px;
		/* 设置圆角 */
		font-weight: bold;
		font-family: fangsong;
	}

	.tip-text {
		font-weight: bold;
		color: #FF5733;
		/* 将“温馨提示”四字的颜色更改为橙色 */
	}

	.item-description {
		line-height: 1.5;
		/* 设置行高 */
	}


	.contact-info-text {
		font-weight: bold;
		font-family: fangsong;
	}

	.item-description {
		line-height: 1.5;
		/* 设置行高 */
	}
</style>