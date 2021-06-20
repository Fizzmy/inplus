const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/vCYH9V5cX76qyIL.png","https://i.loli.net/2021/03/08/vWkR3PE1HJBtThc.png","https://i.loli.net/2021/03/08/CSOEgalQVIci8Lj.png","https://i.loli.net/2021/03/08/Bmz5T9FZxqiSg4h.png","https://i.loli.net/2021/03/08/NSdKm5EVqOvGA3u.png","https://i.loli.net/2021/03/08/CughJjvyMYsUf4Z.png","https://i.loli.net/2021/03/08/zwmHboBM8OaeTqp.png","https://i.loli.net/2021/03/08/BjvZ6sPDhA4cdxa.png"
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