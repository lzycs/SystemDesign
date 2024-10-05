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
					铛铛铛！2024阴阳师为崽应援活动即将拉开帷幕啦~<br />
					今年你会为哪位式神应援呢？<br />
					LOFTER“秋枫之狩-为 崽应援”同人助力活动正式上线，<br />
					在这里为你喜欢的式神助力吧！<br />
					参与活动即得助力值为心仪式神助力<br />
					活动时间<br />
					【式神助力】9月4日-9月26日12:00<br />
					【同人创作】9月4日-10月1日<br />
					参与方式<br />
					【式神助力】<br />
					点击下方「为崽应援•同人助力活动」跳转活动页面，完成活动任务，即可获取助力值为式神进行助力<br />
					=活动须知=<br />
					1、投稿内容须与《阴阳师》手游相关；<br />
					2、符合以下情况则无法获得活动积分及奖励，敬请知悉：<br />
					①与 《阴阳师》 无关的作品;<br />
					②利用Al技术生成的图像：③末添加指定标签的作品；<br />
					3、作品内容须符合国家法律法规及平台相关规定，不得暴力、色情等不良内容;<br />
					4、投稿作品必须为创作者的原创作品，且创作者应保证对投稿作品享有完整知识产权，不得盜用、抄袭他人内容和创意：涉嫌抄袭或版权问题的作品，经核查后将取消积分及相关奖励：因上述违规行为产生的纠纷，由活动作品发布人本人自行承担责任；<br />
					5、本次活动支持同一账号投稿多个作品，瓜分奖、转盘抽奖奖励可以同时获得；<br />
					6、活动期间，投稿内容请勿同时参与其他同类型征集评选活动，避免一稿多投，请勿使用在其他平台活动中已获奖的作品投稿；
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