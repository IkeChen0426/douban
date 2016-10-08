/*
* @Author: 南在南方
* @Date:   2016-09-26 22:33:04
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-08 13:01:40
*/


;(function(angular) {
	'use strict';
	angular.module('renren').controller('futureController', ['$scope', 'httpService', function($scope, httpService) {
	 	var nowPage = 1;
	 	var pageNum = 8;
	 	var start = pageNum*(nowPage-1);
	 	
	 	$scope.dataList = {};
	 	$scope.nowPage = 1;//当前页数
	 	$scope.page = 1;//总共页数
	 	$scope.isLoading = true;


	 	function getMove(start){
	 	var url = "http://api.douban.com/v2/movie/coming_soon";
		 	httpService.jsonp(url, {
		 		start: start,
		 		count: pageNum
		 	}, function(data){
		 		$scope.dataList = data;
		 		console.log(data);
		 		var i = 0;
		 		i++;
		 		console.log(i);
		 		$scope.page = Math.ceil(data.total/pageNum);
		 		$scope.isLoading = !$scope.isLoading;
		 		$scope.$apply();//获得数据后要手动更新到页面上
		 	});	
	 	}

	 	getMove(0);
	 	$scope.goPro = function(nowPage){
	 		if (nowPage >= 1) {
	 			$scope.isLoading = !$scope.isLoading;
	 			var start = pageNum*(nowPage-1);
	 			getMove(start);
	 			$scope.nowPage--;
	 		}
	 	}
	 	$scope.goNext= function(nowPage){
	 		console.log("hahaa");//说明进入成功
	 		if (nowPage <= $scope.page) {
	 			$scope.isLoading = !$scope.isLoading;
	 			var start = pageNum*(nowPage-1);
	 			console.log(nowPage);
	 			getMove(start);
	 			$scope.nowPage++;
	 		}
	 	}
	}]);
})(angular);
