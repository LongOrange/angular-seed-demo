/**
 * Created by Administrator on 2017/1/3.
 */
'use strict';
//设置主模块,和模块依赖关系，view1，view2是视图，version是组件
var app=angular.module("myApp",['ngRoute','view1','view2','Version']);
//配置地址哈希前缀和默认路由
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    // $locationProvider.hashPrefix("!");
    $routeProvider.otherwise({redirectTo:'/view1'});
}]);
