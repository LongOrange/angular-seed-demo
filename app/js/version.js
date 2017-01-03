/**
 * Created by Administrator on 2017/1/3.
 */
'usr strict';
//定义组件，并在组件内添加version对象
var ver=angular.module('Version',['myDirective','myFilter']);
ver.value('version','0.1');