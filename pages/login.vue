<template>
	<view class="">
		<view class="login">
			<!-- 	<view class="img" style="display: flex; justify-content: center;  align-items: center;">
				<text style="font-weight: bold;">小说</text>
			</view> -->
			<view class="input">
				<uni-forms :model="accountForm">
					<uni-forms-item name="accountName" label="账号:">
						<uni-easyinput v-model="accountForm.accountName" placeholder="请输入账号" />
					</uni-forms-item>
					<uni-forms-item name="password" label="密码:">
						<uni-easyinput type="password" v-model="accountForm.password" placeholder="请输入密码" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="btn">
			<uv-button type="primary" @click="accountLogin" text="登陆"></uv-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accountForm: {
					accountName: '',
					password: '',
				},
			}
		},
		onLoad() {

		},
		methods: {
			accountLogin() {
				if (this.accountForm.accountName && this.accountForm.password) {
					localStorage.setItem('token', 1)
					uni.showToast({
						title: '登陆成功！',
						icon: "success"
					});
					uni.switchTab({
						url: '/pages/my/my'
					})
				}else{
					uni.showToast({
						title: '请输入账号或密码！',
						icon: "error"
					});
				}


			}
		},
	}
</script>

<style lang="scss" scoped>
	.login {
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		background-color: white;

		.img {
			text-align: center;
			margin: 20rpx 0;
		}

		.text {
			text-align: center;
		}
	}

	.btn {
		margin: 50rpx 250rpx;
	}
</style>