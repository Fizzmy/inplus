const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firimgurl: 'https://i.loli.net/2021/02/28/rSQZLO5vFxmJgdX.jpg',
    secimgurl: 'https://i.loli.net/2021/02/28/m2forzHqZui7FcB.jpg',
    lasimgurl: 'https://i.loli.net/2021/02/28/eUX17xhaftQbJon.jpg',
    fourimgurl: 'https://i.loli.net/2021/02/28/ubZ3rgmETMGIHYs.jpg',
    trdimgurl: 'https://i.loli.net/2021/02/28/swup6r395xdbiR1.png'
  },
  detail: function (e) {
    var src = e.currentTarget.dataset.src;
    //var imgList=e.currentTarget.dataset.list;
    var imgList = [
      'https://i.loli.net/2021/02/28/rSQZLO5vFxmJgdX.jpg',
      'https://i.loli.net/2021/02/28/m2forzHqZui7FcB.jpg',
      'https://i.loli.net/2021/02/28/eUX17xhaftQbJon.jpg',
      'https://i.loli.net/2021/02/28/ubZ3rgmETMGIHYs.jpg',
      'https://i.loli.net/2021/02/28/swup6r395xdbiR1.png'];
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