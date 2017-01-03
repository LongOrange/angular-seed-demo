/**
 * Created by Administrator on 2017/1/3.
 */
'use strict';
//定义过滤器模块，在模块中定义过滤器，处理字符串的格式化问题
var fil=angular.module('myFilter',[]);
fil.filter('interpolate',['version',function(version){
    return function(text){
        return String(text).replace(/\%VERSION\%/mg,version);
    };
}]);
