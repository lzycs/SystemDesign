<template>
	<view>
		<Lines />
		<view class='list'>
            <!--左侧滑动-->
            <scroll-view scroll-y="true" class='list-left' :style="'height:'+clentHeight+'px;'">
                <view v-for="(item, index) in leftItems" :key="index" class='left-item' @tap="changeLeftTab(index)">
                    <view class='left-name' 
                        :class='{ "left-name-active": activeIndex === index }'
                    >{{ item }}</view>
                </view>
            </scroll-view>
			
			<!--右侧滑动-->
			<scroll-view scroll-y="true" class='list-right' :style="'height:'+clentHeight+'px;'">
			  <view class='righ-list'>
			    <view class='list-title'>{{ leftItems[activeIndex] }}</view>  <!-- 根据左侧选中的分类显示标题 -->
			    <view class='right-content'>
			      <!-- 使用 v-for 循环显示右侧内容 -->
					<navigator v-for="(item, idx) in rightContents[activeIndex]" :key="idx" :url="getPageUrl(idx)" :bintap="handleNavigatorTap">
						<view class='right-item'>
							<image class='right-img' :src="item.img" mode=""></image>
							<view class='right-name'>{{ item.name }}</view>
						</view>
					</navigator>
			    </view>
			  </view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines.vue'
export default {
  data() {
    return {
      clentHeight:0,
      activeIndex:1,
      leftItems: ['动画', '漫画', '游戏', '小说', '同人作品', '音乐', '文化活动', '周边商品'],
      rightContents: [  // 添加右侧内容数组
        [{ name: '毛巾', img: '../../static/img/list1.jpg' }, { name: '毛巾', img: '../../static/img/list1.jpg' }],  // 分类1的内容
        // 添加其他分类的内容
      ]
    }
  },
  //获取可视高度
  onReady() {
    uni.getSystemInfo({
      success: (res) => {
        this.clentHeight = res.windowHeight - this.getClientHeight();
      }
    })
  },
  components:{
    Lines
  },
  methods: {
	  handleNavigatorTap(idx) {
	          // 获取点击的分类项对应的页面路径
	          const pageUrl = this.getPageUrl(idx);
	  
	          // 跳转到对应页面
	          uni.navigateTo({
	              url: pageUrl,
	              success: function(res) {
	                  console.log("页面跳转成功！");
	              },
	              fail: function(err) {
	                  console.log("页面跳转失败：", err);
	              }
	          });
	      },
	      // 获取每个分类项对应的页面路径
	      getPageUrl(idx) {
	          // 假设你有一个页面路径数组，索引对应着右侧分类项的索引
	          const pagePaths = [
	              '/pages/index/index', // 第一个分类项对应的页面路径
	              '/pages/page2.vue', // 第二个分类项对应的页面路径
	              // 其他分类项的页面路径
	          ];
	          return pagePaths[idx];
	      },
	      // 其他方法...
    //获取可视区域高度【兼容】
    getClientHeight(){
      const res = uni.getSystemInfoSync();
      const system = res.platform;
      // 返回你想要的值，这里我假设是一个固定值
      return 0;
    },
    changeLeftTab(index) {
      this.activeIndex = index;
      // 根据左侧点击的索引更新右侧内容数组
      // 这里你可以根据实际情况来更新内容数组，我这里只是给出一个示例
      this.rightContents = [
        [{ name: '动作', img: '../../static/logos/1.png' }, 
		{ name: '冒险', img: '../../static/logos/2.png' },
		 { name: '喜剧', img: '../../static/logos/3.png' },
		 { name: '爱情', img: '../../static/logos/4.png' },
		 { name: '科幻', img: '../../static/logos/5.png' }, 
		 { name: '奇幻', img: '../../static/logos/6.png' }],
        [{ name: '少年漫画', img: '../../static/logos/7.png' }, 
		{ name: '少女漫画', img: '../../static/logos/8.png' },
		 { name: '青年漫画', img: '../../static/logos/9.png' },
		 { name: '儿童漫画', img: '../../static/logos/10.png' }],
		 [
		   { name: '角色扮演', img: '../../static/class/digital/bracket.png' },
		   { name: '战略游戏', img: '../../static/class/digital/cable.png' },
		   { name: '设计游戏', img: '../../static/class/digital/camera.png' },
		   { name: '模拟游戏', img: '../../static/class/digital/earphone.png' },
		   { name: '休闲游戏', img: '../../static/class/digital/flash.png' }
		 ],
		 [
		   { name: '爱情', img: '../../static/logos/11.png' },
		   { name: '科幻', img: '../../static/logos/12.png' },
		   { name: '奇幻', img: '../../static/logos/13.png' },
		   { name: '悬疑', img: '../../static/logos/14.png' },
		   { name: '历史', img: '../../static/logos/15.png' },
		   { name: '社会', img: '../../static/logos/16.png' }
		 ],
		 [
		   { name: '同人小说', img: '../../static/logos/17.png' },
		   { name: '同人漫画', img: '../../static/logos/18.png' },
		   { name: '同人游戏', img: '../../static/logos/19.png' }
		 ],
		 [
		   { name: '动漫歌曲', img: '../../static/logos/20.png' },
		   { name: '偶像团体音乐', img: '../../static/logos/21.png' },
		   { name: '游戏音乐', img: '../../static/logos/22.png' },
		   { name: 'Vocaloid', img: '../../static/logos/23.png' },
		   { name: '音乐会', img: '../../static/logos/24.png' },
		   { name: '演唱会', img: '../../static/logos/25.png' }
		 ],
		 [
		   { name: '动漫展', img: '../../static/logos/26.png' },
		   { name: '游戏展', img: '../../static/logos/27.png' },
		   { name: 'Cosplay活动', img: '../../static/logos/28.png' },
		   { name: '角色扮演比赛', img: '../../static/logos/29.png' }
		 ],
		 [
		   { name: '手办', img: '../../static/logos/30.png' },
		   { name: '海报', img: '../../static/logos/32.png' },
		   { name: '服饰', img: '../../static/logos/33.png' },
		   { name: '玩具', img: '../../static/logos/34.png' },
		   { name: '游戏道具', img: '../../static/logos/35.png' }
		 ],

        // 添加其他分类的内容
      ];
    }
  }
}
</script>


<style scoped>
.list{
	display: flex;
}
.list-left{
	width: 200rpx;
}
.left-item{
	border-bottom:2rpx solid #FFFFFF;
	font-size:30rpx;
	font-weight: bold;
	background-color: #F7F7F7;
}
.left-name{
	padding:40rpx 6rpx;
	text-align: center;
}
.left-name-active{
	border-left:8rpx solid #49BDFB;
	background-color: #FFFFFF;
}
.list-right{
	flex:1;
	padding-left:30rpx;
}
.list-title{
	font-weight: bold;
	padding:30rpx 0;
}
.right-content{
	display: flex;
	flex-wrap: wrap;
}
.right-item{
	width: 150rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding:10rpx;
}
.right-name{
	padding:16rpx 0;
}
.right-img{
	width: 60rpx;
	height: 60rpx;
}


</style>
