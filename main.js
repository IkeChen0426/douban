/*
* @Author: 南在南方
* @Date:   2016-10-10 16:12:04
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-11 11:02:54
*/

'use strict';
require.config({
	paths:{
		jquery: 'bower_components/jquery/dist/jquery.min',
		angular: 'bower_components/angular/angular.min',
		angularRoute: 'bower_components/angular-route/angular-route'
	},
	//require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。
	//具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
	//（2）deps数组，表明该模块的依赖性。
	shim: {
		'angular' : {
			'exports' : 'angular'
		},
		'angularRoute': ['angular']
	},
	// 优先级，优先加载jq模块
	priority: [
		"jquery"
	]
});
require([
	'angular',
	'renren'
	], function (angular) {
	 var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// 当加载完页面，手动开启模块
			// 注意手动开启不加ng-app
				angular.bootstrap(document, ['renren']);
			});
	}
);