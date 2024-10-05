<template>
	<view style="" v-if="myData">
		<uv-list>
			<uv-list-item title="姓名:" right-text="小美"> </uv-list-item>
			<uv-list-item title="账号:" right-text="17723117616"> </uv-list-item>
			<uv-list-item title="手机号:" right-text="17723117616"> </uv-list-item>
		</uv-list>
		<!-- 
		<view>
			<button @click="scanQRCode">扫码</button>
		</view> -->
	</view>

	<view v-if="myData" class="" style="display: flex; align-items: center; margin-top: 100rpx; flex-direction: column;">
		<canvas id="qrcode" canvas-id="qrcode" style="width: 200rpx;height: 200rpx;"></canvas>
		<div style="display: flex; margin-top: 80rpx; width: 40%; justify-content: space-between;">
			<uv-button type="primary"  text="保存"></uv-button>
			<uv-button  type="primary"  text="打印"></uv-button>
		</div>
	</view>

</template>

<script>
	import UQRCode from 'uqrcodejs';

	export default {

		data() {
			return {
				myData: 0
			};
		},
		onReady() {
			// 获取uQRCode实例
			var qr = new UQRCode();
			// 设置二维码内容
			qr.data = "姓名:小美  学号:17723117616  手机号:17723117616";
			// 设置二维码大小，必须与canvas设置的宽高一致
			qr.size = 100;
			// 调用制作二维码方法
			qr.make();
			// 获取canvas上下文
			var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
			// 设置uQRCode实例的canvas上下文
			qr.canvasContext = canvasContext;
			// 调用绘制方法将二维码图案绘制到canvas上
			qr.drawCanvas();
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
			scanQRCode() {
				uni.scanCode({
					success: (res) => {
						console.log(res.result); // 打印扫码结果
						// 在这里可以对扫码结果进行处理
					},
					fail: (res) => {
						console.log(res);
						// 处理扫码失败的情况
					}
				});
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}
</style>