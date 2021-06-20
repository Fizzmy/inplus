const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/cxPH32Xrg6wRUsb.jpg","https://i.loli.net/2021/03/08/TmHlQZLwEbVA1f2.png","https://i.loli.net/2021/03/08/coI8ahTX4LVpb9v.png","https://i.loli.net/2021/03/08/aLmQIJf1C9oebHu.png","https://i.loli.net/2021/03/08/Noc49GT2S5l1vWA.png","https://i.loli.net/2021/03/08/D5XBJnwA349Pd8g.png","https://i.loli.net/2021/03/08/bBNep4u2CDj5x8l.png","https://i.loli.net/2021/03/08/1eph4GJNHFV7TUY.png","https://i.loli.net/2021/03/08/wo7Ljl2OGdQR4rt.png","https://i.loli.net/2021/03/08/4aZX2yIBSwP3GhM.png","https://i.loli.net/2021/03/08/9vu2E1VHewmQpa6.png"
    ]
  },
  detail: function(e){
    var src=e.currentTarget.dataset.src;
    var imgList=e.currentTarget.dataset.list;
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