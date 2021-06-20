const app = getApp()
import {Request}  from '../../utils/api.js';
var request=new Request;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    nwPic:'',
    hasUserInfo:0,
    allPic:{"spring":"/images/spring.jpg",
    "summer":"/images/summer.jpg",
    "autumn":"/images/autumn.jpg",
    "winter":"/images/winter.jpg"
    },
    ifadmin:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ifadmin:app.globalData.msg.admin
    })
    if (app.globalData.userInfo.avatarUrl) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    //console.log(this.data.userInfo)
    var myDate=new Date();
    let that=this;
    let nwMonth=myDate.getMonth();
    //nwMonth=11;
    if (nwMonth>=3&&nwMonth<=5) this.setData({nwPic:that.data.allPic["spring"]})
    else if (nwMonth>=6&&nwMonth<=8) this.setData({nwPic:that.data.allPic["summer"]})
    else if (nwMonth>=9&&nwMonth<=11) this.setData({nwPic:that.data.allPic["autumn"]})
    else this.setData({nwPic:that.data.allPic["winter"]})
  },
  getUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    //console.log(e)
    app.globalData.userInfo=e.detail.userInfo;
    //console.log("mine",e.detail.userInfo)
    let data={
      data:{
        openid:app.globalData.msg.openid,
        nickName:e.detail.userInfo.nickName,
        avatarUrl:e.detail.userInfo.avatarUrl
      }
    }
    request.getRequest('Addopenid',data,'POST')
    .then(res=>{
      if (res.data==1)
        console.log("resigter sucessed")
      else 
        wx.showToast({
          title: '操作失败',
          icon: 'none',
          duration: 2000
        })
    })
    .catch(res=>{
      console.log(res);
    })
  },
})