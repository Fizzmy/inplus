//index.js
const app = getApp()
import {Request}  from '../../utils/api.js';
var request=new Request;
Page({
  data: {
    list: [],
    totalpage:0
  },
  getList: function () {
    let that = this;
    var form={
      data:{
        openid:app.globalData.msg.openid,
        page:this.data.totalpage
      }
    }
    request.getRequest('Getmylist',form,'POST')
      .then(res=>{
        console.log(res);
        that.setData({
          list:that.data.list.concat(res.data),
          totalpage:that.data.totalpage+1
        })
        wx.showToast({
          title: '加载成功',
          icon: '',
          duration: 200
        })
      })
      .catch(res=>{
        console.log(res);
      })
  },
  onLoad: function (options) {
    //console.log(1);
    this.getList();
  },
  onPullDownRefresh:function() {
    
    wx.showNavigationBarLoading(),//在标题栏中显示加载
    this.setData({
          list:[],
          totalpage:0
        })
    this.getList();
    //console.log("freshfinish"),
    wx.stopPullDownRefresh(),
    wx.hideNavigationBarLoading()
  },
  onReachBottom:function(){
    console.log("底部");
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000
    })
    this.getList();
  }

})