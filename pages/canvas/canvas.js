Page({
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //var ctx = wx.createContext();
    const ctx = wx.createCanvasContext('myCanvas')
    //  ctx.setFillStyle('red')
    //  ctx.fillRect(0, 0, 150, 200)
    //  ctx.setFillStyle('blue')
    //  ctx.fillRect(150, 0, 150, 200)
    //  ctx.clearRect(10, 10, 150, 75)

    //  ctx.setFillStyle('red')
    //  ctx.fillRect(10, 10, 150, 75)

    //  ctx.setFontSize(20)
    //  ctx.fillText('Hello', 20, 20)
    //  ctx.fillText('MINA', 100, 100)

    ctx.arc(100, 75, 50, 0, 2 * Math.PI)
    ctx.setFillStyle('#EEEEEE')
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(40, 75)
    ctx.lineTo(160, 75)
    ctx.moveTo(100, 15)
    ctx.lineTo(100, 135)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    ctx.setFontSize(12)
    ctx.setFillStyle('black')
    ctx.fillText('0', 165, 78)
    ctx.fillText('0.5*PI', 83, 145)
    ctx.fillText('1*PI', 15, 78)
    ctx.fillText('1.5*PI', 83, 10)

    // Draw points
    ctx.beginPath()
    ctx.arc(100, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(100, 25, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(150, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    // Draw arc
    ctx.beginPath()
    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
    ctx.setStrokeStyle('#333333')
    ctx.stroke()


    //  wx.drawCanvas({
    //    canvasId:'myCanvas',
    //    actions: ctx.getActions()
    //  })

    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
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