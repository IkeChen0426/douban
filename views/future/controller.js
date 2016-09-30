/*
* @Author: 虚竹
* @Date:   2016-09-26 22:33:04
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-30 13:42:31
*/


;(function(angular) {
	'use strict';
	angular.module('renren').controller('futureController', ['$scope', 'httpService', function($scope, httpService) {
	 	$scope.dataList = {};
	 	var url = "http://api.douban.com/v2/movie/coming_soon";
	 	httpService.jsonp(url, {}, function(data){
	 		$scope.dataList = data;
	 		$scope.$apply();//获得数据后要手动更新到页面上
	 	})
	}]);
})(angular);
