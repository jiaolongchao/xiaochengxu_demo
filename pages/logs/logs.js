Page({

  /**
   * 页面的初始数据
   */
  data: {
      articleId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---logsPage onLoad---')
    console.log(options)
    this.setData({
      articleId : options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('---logsPage onReady---')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('---logsPage onShow---')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('---logsPage onHide---')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('---logsPage onUnload---')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})