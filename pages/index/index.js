//index.js
//获取应用实例
const app = getApp()
var t=0;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    test:0,
    array123:["a","b","c","d"]
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh() {
    qq.showNavigationBarLoading();
    var that=this;
    this.setData({
      test:that.data.test+1
    })
    
    qq.hideNavigationBarLoading();
    qq.stopPullDownRefresh()
  },
  inputest:function(e){
    
    this.setData({
      test:e.detail.value
    })
    //console.log(this.data.test)
  },
  formSubmit:function(e){
    console.log(e.detail.value)
  },
  tap1:function(){
    console.log(app.globalData)
    console.log("click");
    qq.showToast({
      title: '成功le2333',
      icon: 'none',
      duration: 500
    })
    var that=this;
    // this.setData({
    //   test:that.data.test+1
    // })
    qq.request({
      url: 'https://api.fizzmy.club/checkin/test', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        data:that.data.test
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
