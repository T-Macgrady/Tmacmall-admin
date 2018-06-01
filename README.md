# 从零开始打造一个企业级电商后台管理系统

## 项目说明：

- 项目来源于慕课，包括用户端和后台管理系统，前者可了解电商网站从设计到上线整个流程；后者采用React16 + React-Router4结合yarn、webpack、ES6和Sass、Bootstrap等技术，体验前开发端新技术。
- 对于前端新人，从前到后撸一把还是很有必要的，此项目旨在交流学习，后续会整理项目中笔记及相关知识放在博客上，欢迎交流学习~
- [前台项目 >>](https://gitee.com/happymmallmac/mmall-m)

<a id="demo"></a> 
### 上线demo:
- [前台展示 >>](http://47.106.183.192)
- [后台管理 >>](http://47.106.183.192:8080)

## 项目运行

### 下载项目

``git@gitee.com:happymmallmac/admin-fe.git``

### 运行

-  [安装nodejs环境,使用v6.12.3](https://nodejs.org/download/release/v6.12.3/)
-  [安装包管理工具yarn@1.6.0](https://yarn.bootcss.com/docs/install.html)
-  在项目根目录执行yarn初始化``yarn / yarn install``
-  启动项目
 - 开发模式 :
     ``yarn run dev /yarn run dev_win``
    生产模式 :
     ``yarn run dist /yarn run dist_win``
-  [开发模式下预览项目](http://localhost:8086/)
	[接口文档 >>](https://gitee.com/happymmallmac/mmall-m/wikis/Home)


## 实战目标

- 解锁React框架企业级开发方式，项目部署上线
- 深入掌握各种技术原理，知其然也知其所以然

## 架构设计

   - 与用户端项目一样采用了前后端完全分离的分层模块化架构
   - ES6模块化  React组件

### 技术选型&工具

### 框架

| 项目      |  用户端   |   后台    |
| :--------: | :--------:| :------: |
| 特点    |   要求稳定 用户类型多样 兼容性好 有SEO要求 多页应用 |  开发快 企业内部使用 不要求兼容性和SEO 单页应用  |
|  选型    |   javascript +  jquery + commonjs + hogan |  React-Router4 + html5 + css3 + sass + Bootstrap + React16  + ES6   |


### 工具

|  工具   |    构建工具 |依赖环境 |包管理 | 自动化发布脚本|  代码编写 |代码调试 |ES6转换工具 | 版本控制| 域名配置 |
| :---: | :---------:| :------: |:------: |:------: |:------: |:------: |:------: |:------: |
|  名称   |   webpack | NodeJS  |Yarn  | Shell|   sublime |chrome |Babel | git| Nginx |

>注：更新webpack@4.2.0后webpack-dev-server新增了devServer的配置，用自带的代理就可以访问接口

## 业务开发

1.  通用模块 : 通用组织结构、通用菜单、通用导航
 - [使用Bootstrap皮肤快速打造通用框架，兼容处理](https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html#)
2. 用户模块 : 登录、退出、用户列表
 - [ 分页工具组件RcPagination](https://github.com/react-component/pagination)
 - table-list组件开发
3.  商品模块 : 带筛选的商品列表，商品详情，添加/修改商品
 - 品类选择器二级联动组件
 - [ 文件上传React-fileupload插件](https://www.npmjs.com/package/react-fileupload)，进行React版本兼容处理,封装组件
 - [ 富文本编辑器Simditor JQuery插件](http://simditor.tower.im/) ，封装成React组件
 - 表单回填
4.  品类模块 : 品类列表，添加品类，修改品类名称
5.  订单模块:  带筛选的订单列表，订单详情

## 生产环境适配及基本SEO

### 生产环境适配
-  利用webpack添加favicon
-  线上域名分离，HTML路径简化

|  文件   |    html |js + css |image | 
| :---: | :---------:| :------: |:------: |
|  位置   |   www/admin. + 根域名 | s. + 根域名     |img. + 根域名  |

  - 对线上打包结果进行回归测试，防止压缩后显示不一致
	
## 项目上线

### 上线准备
- 购买服务器和域名  
 - [阿里云服务器注册免费体验 >>](https://free.aliyun.com/ntms/free/personal.html?handle=true)
 - [获取实例公网IP  登录密码 >>](https://ecs.console.aliyun.com/?spm=5176.2020520001.1011.2.69864bd3mI9irR&accounttraceid=1e26d2e5-35d6-45e6-8733-bb2fc7a75871#/server/i-wz9ewlqw5noo6zk4iyfn/detail?regionId=cn-shenzhen) ，本次项目使用CentOS7
 
### 生产环境配置
  
1. 使用git bash远程连接服务器
2. [安装nodejs环境,使用v6.12.3](https://nodejs.org/download/release/v6.12.3/) 
   
3. [安装yarn@1.6.0,也可使用npm,推荐yarn](https://yarn.bootcss.com/docs/install.html#linux-tab) 
	
4. 安装git,可使用yum安装 ：
``yum install git``
5. 建立developer product 文件夹，拉取代码至developer

6. 安装nginx  ：
``yum install nginx``

### 发布脚本编写

1. 编写发布脚本前先手动执行一次，确保脚本准确
2. 编写自动发布脚本
####nginx和域名配置（这次没有进行域名分离）
3. 新建vhost/*.conf并将其引入nginx.conf主文件
4. nginx配置域名
5. [域名解析 >>](https://dns.console.aliyun.com/#/dns/domainList)

6. [查看网站并测试 >>](#demo)


## 说明

- 如果对您有帮助，您可以点 "Star" 支持一下 十分感谢!

## 相关链接

[本人博客 ](#) 
[对应用户端项目](https://gitee.com/happymmallmac/mmall-m)


## 项目截图

### 用户端

![首页-用户端](https://gitee.com/happymmallmac/admin-fe/attach_files/download?i=140154&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F03%2FCE%2FPaAvDFsQoWaAO0C8AAdJupeT9Is594.png%3Ftoken%3D28d5c6c0ad8f9d887f08dc45d28fcf90%26ts%3D1527816623%26attname%3D%25E6%2588%25AA%25E5%259B%25BE-qian1.png)
![订单确认-用户端](https://gitee.com/happymmallmac/admin-fe/attach_files/download?i=140158&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F03%2FCE%2FPaAvDFsQoZKAO1OGAAEWeHtspx8300.png%3Ftoken%3D6f6ad415e94bac85eecb0b97111ba0c0%26ts%3D1527816623%26attname%3D%25E6%2588%25AA%25E5%259B%25BE-qian5.png)

### 后台管理系统

![首页-后台](https://gitee.com/happymmallmac/admin-fe/attach_files/download?i=140162&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F03%2FCE%2FPaAvDFsQosWARAKRAACKFHDSJb4474.png%3Ftoken%3Dea2040802c6a8d1c0eb4c3c91f88c9e3%26ts%3D1527816901%26attname%3D%25E6%2588%25AA%25E5%259B%25BE-hou.png)
![商品-后台](https://gitee.com/happymmallmac/admin-fe/attach_files/download?i=140159&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F03%2FCE%2FPaAvDFsQoZyAdd0EAAEDDvYcI_Y651.png%3Ftoken%3Decf09e16769abcbeb123b61c83fb9122%26ts%3D1527816623%26attname%3D%25E6%2588%25AA%25E5%259B%25BE-%25E5%2590%258E1.png)


