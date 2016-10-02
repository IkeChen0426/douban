/*
* @Author: 虚竹
* @Date:   2016-09-30 14:05:09
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-02 16:17:31
*/

;(function(angular){
	'use strict';
	var app = angular.module('renren');
	app.directive('autoFocus', function(){
		return{
			restrict: 'EA',//限制
			link: function(scope, element, attr){
				element.on('click', function(){
					element.parent().children().attr('class', '');
					element.addClass('active');
				});
			}
		}
	});
})(angular);