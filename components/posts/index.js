// components/posts/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    postData: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onJumpToDetail(event) {
      const postId = event.currentTarget.dataset.postId
      wx.navigateTo({
        url: '/pages/post-detail/post-detail?pid=' + postId,
      })
    }
  }
})
