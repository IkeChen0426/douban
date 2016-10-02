/*
* @Author: 虚竹
* @Date:   2016-10-02 16:20:00
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-02 17:15:23
*/
(function(angular){
	'use strict';
	var app = angular.module('renren');
	app.controller('loadingController', [
		'$scope', 
		'$routeParams', 
		'httpService', 
		function($scope, $routeParams, httpService){
			var url = "http://api.douban.com/v2/movie/subject/"  + $routeParams.id;
			$scope.isLoading = true;
			httpService.jsonp(url, {}, function(data){
				console.log(data);
				$scope.dataList = data ;
				$scope.isLoading = !$scope.isLoading;
				$scope.$apply();
			})
	}]);

})(angular);