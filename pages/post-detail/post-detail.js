// pages/post-detail/post-detail.js
import { postList } from '../../data/data'

const app = getApp()
// console.log(app)
// console.log(app.test)

Page({

  /**
   * Page initial data
   */
  data: {
    postData: {},
    collected: false,
    isPlaying: false,
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
    const backAudioManager = wx.getBackgroundAudioManager()
    this.setData({
      backAudioManager,
      isPlaying: app.gMusicPlaying
    })
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

  onMusic(event) {
    if (!this.data.isPlaying) {
      this.data.backAudioManager.title = this.data.postData.music.title
      this.data.backAudioManager.src = this.data.postData.music.url
      this.data.backAudioManager.coverImgUrl = this.data.postData.music.coverImg
      this.data.backAudioManager.onPlay(() => {
        console.log('on play')
        this.setData({
          isPlaying: true
        })
        app.gMusicPlaying = true
      })
      this.data.backAudioManager.onPause(() => {
        console.log('on pause')
        this.setData({
          isPlaying: false
        })
        app.gMusicPlaying = false
      })
    } else {
      this.data.backAudioManager.pause()
      this.setData({
        isPlaying: false
      })
    }
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
    console.log("on unload")
    // this.data.backAudioManager.stop()
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