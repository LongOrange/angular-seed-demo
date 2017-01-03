/**
 * Created by Administrator on 2017/1/3.
 */
'use strict';
//设置视图模块，配置路由
var view2=angular.module('view2',[]);
view2.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/view2',{
        templateUrl:'tpls/view2.html',
        controller:'view2Ctrl'
    })
}]);
view2.controller('view2Ctrl',function(){});