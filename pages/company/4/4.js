const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/mciFXklIMBAzwLV.png","https://i.loli.net/2021/03/08/2FczCoPTEau6jhw.png","https://i.loli.net/2021/03/08/ONYCy98oke3LZvR.png","https://i.loli.net/2021/03/08/FicoOv4mrjhqD5M.png","https://i.loli.net/2021/03/08/mNDU8x3Kw1nAcT5.png",
      "https://i.loli.net/2021/03/08/Dq1JP5XAwp9zrbm.png","https://i.loli.net/2021/03/08/5zRyt7xmBbTcMCf.png","https://i.loli.net/2021/03/08/WBnPkvXOaUsERI9.png","https://i.loli.net/2021/03/08/DWcsKn9CN5IdQU3.png","https://i.loli.net/2021/03/08/McfoALn5CRshmBJ.png",
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