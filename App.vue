<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const local_datas = uni.getStorageSync("datas")
			const datas = {
				"type1": [{
						title: "身份证",
						time: "2024.5.1",
						address: "行云食堂",
						pic: "/static/pictures/pic3.png"
					},
					{
						title: "钥匙串",
						time: "2024.5.2",
						address: "中门食堂",
						pic: "/static/pictures/pic4.jpg"
					},
					{
						title: "笔记本电脑",
						time: "2024.5.3",
						address: "图书馆四楼",
						pic: "/static/pictures/pic5.jpg"
					},
					{
						title: "鼠标",
						time: "2024.5.4",
						address: "信息楼114",
						pic: "/static/pictures/pic6.jpg"
					},
				],
				"type2": [{
						title: "身份证",
						time: "2024.5.1",
						address: "行云食堂",
						pic: "/static/pictures/pic3.png"

					},
					{
						title: "钥匙串",
						time: "2024.5.2",
						address: "中门食堂",
						pic: "/static/pictures/pic4.jpg"

					},
					{
						title: "笔记本电脑",
						time: "2024.5.3",
						address: "图书馆四楼",
						pic: "/static/pictures/pic5.jpg"

					},
					{
						title: "鼠标",
						time: "2024.5.4",
						address: "信息楼114",
						pic: "/static/pictures/pic6.jpg"
					},
				]
			}
			if (local_datas == "" || local_datas == null || local_datas == undefined) {
				const data_info = JSON.stringify(datas)
				// console.log(data_info);
				uni.setStorageSync("datas", data_info)
			}
			// 新增数据

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>