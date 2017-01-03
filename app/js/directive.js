/**
 * Created by Administrator on 2017/1/3.
 */
'use strict';
//定义模块，在模块内定义指令
var dir= angular.module('myDirective',[]);
dir.directive('appVersion',['version',function(version){
    /*return {
        restrict:'EAC',
        scope:{},
        controller:function($scope){
            $scope.desc='This is a descripetion';
        },
        link:function(scope,element,attr){
            element.text(version);
            console.log(scope.desc);
        }
    }*/
    return function(scope,ele,attr){
        ele.text(version);
    }
}]);