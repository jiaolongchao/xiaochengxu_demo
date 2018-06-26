var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'setstorage',
    userInfo: {},
    message:""
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
    
  },
  bindViewTap:function(){
    try {
      wx.setStorageSync('key', 'value3')
    } catch (e) {
    }
  },
  bindViewTap2:function(){
    // try {
    //   var value = wx.getStorageSync('key')
    //   if (value) {
    //     // Do something with return value
    //     this.setData({ message: value})
    //   }
    // } catch (e) {
    //   // Do something when catch error
    // }

    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  }
  
})