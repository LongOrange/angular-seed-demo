##angular-seed模块分析

###模块依赖关系

index.html: 主页,加载类库和app.js，调用指令和过滤器

app.js ：程序入口点,声明依赖模块关系，并定义默认路由

依赖模块：
   
    视图模块：view1 ,view2
    
    组件模块：Version (依赖 myDirective,myFilter)


              

模块分析：

view1:

     view1.html：视图模板,打印一个常量字符串
  
    view1.js: 模块代码，声明模块view1,并在view1上定义路由/view1, 符合该路径的则调用视图模板 view1.html

view2:
    
    view2.html：视图模板,打印一个常量字符串和一个指令
     
    view2.js: 模块代码，声明模块view2,并在view2上定义路由/view2, 符合该路径的则调用视图模板 view2.html
  
Version:   

    version.js:模块代码，定义模块Version和依赖关系，依赖指令和过滤器：myDirective,myFilter，并定义一个常量version
    directive.js: 模块代码，定义模块myDirective, 在该模块中定义一个指令，该指令操作DOM元素，修改该元素的文本值=常量version
    filter.js:模块代码，定义模块myFilter，在该模块中定义一个过滤器，该过滤器返回一个函数，该函数返回一个格式化后的字符串