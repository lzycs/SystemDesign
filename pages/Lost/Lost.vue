<template>
  <view>
    <!-- 轮播图 -->
    <view class="banner-box">
      <swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
        <swiper-item>
          <image src="/static/pictures/pic4.jpg" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
          <image src="/static/example/example2.png" mode="aspectFill"></image>
        </swiper-item>
        <!-- 可以继续添加轮播图片 -->
      </swiper>
    </view>

    <!-- 物品详情介绍 -->
    <view class="item-details-box">
      <!-- 物品名称 -->
      <view class="item-info-box">
        <image src="/static/logo/goods.png" class="info-icon"></image>
        <view class="item-info">物品名称：钥匙串</view>
      </view>
      <view class="divider"></view>
      <!-- 捡到时间 -->
      <view class="item-info-box">
        <image src="/static/logo/time.png" class="info-icon"></image>
        <view class="item-info">捡到时间：2024年5月2日</view>
      </view>
      <view class="divider"></view>
      <!-- 捡到地点 -->
      <view class="item-info-box">
        <image src="/static/logo/location.png" class="info-icon"></image>
        <view class="item-info">捡到地点：中门食堂</view>
      </view>

      <!-- 物品详情描述 -->

	<view class="contact-info-box">
	  <view class="item-description">
          物品详情描述：<br />
          颜色：钥匙串上的柿子吊坠呈黄绿色，颜色鲜艳，具有较高的辨识度。<br />
          钥匙数量：钥匙串上共有两把钥匙。其中一把是门的钥匙；另一把是电动自行车的钥匙。<br />
          其他特征：柿子吊坠的形状独特，容易吸引人们的注意。两把钥匙的材质为金属，可能带有一定的磨损痕迹。
        </view>
	</view>
	
      <!-- 拾到者联系方式 -->
      <view class="contact-info-box">
        <view class="contact-info-text">失主联系方式：13297208914</view>
      </view>
	  
	<view class="contact-info-box">
	  <view class="tip-text">温馨提示：</view>
	  <view class="item-description">
		如需领取，请提供更多细节~以防冒领！
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
  background-color: #ddf7ff; /* 设置物品详情介绍盒子的背景色 */
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
