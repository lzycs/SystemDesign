<template>
  <view>
    <!-- 轮播图 -->
    <view class="banner-box">
      <swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
        <swiper-item>
          <image src="/static/pics/pic2.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <!-- 物品详情介绍 -->
    <view class="item-details-box">
      <!-- 物品名称 -->
      <view class="item-info-box">
        <image src="/static/logo/goods.png" class="info-icon"></image>
        <view class="item-info">作者：Comicup组委会</view>
      </view>
      <view class="divider"></view>


      <!-- 物品详情描述 -->

	<view class="contact-info-box">
	  <view class="item-description">
          CP30定档国庆！落地杭州！为期四天<br />
		  -10月3-4日 & 6日-7日<br />
		  -杭州大会展中心<br />
		  继G20峰会、亚运会之后，杭州市迎来了临空示范区•大会展中心的落成。<br />
		  新落成的大会展中心是国家级展会————全球数字贸易博览会的常驻场馆，也将成为杭州链接世界的赛会橱窗。<br />
		  非常荣幸，CP30也将入驻大会展中心，成为今年杭州〝国际动漫之都~篇章的崭新一笔。<br />
		  为了让庞大容量的CP30能顺畅落地，组委会与场馆都做了长足的准备-<br />
		  年初，组委会与杭州大会展中心开始接洽；<br />
		  4月，大会展中心前往广州CPSP现场考察，研讨入驻细节；<br />
		  6月，最终确认达成合作，完成合同签约；<br />
		  7月初，与各级部门会面，项目筹备进入倒计时。<br />
		  在这十五年里，<br />
		  一个个抱着好奇心尝试创作的新作者，<br />
		  渐渐成为成熟的老摊主。<br />
		  谢谢你们因为真挚的热爱，坚持到现在。<br />
		  更多新的同好也与我们渐渐汇聚，<br />
		  进入创作的世界，<br />
		  在CP里与大家面对面分享交流创作的乐趣。<br />
		  我们期待在CP30的庆典现场，<br />
		  一起创作，一起交流，一起快乐。<br />
		  COMICUP十五周年，有你真好。<br />
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
  background-color: #fff; /* 设置轮播图盒子的背景色 */
  padding-left: 0px;
  padding-right: 8px;
  position: relative; /* 添加相对定位 */
  z-index: 1; /* 设置较小的 z-index 值 */
}
.banner,
.banner image {
  width: 750rpx;
  height: 400rpx; /* 设置轮播图高度 */
}

/* 物品详情介绍样式 */
.item-details-box {
  background-color: #fffce7; /* 设置物品详情介绍盒子的背景色 */
  padding: 20px; /* 设置内边距 */
  margin-top: 5px; /* 设置负的 margin-top 以向上移动 */
  border-radius: 18px 18px 0 0; /* 上面两个角为圆角，下面两个角为方角 */
  position: relative; /* 添加相对定位 */
  top: -10px; /* 向上偏移 10px */
  z-index: 2; /* 设置较大的 z-index 值 */
}


.item-info-box,
.item-description-box,
.contact-info-box {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 15px; /* 调整内部与外部的距离 */
  margin-bottom: 15px; /* 调整内部与外部的距离 */
  font-weight: bold;
  font-family:fangsong;
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
  line-height: 1.5; /* 设置行高 */
}

/* 拾到者联系方式样式 */
.contact-info-box {
  background-color: #ffffff; /* 设置底色 */
  padding: 10px;
  margin-top: 20px; /* 添加间距 */
  margin-bottom: 20px; /* 添加间距 */
  border-radius: 10px; /* 设置圆角 */
  font-weight: bold;
  font-family:fangsong;
}

.tip-text {
  font-weight: bold;
  color: #FF5733; /* 将“温馨提示”四字的颜色更改为橙色 */
}

.item-description {
  line-height: 1.5; /* 设置行高 */
}


.contact-info-text {
  font-weight: bold;
  font-family:fangsong;
}

.item-description {
  line-height: 1.5; /* 设置行高 */
}

</style>
