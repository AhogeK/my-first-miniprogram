"use strict";

var _data = require("../../data/data");

// pages/post-detail/post-detail.js
Page({
  /**
   * Page initial data
   */
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _postsCollected: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function onLoad(options) {
    this.data._pid = options.pid;
    var postsCollected;
    wx.getStorage({
      key: 'posts_collected',
      success: function success(result) {
        console.log(result.data);
        postsCollected = result.data;
      },
      fail: function fail() {
        postsCollected = {};
      }
    });
    setTimeout(function () {}, 1000);
    console.log(postsCollected);
    console.log(this.data._postsCollected);
    var collected = this.data._postsCollected[this.data._pid];
    this.setData({
      collected: collected
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _data.postList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.postId == options.pid) {
          this.setData({
            postData: item
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  onCollect: function onCollect(event) {
    var postsCollected = this.data._postsCollected;
    postsCollected[this.data._pid] = !postsCollected[this.data._pid];
    this.setData({
      collected: postsCollected[this.data._pid]
    }); // wx.setStorageSync('posts_collected', postsCollected)

    wx.setStorage({
      key: 'posts_collected',
      data: postsCollected
    }); // wx.showToast({
    //   title: '收藏成功',
    //   duration: 3000,
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function onShareAppMessage() {}
});