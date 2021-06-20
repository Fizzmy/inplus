const app = getApp()
import {Request}  from '../../utils/api.js';
var request=new Request;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://i.loli.net/2021/02/24/aNTQXcAp2Df4Bu7.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://i.loli.net/2021/02/24/H9boh6ikSAB2rF4.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://i.loli.net/2021/02/24/h4K9IjbnG3UNtz5.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://i.loli.net/2021/02/24/6CrlvNJ8og25iOT.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://i.loli.net/2021/02/24/U5G8i2CbsotfqR3.jpg'
    }],
    list:[],
    totalpage:0,
    show:0
  },
  getList: function () {
    let that = this;
    var data={
      data:{
        page:this.data.totalpage
      }
    }
    request.getRequest('Getlist',data,'POST')
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
    let that=this;
    let data={};
    request.getRequest('Unshow',data,'POST')
    .then(res=>{
      that.setData({
        show:res.data
      })
    })
    .catch(res=>{
      console.log(res);
    })
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
    //console.log("底部");
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000
    })
    this.getList();
  }
})