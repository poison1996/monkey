layui.define(function(exports) {
	var $ = layui.$,
		layer = layui.layer,
		laytpl = layui.laytpl
		setter = layui.setter

	//公共业务的逻辑处理可以写在此处，切换任何页面都会执行
	//……

	//对外暴露的接口
	exports('common', {
		conver: function(limit) {
			var size = "";
			if(limit < 0.1 * 1024) { //如果小于0.1KB转化成B
				size = limit.toFixed(2) + "B";
			} else if(limit < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB
				size = (limit / 1024).toFixed(2) + "KB";
			} else if(limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
				size = (limit / (1024 * 1024)).toFixed(2) + "MB";
			} else { //其他转化成GB
				size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
			}

			var sizestr = size + "";
			var len = sizestr.indexOf("\.");
			var dec = sizestr.substr(len + 1, 2);
			if(dec == "00") { //当小数点后为00时 去掉小数部分
				return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
			}
			return sizestr;
		},
		getUrlParam: function(name) { //js 获取url参数
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return unescape(r[2]);
			return null;
		},
		get:function (url,param,callBack){
			settings={
				url: url,
				headers:{
						Authorization:setter.askToken()
					},
				type: "GET",
				dataType: "JSON",
				contentType: "application/json",
				success: function(result) {
					 callBack(result)
				} //end success
			}
			if(param){
				settings.data=JSON.stringify(param);
			}
			$.ajax(settings); //end ajax
		},
		put: function (url,param,callBack) {//修改
			 var settings={
				url: url,
				headers:{
						Authorization:setter.askToken()
					},
				type: "PUT",
				dataType: "JSON",
				contentType: "application/json",
				success: function(result) {
					 callBack(result)
				} //end success
			}
			if(param){
				settings.data=JSON.stringify(param);
			}
			$.ajax(settings); //end ajax
       },
        post: function (url,param,callBack) {//新增
			 var settings={
				url: url,
				headers:{
						Authorization:setter.askToken()
					},
				type: "POST",
				dataType: "JSON",
				contentType: "application/json",
				success: function(result) {
					 callBack(result)
				} //end success
			}
			if(param){
				settings.data=JSON.stringify(param);
			}
			$.ajax(settings); //end ajax
        },
        /**
         * 
         * @param {Object} url //接口地址 
         * @param {Object} param //无参数可为null
         * @param {Object} callBack //回调函数 function
         */
       del: function (url,param,callBack) {//删除
            var settings={
				url: url,
				headers:{
						Authorization:setter.askToken()
					},
				type: "DELETE",
				dataType: "JSON",
				contentType: "application/json",
				success: function(result) {
					 callBack(result)
				} //end success
			}
			if(param){
				settings.data=JSON.stringify(param);
			}
			$.ajax(settings); //end ajax
       }
	});
});
