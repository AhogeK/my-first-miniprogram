// components/movie/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    movie: Object
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
    onGoToDetail(event) {
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?mid=' + this.properties.movie.id
      })
    }
  }
})
