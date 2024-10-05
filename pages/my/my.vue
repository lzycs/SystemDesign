<template>
	<view>
		<!-- 头像 -->
		<view
			style="display: flex; flex-direction: column; align-items: center; margin-top: 150rpx; margin-bottom: 90rpx;">
			<uv-avatar size="90" :src="myData ? '../../static/pictures/profile.jpg' : ''"></uv-avatar>
			<text v-if="myData" style="margin-top: 10rpx;">小美</text>
		</view>
		<!-- 我的功能 -->
		<uv-list>
			<uv-list-item v-for="(item,index) in myFun" :key="index" :title="item.name" :to="item.router"
				:show-arrow="true"></uv-list-item>
		</uv-list>
		<!-- 退出登陆 -->
		<view class="" style="display:flex; justify-content: center; margin-top: 90rpx;">
			<uv-button v-if="!myData" type="primary" @click="login" text="登陆"></uv-button>
			<uv-button v-else type="primary" @click="logout" text="退出登陆"></uv-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myData: 0,
				myFun: [{
					name: '我的信息',
					router: '/pages/my/myInfo'
				}, {
					name: '我的发布',
					router: '/pages/my/myIssue'
				}]
			};
		},
		onLoad() {
			this.myData = localStorage.getItem('token')
		},
		methods: {
			login() {
				uni.reLaunch({
					url: '/pages/login'
				})
			},
			// 退出登陆
			logout() {
				localStorage.removeItem('token')
				this.myData=0
				uni.showToast({
					title: '退出登陆成功',
					icon: "success"
				});
			}
		}
	}
</script>

<style lang="scss">



</style>