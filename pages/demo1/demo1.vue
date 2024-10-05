<template>
	<view class="body">
		<view class="top">
			<!-- <text>X</text> -->
			<button size="mini" class="publish-btn" @click="pushNew">发布</button>
		</view>
		<view class="container">
			<view class="type">
				<view :class="{'type-item':true,'type-select':flag==1}" @click="changeFlg(1)">讨论</view>
				<view :class="{'type-item':true,'type-select':flag==2}" @click="changeFlg(2)">活动</view>
				<!-- <view :class="["type-item",flag==1?'type-select':'']">寻物</view>
				<view :class="["type-item",flag==2?'type-select':'']">寻主</view> -->
			</view>
			<view class="clasify">
				<text class="label">帖子类别:</text>
				<picker class="picker" mode="multiSelector" @change="bindMultiPickerChange"
					@columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker-item">
						<view class="select" v-if="select">
							{{ multiArray[0][multiIndex[0]] }}/{{ multiArray[1][multiIndex[1]]}}
							<image @click.native.stop="closeSelect" class=" bhive" src="../../static/关闭.png">
							</image>
						</view>
						<view class="empty" v-else>
							<text>请选择</text>
							<image class="select-icon" src="../../static/下拉.png"></image>
						</view>
					</view>
				</picker>

			</view>
		</view>
		<view class="input-list">
			<input class="input-item" placeholder="*请输入帖子标题" :value="name" @input="getName" type="text" />
			<input class="input-item" placeholder="*请输入是否原创" :value="date" @input="getDate" type="text" />
			<input class="input-item" placeholder="*请输入是否可以转载" :value="region" @input="getRegion" type="text" />
			<input class="input-item" placeholder="如何联系你？" :value="phone" @input="getPhone" type="text" />
		</view>

		<view class="desc">
			<textarea placeholder="请输入帖子主要内容" :value="desc" id="" cols="25" rows="10" @input="getDesc">
		</textarea>
			<image v-if="desc.length>0" class="close-icon" src="../../static/关闭.png" @click="deleteDesc"></image>
		</view>
		<view class="upload">
			<view class="upload-top">
				<text>最多选择6张图片</text>
				<text>{{ this.imgList.length }}/6</text>
			</view>
			<view class="upload-list">
				<view class="img-list" v-for="(fileID,index) in imgList" :key="index">
					<image class="common" :src="fileID"></image>
				</view>
				<image class="default upload-img" src="../../static/上传图片.png" v-if="imgList.length<6"
					@click="uploadImg"></image>
			</view>
		</view>
	</view>


</template>
<script>
	export default {
		data() {
			return {
				multiArray: [
					['动画', '漫画', '游戏', '小说', '同人作品', '音乐', '文化活动', '周边商品'],
					['动作', '冒险', '喜剧', '爱情', '科幻', '奇幻']
				],
				multiIndex: [0, 0],
				select: false,
				name: '',
				date: '',
				region: '',
				phone: '',
				desc: '',
				imgList: [],
				flag: 1



			}
		},
		onLoad() {
		
		},
	
		methods: {
		

			changeFlg(val) {
				this.flag = val
			},

			async uploadImg() {
				const save_arr = []
				const save_promises = [];
				// const imgList = this.$data.imgList || []; // 确保imgList被定义 data前加$
				uni.chooseImage({
					count: 6 - this.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],

					success: async (chooseImageRes) => {
						const img_arr = chooseImageRes.tempFilePaths

						img_arr.forEach(e => {
							save_promises.push(new Promise((resolve, reject) => {
								uni.saveFile({
									tempFilePath: e,
									success: (res) => {
										resolve(res
											.savedFilePath); // 保存成功的文件路径  
									},
									fail: (err) => {
										reject(err); // 保存失败时，拒绝Promise  
									}
								});
							}));
						});
						Promise.all(save_promises)
							.then((savedFilePaths) => {
								// 所有文件都已保存，将路径添加到imgList  
								console.log(savedFilePaths);
								this.imgList.push(...savedFilePaths);
								// 这里可以执行后续操作，如上传图片等  
							})
							.catch((error) => {
								// 如果有任何文件保存失败，这里将捕获到错误  
								console.error('保存文件时出错：', error);
							});
					},
					fail: (error) => {
						console.error('选择图片失败', error);
					}
				});
			},
			/**
			 * 发布
			 */
			pushNew() {
				console.log(this.$data);
				const flag =this.flag 
				const title = this.name
				const time =this.date 
				const address = this.region
				const phone = this.phone
				const desc = this.desc
				const type =this.multiArray[0][this.multiIndex[0]]
				const desc_type =this.multiArray[1][this.multiIndex[1]]
				const pics = this.imgList
				const pic =this.imgList[0]
				if(title=="" || time == "" || address == "" ){
					uni.showToast({
						title:'请填写必选项',
						icon:'error'
					})
				}
				const data = {
					title,
					time,
					address,pic,
					phone,desc,type,desc_type,pics
				}
				// 获取数据
				const local_data = uni.getStorageSync("datas")
				
				if(local_data!=null && local_data !=""){
					const use_data = JSON.parse(local_data)
					// console.log(use_data);
					if(flag == 2){
						use_data['type1'].push(data)
					}
					else{
						use_data['type2'].push(data)
					}
					uni.setStorageSync('datas',JSON.stringify(use_data))
				}else{
						const datas = {
							"type1":[flag==1?data:''],
							"type2":[flag==2?data:'']
						}
						uni.setStorageSync('datas',JSON.stringify(datas))
				}
				
				// this.$forceUpdate()
				this.multiIndex= [0, 0],
				this.select= false,
				this.name='',
				this.date= '',
				this.region= '',
				this.phone= '',
				this.desc= '',
				this.imgList= [],
				this.flag= 1
				uni.switchTab({
					url:'/pages/index/index',
					success() {
						// console.log(getCurrentPages().pop());
						getCurrentPages().pop().onLoad()
					}
				})
				// console.log(flag,title,time,address,phone,desc,type,desc_type,pics);
			},




			deleteDesc() {
				this.desc = '';
			},
			getName(e) {
				this.name = e.detail.value;
			},
			getDate(e) {
				this.date = e.detail.value;
			},
			getRegion(e) {
				this.region = e.detail.value;
			},
			getPhone(e) {
				this.phone = e.detail.value;
			},
			getDesc(e) {
				this.desc = e.detail.value;
			},
			closeSelect() {
				this.select = false;
				multiIndex: [0, 0];
			},
			bindMultiPickerChange(e) {
				this.select = true;

			},
			bindMultiPickerColumnChange(e) {

				this.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['动作', '冒险', '喜剧', '爱情', '科幻', '奇幻'];
								break;
							case 1:
								this.multiArray[1] = ['少年漫画', '少女漫画', '青年漫画', '儿童漫画'];
								break;
							case 2:
								this.multiArray[1] = ['角色扮演', '战略游戏', '设计游戏', '模拟游戏', '休闲游戏'
								];
								break;
							case 3:
								this.multiArray[1] = ['爱情', '科幻', '奇幻', '悬疑', '历史', '社会'];
								break;
							case 4:
								this.multiArray[1] = ['同人小说', '同人漫画', '同人游戏'];
								break;
							case 5:
								this.multiArray[1] = ['动漫歌曲', '偶像团体音乐', '游戏音乐', 'Vocaloid', '音乐会', '演唱会'];
								break;
							case 6:
								this.multiArray[1] = [ '动漫展', '游戏展', 'Cosplay活动', '角色扮演比赛'];
								break;
							case 7:
								this.multiArray[1] = ['手办','海报', '服饰', '玩具', '游戏道具'];
								break;
						}
						this.multiIndex.splice(1, 1, 0);
						this.multiIndex.splice(2, 1, 0);
						break;
				}
				this.$forceUpdate();
			}
		}
	}
</script>

<style>
	.body {
		box-sizing: border-box;
		padding: 20rpx;
		width: 100vw;
		min-height: 100vh;
		background-color: #fff;

	}

	.top {
		display: flex;
		/* justify-content: right; */
		align-items: center;
		justify-content: flex-end;
		padding: 30rpx 10rpx;
		box-sizing: border-box;
		border-bottom: 5rpx solid #f3f3f3;

	}

	.publish-btn {
		margin: 0 !important;
		background-color: #89a5db;
		color: #fff;
		border-radius: 40rpx;
		width: 150rpx;
	}

	.container {
		padding: 30rpx, 35rpx, 50rpx, 35rpx;

	}

	.type {
		display: flex;
		margin-top: 10rpx;

	}

	.container .type view {
		padding: 8rpx 16rpx;
	}

	.type-item {
		background-color: aliceblue;
		padding: 10rpx, 70rpx;
		border: 1rpx solid #aaa;
		margin-right: 30rpx;
		border-radius: 10rpx;

	}

	.type-select {
		background-color: #89a5db;
		color: #fff;
	}

	.clasify {
		margin-top: 50rpx;
		display: flex;
		width: 100%;
		align-items: center;
	}

	.label {
		margin-right: 20rpx;
		white-space: nowrap;
	}

	.picker {
		width: 100%;
	}

	.empty,
	.select {
		border: 2rpx solid #aaa;
		width: 100%;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		border-radius: 15rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.select-icon {
		width: 50rpx;
		height: 50rpx;
	}

	.close-icon {
		width: 40rpx;
		height: 40rpx;
	}

	.input-list {
		padding: 30rpx, 15rpx;
		padding-top: 80rpx;
		/* border-bottom: 5rpx solid #f3f3f3; */

	}

	.input-item {
		margin-bottom: 50rpx;
		border-bottom: 1px solid #ccc;
		padding-left: 20rpx;
	}

	.desc {
		padding: 30rpx, 15rpx;
		border-bottom: 5rpx solid #f3f3f3;
		position: relative;
	}

	.desc textarea {
		padding-left: 20rpx;
		height: 160rpx;
	}

	.upload-top {
		display: flex;
		justify-content: space-between;
	}

	.upload-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.default {
		width: 33%;
		height: 250rpx;

	}

	.close-icon {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 30rpx;
		right: 0
	}

	.img-list {
		width: 33%;
		height: 250rpx;
	}

	.common {
		width: 100%;
		height: 100%;
	}

	.bhive {

		right: 10px !important;
		width: 40rpx;
		height: 40rpx;
		position: absolute;
	}

	.upload-img {
		width: 100rpx;
		height: 100rpx;
		padding-left: 20rpx;
	}
</style>