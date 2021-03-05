// pages/post-detail/post-detail.js
import { postList } from '../../data/data'

// const app = getApp()
// console.log(app)
// console.log(app.test)

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
  onLoad: function (options) {
    console.log(options)
    this.data._pid = options.pid
    this.data._postsCollected = wx.getStorageSync('posts_collected')
    const collected = wx.getStorageSync('posts_collected')[this.data._pid]
    this.setData({
      collected
    })
    for (const item of postList) {
      if (item.postId == options.pid) {
        console.log(item)
        this.setData({
          postData: item
        })
      }
    }
  },

  onCollect(event) {
    const postsCollected = this.data._postsCollected;
    postsCollected[this.data._pid] = !postsCollected[this.data._pid]
    this.setData({
      collected: postsCollected[this.data._pid]
    })
    wx.setStorageSync('posts_collected', postsCollected)
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