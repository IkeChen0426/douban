/*
* @Author: 南在南方
* @Date:   2016-10-11 09:19:46
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-11 13:17:57
*/

'use strict';
define([
	'angular',
	'angularRoute',
	'renren',
	'views/future/controller.js',
	'views/hot/controller.js',
	'views/loading/controller.js',
	'views/top/controller.js',
	'views/search/controller.js'
	], function(angular){
		
	var app = angular.module('renren', [
		'ngRoute',
		/*'renren.directive',	*/
		'renren.hot', 
		'renren.future',
		'renren.search',
		'renren.loading',
		'renren.top'
		]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/hot', {
			templateUrl:'views/hot/view.html',
			controller: "hotController"
		}).when('/future', {
			templateUrl:'views/future/view.html',
			controller: "futureController"
		}).when('/top', {
			templateUrl:'views/top/view.html',
			controller: "TopController"
		}).when('/search/:text', {
			templateUrl: 'views/search/view.html',
			controller: 'searchController'
		}).when('/subject/:id', {
			templateUrl: 'views/loading/view.html',
			controller: 'loadingController'
		}).otherwise({
			redirectTo: '/hot'//直接跳转
		});
	}]);
	console.log("1");
	return app;

});
