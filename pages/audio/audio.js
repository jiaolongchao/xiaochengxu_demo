var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '点击暂停音乐',
    userInfo: {},
    src: '../../images/avatar.png',
    rotate:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.onBackgroundAudioPlay(function(){
      console.log('------onBackgroundAudioPlay 监听音乐播放--------')
      that.setData({ rotate: 'rotate' })
    })
    wx.onBackgroundAudioPause(function(){
      console.log('------onBackgroundAudioPause 监听音乐暂停--------')
      that.setData({ rotate: null })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      success: function (res) {
        // succe       
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  bindViewTap: function () {
    wx.pauseBackgroundAudio({
      success: function (res) {
        // success
        
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })


  },
})