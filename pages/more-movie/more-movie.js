// pages/more-movie/more-movie.js

const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    movies: [],
    _type: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data._type = options.type
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let title = '电影'
    switch(this.data._type) {
      case 'in_theaters':
        title = '正在热映'
        break
      case 'coming_soon':
        title = '即将上映'
        break
      case 'top250':
        title = '豆瓣Top250'
        break
    }
    wx.setNavigationBarTitle({
      title
    })
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
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies: res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: this.data.movies.length,
        count: 12
      },
      success: (res) => {
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        })
      }
    })
    wx.hideNavigationBarLoading()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})