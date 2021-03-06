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

### 开发工具添加新的编译模式
> 当我们要开发新的页面时，需要小程序显示要开发的页面就可以通过新增编译模式进行

![新建的位置](https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/2021-02-23_14-28.png)
![新建](https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/2021-02-23_14-29.png)

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

### 小程序 app.json 的一些配置

key ``"window"`` value 为一个对象，当中有 ``"navigationBarBackgroundColor"``用于设置顶部导航条的背景色，该背景色不能直接在``.wxss``中设置

### 小程序的 app.js

在小程序的``app.js``中可以使用``onLaunch``生命周期函数，它会在小程序启动时执行，它也配置配置全局变量，然后在其他页面使用``getApp()``获取app即可获取到设置的全局变量

## 组件

### 小程序自带组件库

#### swiper与swiper-item组件
> [分别是小程序自带的滑块视图容器组件与滑块容器元素组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)

```html
<swiper indicator-dots autoplay circular interval="3000">
  <swiper-item>
    <!-- 插槽 -->
    <image src="https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/bestplayers.png" />
  </swiper-item>
  <swiper-item>
    <image src="https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/lpl.png" />
  </swiper-item>
  <swiper-item>
    <image src="https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/jumpfly.png" />
  </swiper-item>
</swiper>
```

*在``swiper``组件中，``indicator-dots``属性表是否显示指示点，``autoplay``表示是否自动轮播滑动，``circular`` 表示是否形成一个环反复循环，``interval`` 则表示自动轮播滑动的间隔时长，``3000`` 即表示3秒。属性没有value说明其值为``true``，如果自己赋值需要 ``autoplay="{{true}}"``的格式，不加 ``{{}}``不作为true仅作为true这个字符串*

*如果要给这个滑块设置一个宽高，需要在``swiper``以及``swiper-item``**标签里面**的元素一起配合设置*

### LinUI组件库
> [Lin UI 是基于 微信小程序原生语法 实现的组件库。遵循简洁，易用的设计规范。](https://doc.mini.talelin.com/)

#### 安装编译LinUI

1. 初始化
      * ``npm init``
2. 安装LinUI
      * ``npm install lin-ui``
3. 小程序NPM编译
      * ![blog-img-202102231104](https://ahogek-oss.oss-cn-hangzhou.aliyuncs.com/blog-img/2021-02-23_11-04.png)

### 如何使用组件
  1. 进入要使用组件的页面文件夹
  2. 在*usingComponents* 中添加自定义组件，例如：
      * ```json
        {
          "usingComponents": {
            "l-avatar": "/miniprogram_npm/lin-ui/avatar/index"
          }
        }
        ```
        左边的``l-avatar``是自定义的组件名,右边的 value 是组件的路径

之后就可以在``.wxml``中使用``l-avatar``组件

## 生疏CSS简单了解
### letter-spacing
> 用来增加或者减少字符间的空白间距

## WXML 语法
### 条件渲染
#### wx:if
在 wxml 中的标签中使用 ``wx:if`` 可以控制该标签（组件）是否显示。同时可以配合 ``wx:else``一起使用

#### wx:for
在 wxml 中使用``wx:for``可用于循环渲染，其中配合使用 ``wx:for-index`` 可以指定数组当前下标的变量名，使用 ``wx:for-item`` 可以指定数组当前元素的变量名。这两个都有默认值，如果不使用下标为``index``，元素为``item``

**不同与Vue, 小程序建议将 ``wx:for`` 使用在 ``<block></block>`` 上，但类似与Vue的``:key``，小程序也需要 ``wx:key`` 来指定列表中项目的唯一的标识符，若不提供会报一个 warning**

### 组件绑定事件
在小程序中让组件标签绑定事件可以通过``bing:[事件类型]="[事件函数名]"``来绑定函数，但中可以省略``:`` 例如 ``bindtap="tapName"``

### 绑定并阻止事件冒泡
除 ``bind`` 外，也可以用 ``catch`` 来绑定事件。与 ``bind`` 不同， ``catch`` 会**阻止**事件向上**冒泡**。

### 自定义属性 data
自定义属性 ``data`` 也就是小程序的公共属性 ``data-*`` 用于组件上出发的事件时，会发送给事件处理函数

*通过跳转函数可利用url来传递data数据，data数据在调用方法的参数event中，传递过去后可在onLoad的option参数中获取*

## API

### 跳转应用内的某个页面

#### wx.navigateTo(Object object)
保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 ``wx.navigateBack`` 可以返回到原页面。程序中页面栈最多十层。
在小程序插件中使用时，只能在当前插件的页面中调用

#### wx.redirectTo(Object object)
关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
在小程序插件中使用时，只能在当前插件的页面中调用



### 小程序缓存的增删改查清除

**新增**

``wx.setStorageSync('flag', true)``

**修改**

``wx.setStorageSync('flag', false)``

**查看**

``wx.getStorageSync('flag')``

**删除**

``wx.removeStorageSync('flag')``

**清除**

``wx.clearStorageSync()``

**缓存异步获取**

```js
async onLoad(options) {
    this.setData({
      postList
    })
    wx.setStorageSync('flag', true);
    // 第一种
    wx.getStorage({
      key: 'flag'
    }).then((val) => {
      console.log(val)
    })
    // ES7 第二种
    console.log(await wx.getStorage({ key: 'flag'}))
  }
```

### 显示消息提示框

#### wx.showToast(Object object)

```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
```

* ``title`` 提示的内容
* ``icon`` 显示的图标类型
* ``duration`` 提示的延迟时间

[showToast 官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)

### 显示模态对话框

#### wx.showModal(Object object)

```js
wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```

* ``title`` 提示的标题
* ``content`` 提示的内容
* ``sucess`` 接口调用成功的回调函数

[showModal 官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)



### 显示操作菜单

#### wx.showActionSheet(Object object)

```js
wx.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success (res) {
    console.log(res.tapIndex)
  },
  fail (res) {
    console.log(res.errMsg)
  }
})
```

* ``itemList`` 按钮的文字数组，数组长度最大为6
* ``success`` 接口调用成功的回调函数
  * ``tapIndex`` 用户点击的按钮序号，从上到下的顺序从0开始
* ``fail`` 接口调用失败的回调函数