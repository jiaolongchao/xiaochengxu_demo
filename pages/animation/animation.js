var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:[]
  },
  bindViewTap:function(){
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 3000,
      timingFunction: "ease",
      delay: 0
    })

    animation.rotate(90).scale(2).step()

    this.setData({ animationData: animation.export()})
  },
  bindViewTap2:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
  
})