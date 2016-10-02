/*
* @Author: 虚竹
* @Date:   2016-09-26 22:32:33
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-02 17:02:37
*/

;(function(angular) {
	'use strict';
	angular.module('renren').controller('hotController', ['$scope', 'httpService', function($scope, httpService) {
	 	var nowPage = 1;
	 	var pageNum = 8;
	 	var start = pageNum*(nowPage-1);
	 	
	 	$scope.dataList = {};
	 	$scope.nowPage = 1;//当前页数
	 	$scope.page = 1;//总共页数
	 	$scope.isLoading = true;


	 	function getMove(start){
		 	var url = "http://api.douban.com/v2/movie/in_theaters";
		 	httpService.jsonp(url, {
		 		start: start,
		 		count: pageNum
		 	}, function(data){
		 		$scope.dataList = data;
		 		console.log(data);
		 		$scope.page = Math.ceil(data.total/pageNum);
		 		$scope.isLoading = false;
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