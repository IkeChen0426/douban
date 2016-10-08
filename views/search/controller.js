/*
* @Author: 南在南方
* @Date:   2016-09-30 16:34:51
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-08 13:01:56
*/
;(function(angular){
	'use strict';
	var app = angular.module('renren');
	app.controller('searchController', [
		'$scope', 
		'$routeParams', 
		'httpService',
		 function($scope, $routeParams, httpService){
			var nowPage = 1;
		 	var pageNum = 8;
		 	var start = pageNum*(nowPage-1);
		 	
		 	$scope.dataList = {};
		 	$scope.nowPage = 1;//当前页数
		 	$scope.page = 1;//总共页数
		 	$scope.isLoading = true;


		 	function getMove(start, text){
			 	var url = "http://api.douban.com/v2/movie/search";
			 	httpService.jsonp(url, {
			 		start: start,
			 		count: pageNum,
			 		q: text
			 	}, function(data){
			 		$scope.dataList = data;
			 		console.log(data);
			 		$scope.page = Math.ceil(data.total/pageNum);
			 		$scope.isLoading = false;
			 		$scope.$apply();//获得数据后要手动更新到页面上
			 	});	
		 	}
		 	//$routeParams.text将搜索内容传给地址栏
		 	getMove(0, $routeParams.text);
		 	$scope.goPro = function(nowPage){
		 		if (nowPage >= 1) {
		 			$scope.isLoading = !$scope.isLoading;
		 			var start = pageNum*(nowPage-1);
		 			getMove(start, $routeParams.text);
		 			$scope.nowPage--;
		 		}
		 	}
		 	$scope.goNext= function(nowPage){
		 		console.log("hahaa");//说明进入成功
		 		if (nowPage <= $scope.page) {
		 			$scope.isLoading = !$scope.isLoading;
		 			var start = pageNum*(nowPage-1);
		 			console.log(nowPage);
		 			getMove(start, $routeParams.text);
		 			$scope.nowPage++;
		 		}
		 	}
	}]);
})(angular);