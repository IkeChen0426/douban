/*
* @Author: 虚竹
* @Date:   2016-09-26 22:33:35
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-30 13:43:20
*/


;(function(angular) {
	'use strict';
	angular.module('renren').controller('TopController', ['$scope', 'httpService', function($scope, httpService) {
	 	$scope.dataList = {};
	 	var url = "http://api.douban.com/v2/movie/top250";
	 	httpService.jsonp(url, {}, function(data){
	 		$scope.dataList = data;
	 		$scope.$apply();//获得数据后要手动更新到页面上
	 	})
	}]);
})(angular);