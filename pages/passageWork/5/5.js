const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaddr1:'https://i.loli.net/2021/02/27/vuaci9jVlHTfUZ1.jpg',
    imgaddr2:'https://i.loli.net/2021/02/27/SkbC4JlHy3w9fiE.png'
  },
  detail: function(e){
    var src=e.currentTarget.dataset.src;
    var imgList=['https://i.loli.net/2021/02/27/vuaci9jVlHTfUZ1.jpg',
    'https://i.loli.net/2021/02/27/SkbC4JlHy3w9fiE.png'];
    wx.previewImage({
      current:src,
      urls:imgList
    })
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