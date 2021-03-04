// pages/posts/posts.js

// var postData = require('../../data/data.js')
// console.log(postData)

import { postList } from '../../data/data'

Page({

  /**
   * Page initial data
   */
  data: {

  },

  onJumpToDetail(event) {
    const postId = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + postId,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      postList
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})