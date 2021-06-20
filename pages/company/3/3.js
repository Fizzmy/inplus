const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/Venmypcx8io7Yud.png",
      "https://i.loli.net/2021/03/08/WA72oMBR5NzHwOI.png",
      "https://i.loli.net/2021/03/08/evrXOHCaGsqjz8t.png",
      "https://i.loli.net/2021/03/08/kTvJpoLjgOXUlRc.png",
      "https://i.loli.net/2021/03/08/FgXhlC9VxfLtiBK.png",
      "https://i.loli.net/2021/03/08/Po81SF5kDuWmGHJ.png",
      "https://i.loli.net/2021/03/08/dPTrNxHAt49lcCw.png",
      "https://i.loli.net/2021/03/08/feKkmvOc59xPInJ.png",
      "https://i.loli.net/2021/03/08/jX1rlLCQ92onhDP.png",
      "https://i.loli.net/2021/03/08/PW4zr3BnZFMSIfm.png"
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