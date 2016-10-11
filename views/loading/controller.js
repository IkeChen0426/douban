/*
* @Author: 南在南方
* @Date:   2016-10-02 16:20:00
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-11 13:08:00
*/
define(['angular', 
	'angularRoute', 
	'../../components/service/httpService'], function(angular){
	'use strict';
		var app = angular.module('renren.loading', ["renren.http"]);
		
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
	return app;
});	

