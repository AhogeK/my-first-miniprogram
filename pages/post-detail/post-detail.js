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
  onLoad(options) {
    this.data._pid = options.pid
    wx.getStorage({
      key: 'posts_collected',
    }).then((res) => {
      this.data._postsCollected = res.data
    }).catch(() => {
      this.data._postsCollected = {}
    })
    setTimeout(()=>{
      const collected = this.data._postsCollected[this.data._pid]
      this.setData({
        collected
      })
      for (const item of postList) {
        if (item.postId == options.pid) {
          this.setData({
            postData: item
          })
        }
      }
    }, 50)
  },

  onCollect(event) {
    wx.showModal({
      title: this.data.collected ? '是否取消收藏' : '是否确认收藏',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
    }).then((res) => {
      if(res.confirm){
        let postsCollected = this.data._postsCollected
        postsCollected[this.data._pid] = !postsCollected[this.data._pid]
        wx.setStorage({
          key: 'posts_collected',
          data: postsCollected,
        })
        wx.showToast({
          title: this.data.collected ? '取消收藏' : '收藏成功',
          duration: 2000,
        })
        this.setData({
          collected: postsCollected[this.data._pid]
        })
      }
    })
  },

  share(event) {
    wx.showActionSheet({
      itemList: ['分享给微信好友', '分享到朋友圈', '分享到QQ', '分享到微博'],
    }).then((res) => {
      console.log(res.tapIndex)
    }).catch((res) => {
      console.log(res)
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