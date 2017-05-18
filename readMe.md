# 使用说明：
## 以请求接口 test.com/login/loginout.json为例 ##
+ 一、配置
  ### 接口支持两种模式：文件目录结构模式 、文件名转换模式 ,优先查询目录结构 ###

  ### 1.1 接口文件配置 ###

  + 1.1.1 文件目录模式 
    - json 文件夹中放置响应接口文件，接口文件路径对应域名后的路径，如上test.com/login/loginout.json 对应为  ./json/login/loginout.(json|js);
  
  + 1.1.2 文件名转换模式 
    - json 文件夹中放置响应接口文件，接口名为域名后的路径名（将 / 转换为 -），如上test.com/login/loginout.json  应配置为 ./json/login-loginout.(json|js);
  
  + 1.1.3 后缀名
    - 接口文件后缀名可以是 .json或.js ,服务器请求的接口地址后缀名不做限制 
  + 1.1.4 如果不熟悉相关代码，请勿删除 error.json
  + 支持mock.js 

### 1.2 服务器配置
  
- 默认使用3000端口 默认开启允许跨域 默认支持 get 和 post请求
   
- 可以配合webpack-devser 中的 proxy配置 ，转发目标服务器接口到该服务器接口，也可直接访问。
"# apiServer" 
