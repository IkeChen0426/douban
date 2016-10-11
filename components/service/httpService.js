define(["angular"], function(angular) {
	'use strict';
	/*写一个jsonp跨域请求数据封装成一个服务*/
	var app = angular.module('renren.http', []);
	app.service('httpService',[function(){
			//url是请求数据的地址
			//data是对请求数据的要求
			//fn是请求数据成功后的回调函数
			this.jsonp = function(url, data, fn){
				function getData(data){
					fn(data);
					document.body.removeChild(script);
				}
			window['getData']  = getData;
			//将data数据转换成字符串
			var searchData = "?";
			for(var i in data){
				searchData += i +"=" + data[i] + "&";
			}
			//1.创建一个script标签
			var script = document.createElement("script");
			//2.加入请求体中getData是一个回调函数
			script.src = url + searchData + "callback=getData";
			//3.插入标签到页面中
			document.body.appendChild(script);
		}
	}]);
	return app;
});
	
