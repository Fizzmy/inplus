const app = getApp()
import {Request}  from '../../utils/api.js';
var request=new Request;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infotmation: [
    ],
    ifadmin:0,
    openid:''
  },
  detail: function(e){
    var src=e.currentTarget.dataset.src;
    var imgList=e.currentTarget.dataset.list;
    let len=imgList.length;
    for (let i=0;i<len;i++)
        imgList[i]="https://picture.fizzmy.club/picture/"+imgList[i];
    //console.log(src,imgList);
    wx.previewImage({
      current:src,
      urls:imgList
    })
  },
  pass: function(event)
  {
      console.log(event);
    var that=this;
    //console.log(event);
    var data={
      data:{
        id:event.currentTarget.id,
        openid:app.globalData.msg.openid,
        pass:1
      }
    };
    request.getRequest("Passform",data,"POST")
    .then(res=>{
      console.log(res.data);
      if (res.data==1)
      {
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 200
        }),
        setTimeout(function () {
          wx.navigateBack({
          })
         }, 100) 
      }
    })
    .catch(res=>{
      console.log(res);
    })
  },
  unpass: function(event)
  {
    var that=this;
    //console.log(event);
    var data={
      data:{
        id:event.currentTarget.id,
        openid:app.globalData.msg.openid,
        pass:0
      }
    };
    request.getRequest("Passform",data,"POST")
    .then(res=>{
      console.log(res.data);
      if (res.data==1)
      {
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 200
        }),
        setTimeout(function () {
          wx.navigateBack({
            
          })
         }, 100) 
      }
    })
    .catch(res=>{
      console.log(res);
    })
  },
  
  delForm: function(event){
    wx.showModal({
      title: '警告',
      content: '你确定要删除么',
      success (res) {
        if (res.confirm) {
          //确定绑定的操作
              var that=this;
              console.log(event);
              var data={
                data:{
                  id:event.currentTarget.id,
                  openid:app.globalData.msg.openid
                }
              };
              request.getRequest("Delform",data,"POST")
              .then(res=>{
                console.log(res.data);
                if (res.data==1)
                {
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 200
                  }),
                  setTimeout(function () {
                    wx.switchTab({
                      url:'../mainPage/mainPage'
                    }) 
                  }, 200) 
                }
                else{
                  wx.showToast({
                    title: '删除失败',
                    icon: '',
                    duration: 200
                  })
                }
              })
              .catch(res=>{
                console.log(res);
              })
        } else if (res.cancel) {
          //取消绑定的操作
          return 0;
        }
      }
    })

  },

  onLoad: function (options) {
    var that=this;
    this.setData({
      ifadmin:app.globalData.msg.admin,
      openid:app.globalData.msg.openid
    })
    //console.log(options);
    var submitData = {
      data:{
        id:options.id
      }
    }
    request.getRequest('Getone',submitData,'POST')
      .then(res=>{
        console.log(res);
        that.setData({
          information:res.data
        })
        //console.log(res.data.openid);
        //console.log(that.data.ifadmin);
        if (res.data.openid==app.globalData.userInfo.openid)
          that.setData({
            ifadmin:1
          })
      })
      .catch(res=>{
        console.log(res);
      })
  }
})