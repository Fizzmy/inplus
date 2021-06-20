//index.js
const app = getApp()
import {Request}  from '../../utils/api.js';
var request=new Request;
Page({
  data: {
    list: [],
    index:0,
    searchmsg:'',
    types: [{ name: '1', value: '待审核', checked: true }, { name: '2', value: '未过申' }],
    list2:[],
    TabCur:0,
    passpage:0,
    unpasspage:0,
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      //scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      //tabcur:e.currentTarget.dataset.id+1
    })
    //console.log(this.data.tabcur)
  },
  getList: function (e) {
    let that = this;
    var form={
      data:{
        type:e,
        passpage:this.data.passpage,
        unpasspage:this.data.unpasspage
      }
    }
    console.log(form);
    request.getRequest('Getchecklist',form,'POST')
      .then(res=>{
        console.log(res);
        if (e==0)
        {
          that.setData({
            list:that.data.list.concat(res.data),
            passpage:that.data.passpage+1
          })
        }
        else{
          that.setData({
          list2:that.data.list2.concat(res.data),
          unpasspage:that.data.unpasspage+1
        })
        }
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
    this.getList(0);
    this.getList(1);
  },
  onPullDownRefresh:function() {
    wx.showNavigationBarLoading();//在标题栏中显示加载
    if (this.data.TabCur==0)
    {
      this.setData({
           list:[],
           passpage:0
          })
    }
    else{
      this.setData({
           list2:[],
           unpasspage:0
          })

    }
    this.getList(this.data.TabCur);
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
    this.getList(this.data.TabCur);
  }
})


