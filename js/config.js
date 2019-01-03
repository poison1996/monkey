// 配置模块 -设置全局变量
var tokenType = sessionStorage.getItem("tokenType");
var token = sessionStorage.getItem("token");

layui.define(['laytpl', 'layer', 'element', 'util', 'laydate'], function(exports) {
	exports('setter', { //请求接口url
		//	requestUrl: 'http://192.168.0.104:8850/v1/mk',
	//	requestUrl: 'http://139.199.72.65:8850/v1/mk',
		requestUrl: 'http://123.207.96.219:8850/v1/mk',
		imgUrl: 'https://mk-1257423844.cos.ap-guangzhou.myqcloud.com/images/', //图片接口路径
		// 上传的cos 对象
		cos:{
				SecretId: 'AKIDDMOSOBJcO1S5b0ocfWEmCA2jEkCXfusR',//开发者拥有的项目身份识别 ID，用以身份认证
				SecretKey: '75sUuCJGGLNHzZ7UiojS4VknjYNLKFEL',//开发者拥有的项目身份密钥
		},
		imgPath:'/images/',//上传图片 的路径
		askToken: function() {
			if(token) {
				return tokenType + " " + token;
			} else {
				var successMsg = "请重新登陆！";
				layer.msg(successMsg, {
					offset: '15px',
					icon: 0,
					time: 1000
				}, function() {
					location.href = '../login.html'; //后台主页
				});
			}
		},
		tableName: "yaunzhishihoutai",
		creator_id: 1, //创建人id,暂时默认是1，后续改成登录账户的id
		user_id: function(tableName) {
			var localTable = layui.sessionData(tableName);
			return localTable.user_id;
		},
		admin_id: function(tableName) {
			var localTable = layui.sessionData(tableName);
			return localTable.admin_id;
		},
		//创建用户类型的创建ID,暂时默认是0，后续改成登录账户的ID
		dic_auth_state_code: { //审核状态字典  1是未审核，2是已通过，3是已拒绝
			"1": "未审核",
			"2": "已通过",
			"3": "已拒绝"
		},
		dic_order_state_code: { //订单交易里面的后台给的状态返回前端处理
			"16": "下单未付款",
			"17": "订单已完成",
			"18": "订单已取消",
			"19": "已评价",
			"20": "待评价",
		},
		dic_ad_type_code: { //banner里面后台返回的广告类型前端处理
			"1": "产品广告",
			"2": "需求广告",
			"3": "外部广告"
		},
		dic_is_enable: { //状态转换
			"1": "已启用",
			"0": "未启用",
		},
		dic_enable: {
			"false": "未启用",
			"true": "已启用",
		},
		dic_code: {
			201: "新增成功",
			202: "修改成功",
		},
		dic_acc_type_code: {
			24: "微信支付",
			25: "支付宝支付",
		},
		dic_tran_type_code: { 
			69: "定制需求预付款收入",
			70: "知识产品付款收入",
			71: "定制需求完成交易划款给作者",
			72: "知识产品完成交易划款给作者",
		},
		dic_audit_state: {
			1: "待审核",
			2: "已通过",
			3: "已拒绝",
		},
		dic_acc_type: {
			25: "支付宝",
			24: "微信"
		},
		dic_remit_reson_code: {
			67: "定制需求完成支付",
			68: "产品完成交易",
		}, 
		/**
		 * 上传文件 腾讯存储桶
		 * @param {Object} url// 存储文件的地址
		 * @param {Object} body //文件对象 
		 * @param {Object} onProgress 上传进度回调函数 
		 * @param {Object} callBack  上传成功回调函数
		 */
		uploadFile: function(url, body, onProgress, callBack) {
			//上传
			var cos = new COS(setter.cos);
			cos.putObject({
				Bucket: 'mk-1257423844', //COS 中用于存储数据的容器
				Region: 'ap-guangzhou', //域名中的地域信息
				Key: url, //
				Body: body, //文件对象 
				onProgress: function(progressData) {
					//上传进度
					onProgress(progressData);
				}
			}, function(err, data) {
				//上传结果
				callBack(err, data);
			});

		}

	});
});