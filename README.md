# my-first-miniprogram
> 我的第一个小程序

[TOC]

## 初识小程序
### 近几年主要的变化
* 自定义组建
* 小程序组件库的使用(LinUI)
* 一些新特性

### 下载小程序开发工具
**Linux系统没有官方的小程序开发工具！！！！**
*Linux版github下载地址: https://github.com/cytle/wechat_web_devtools*

在该库的REDEME介绍里有相关安装使用的方法

### 新建小程序项目

在创建小程序项目时，需要注意*AppID*

可以使用注册号，但会有限制，AppID相当与微信小程序中的唯一ID，需要它才能使用微信官方提供的高级接口，该ID需要在[微信公众平台](https://mp.weixin.qq.com/)上注册小程序获取

主要不使用小程序的云开发，而是传统的前后端分离，后端单独构建

### 小程序appid的注册

点击小程序中输入AppID的下面的注册进入网站按自身需要及官方流程填写相关资料申请即可，现小程序已支持个人开发者

虽然进入个人小程序后台，左侧有*开发管理*菜单选项进入点击开发设置即能看到AppID

### 新版小程序开发工具的一些设置

主要在项目设置
点击右上角的详细后点击设置
当中需要勾选增强编译（支持更高级的ES语法）使用npm模块以及不校验合法域名、web-view（业务域名）、TLS版本以及HTTPS证书（小程序要上线必须基于HTTPS加密，但开发时是不具备的，小程序便无法使用没有上线，想调用非HTTPS接口就需要勾上）

调试器：
  默认没有被打开，该调试器非常重要，即chrome的F12调试器
编译器：
  即右边的代码块
模拟器：
  即手机模拟页面

资源管理器可以关闭，通过搜索功能查找所需要的文件

### 小程序的基本单位-Page页面

小程序所有的页面都放在*pages*的文件夹中，但不是说必须

在主目录中的``app.json``中配置的页面路径

## 小程序的基本目录结构与文件作用剖析

### 小程序页面的4种基本文件类型详解

* **.wxml**
  * 用于写页面的骨架
* **.wxss**
  * 用于写页面的样式
* **.js**
  * 用于写页面的JS
* **.json**
  * 用于页面的配置

*小程序中只要各个文件的前缀文件名相同不需要特意引入样式、JS等文件*

### 小程序的全局配置文件、全局样式表和应用程序级别JS文件

>app.js app.json app.wxss

上述这三个文件的文件名是不能修改的，他们是小程序默认全局的配置

``project.config.json`` 记录项目的基本配置

``sitemap.json`` 做小程序的搜索

### 新建页面的技巧与规则

在pages文件夹下如新建index文件夹，如果里面没有任何文件，可以通过右键index就会有new page新页面选项会自动创建四个主要的文件（**新建功能只有在小程序没有任何错误的情况下才会生效**）

之后在app.json中的pages的数组添加地址如 ``"pages/index/index"`` 即可

小程序默认显示 pages 中的第一项

### image标签显示一张图片

通过 ``#image></image>`` 标签显示 ``src`` 属性指向对应文件夹下的图片

## rpx响应式单位与flex布局

### 小程序rpx响应式单位的特点

``rpx``是小程序中自适应机型的长度单位

image组件如果不设置长宽样式，默认带有[长宽设置](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

### 使用flex布局进行垂直分布布局

#### 什么是 flex 布局
> 一种一维布局模型，提供一维上强大的水平或垂直的空间分布对齐能力

felx具备两根轴线，分别为主轴与交叉轴。
  * 主轴由 ``flex-direction`` 定义。例如如果进行垂直分布可以使用 ``flex-direction: column;``
  * 交叉轴垂直主轴，所以它的方向取决与``flex-direction``的定义

*更多关于[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)可以访问MDN查看相关文档*

在开发中使用flex通常会使用一个总容器，而小程序中常用的便是``#view></view>``