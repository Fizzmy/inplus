const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaddr1: 'https://i.loli.net/2021/02/28/1ghTHnelGwykrRF.jpg',
    imgaddr2: 'https://i.loli.net/2021/02/28/ewjHVry1Zo4z6cW.jpg',
    dataImg: [
      "https://i.loli.net/2021/03/08/jfBwgorenWT4Kyu.jpg", "https://i.loli.net/2021/03/08/b6jg2lXNvQZVEGD.jpg", "https://i.loli.net/2021/03/08/7YOTeqwQPXh8vCU.jpg"
    ]
  },
  detail: function (e) {
    var src = e.currentTarget.dataset.src;
    var imgList = ['https://i.loli.net/2021/02/28/1ghTHnelGwykrRF.jpg',
      'https://i.loli.net/2021/02/28/ewjHVry1Zo4z6cW.jpg'];
    wx.previewImage({
      current: src,
      urls: imgList
    })
  },
  details: function (e) {
    var src = e.currentTarget.dataset.src;
    var imgList = e.currentTarget.dataset.list;
    wx.previewImage({
      current: src,
      urls: imgList
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