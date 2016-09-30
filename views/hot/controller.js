/*
* @Author: 虚竹
* @Date:   2016-09-26 22:32:33
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-30 12:54:39
*/

;(function(angular) {
	'use strict';
	angular.module('renren').controller('hotController', ['$scope', 'httpService', function($scope, httpService) {
	 	$scope.dataList = {};
	 	var url = "http://api.douban.com/v2/movie/in_theaters";
	 	httpService.jsonp(url, {}, function(data){
	 		$scope.dataList = data;
	 		$scope.$apply();//获得数据后要手动更新到页面上
	 	})
	}]);
})(angular);