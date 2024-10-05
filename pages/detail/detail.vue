<template>
  <view>
    <!-- 轮播图 -->
    <view class="banner-box">
      <swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
        <swiper-item>
          <image src="/static/pics/pic3.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <!-- 物品详情介绍 -->
    <view class="item-details-box">
      <!-- 物品名称 -->
      <view class="item-info-box">
        <image src="/static/logo/goods.png" class="info-icon"></image>
        <view class="item-info">作者：岁年年</view>
      </view>
      <view class="divider"></view>


      <!-- 物品详情描述 -->

	<view class="contact-info-box">
	  <view class="item-description">
          “你们是......”<br />
          看着突然闯进吴山居的一群人，吴邪摸了摸脑袋，已经开始想自己到底得罪了什么人，还是说三叔得罪了什么人，要他来背锅了。<br />
          
          “天真！你怎么不来找我啊！天真！”<br />
		  
          王胖子完全忽视了吴邪的话，返老还童的快乐让他激动的直接抱了上去，尤其是摸到昊邪身上那健康的身体，更加的开心了。<br />
          
          这一次，他已经好好监督天真养生！绝对不能再靠近地下那些东西和烟了！<br />
		  想到这，王胖子神色变得痛苦，他再也不想看到自己的兄弟毫无声息的躺在棺材里了。<br />
		  “你，你是谁啊！千嘛突然抱上来啊。”<br />
		  被抱住的那么一瞬问，吴邪有些失神，明明从未见过这人，为什么他没有要反抗的反应，甚至觉得这场面有些熟悉，而这人也很是熟悉。<br />
		  但他还是很快就反应过来，将人一把推开，扯过一旁看戏的王盟挡在自己身前。<br />
		  “你谁，你们又是什么人，找我有什么事情？吴三省答应你们的事情，你们去找他，别找我，我都不知道他在哪里。<br />
		  说起这个，吴邪就觉得很无语，自家三叔总是惹一堆莫名其妙的人，然后人都来找他，问题就是他也不知道自家三叔又跑到哪里去了，所以每次都是他承受了所有。<br />
		  “天真你......”<br />
		  就算是神经，再怎么大条的王胖子都知道发生了什么事情。<br />
		  他退后的两步 不敢自信地看着吴邪，难道他们都回来了，而吴邪没有！这都叫什么事儿啊！！贼老天！<br />
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
