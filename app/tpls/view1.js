/**
 * Created by Administrator on 2017/1/3.
 */
'use strict';
//声明视图1模块，并设置路由参数
var view1= angular.module('view1',[]);
view1.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/view1',{
        templateUrl:'tpls/view1.html',
        controller:'view1Ctrl'
    })
}]);
view1.controller('view1Ctrl',function(){});