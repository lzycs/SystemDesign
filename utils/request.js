import base from './base.js'

// /getIndexData

export default (url,data={},method='GET')=>{
	return  new Promise((resolve,reject)=>{
		uni.request({
			url:base.host+url, //小程序
			// url,//H5
			data,
			method,
			success(res) {
				resolve(res.data);
			},
			fail(err) {
				reject(err);
			}
		})
	})
}