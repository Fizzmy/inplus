var util = require('../../utils/util.js');
var app = getApp();
import {Request}  from '../../utils/api.js';
var request=new Request;
var buttonClicked=0;
//let request=new api.Request;
Page({
  data: {
    //name:'',
    //tag:'',
    files: [],
    address:[],
    content:'',
    passageList:[
      {
        name:"经验分享",
        color:"red"
      },
      {
        name:"求职信息",
        color:"blue"
      }
    ],
    msg:[1,0],
    title:''
  },
  modify(e){
    //console.log(e)
    let id=e.currentTarget.dataset.nwid
    if (this.data.msg[id]==0)
      this.setData({
        ['msg['+id+']']:1,
        ['msg['+(id^1)+']']:0
      })
  },
  titleinput(e){
    this.setData({
      title:e.detail.value
    })
  },
  nameinput(e){
    this.setData({
      name:e.detail.value
    })
  },
  contentinput(e){
    this.setData({
      content:e.detail.value
    })
  },
  chooseImage: function (e) {
    var that = this;
    console.log(this.data.files);
    if (this.data.files.length==9) {util.isError('最多选择9张图片');return;}
    wx.chooseImage({
        count: 9-this.data.files.length,
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.setData({
                files: that.data.files.concat(res.tempFilePaths)
            });
        }
    })
  },
  previewImage: function(e){
      wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
      })
  },
  deleteImage: function (e) {
    var that = this;
    var images = that.data.files;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
     title: '提示',
     content: '确定要删除此图片吗？',
     success: function (res) {
      if (res.confirm) {
       images.splice(index, 1);
      } else if (res.cancel) {
        return false;    
       }
      that.setData({
       files:images
      });
      console.log(that.data.files);
     }
    })
   },

  upLoadForm:function()
  {
    var that=this;
    var formData={
      data:{
        //name:this.data.name,
        verify:0,
        title:this.data.title,
        content:this.data.content,
        openid:app.globalData.msg.openid,
        address:this.data.address,
        type:(this.data.msg[0]==1?0:1),
      }
    }
    console.log(formData);
    request.getRequest('Getform',formData,'POST')
      .then(res=>{
        console.log(res);
        buttonClicked=0;
        if (res.data==1)
        {
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
          }),

          that.setData({
            //name:'',
            title:'',
            files: [],
            address:[],
            content:''
          })  
          setTimeout(function () {
            wx.switchTab({
              url:'../mainPage/mainPage'
            }) 
           }, 100) 
          
        }
        else{
          buttonClicked=0;
          wx.showToast({
            title: '上传失败',
            icon: 'none',
            duration: 2000
          });
          console.log(res.data);
        }
      })
      .catch(res=>{
        console.log(res);
      })
  },
  upLoadImage:function(i)
  {
    var that=this;
    if (that.data.files.length==0) {that.upLoadForm();return;}
    wx.uploadFile({
      url: 'https://api.fizzmy.club/inplus/picture/uploadimg',
      filePath: that.data.files[i],
      name: 'file',
      success:function(res){
        console.log(res), 
        that.setData({
          address: that.data.address.concat(res.data)
        })
      },
      fail:function(res){
        console.log("uploadfail=>",res)
        util.isError('上传失败，请重试');
        buttonClicked=0;
        return false;
      },
      complete:function(){
        if (i==that.data.files.length-1) that.upLoadForm();
        else that.upLoadImage(i+1);
      }
    }) 
  },
  formSubmit: function (e) {
    //console.log(app.globalData.userInfo)
    if (Object.keys(app.globalData.userInfo).length === 0)
    {
      wx.showToast({
        title: '请先给予权限',
        icon: 'none',
        duration: 2000
      }),
      setTimeout(function () {
        wx.switchTab({
          url:'../mine/mine'
        }) 
        }, 100)
      return;
    }
    var data = e.detail.value;
    var that = this;
    if (buttonClicked==1) 
    {
      util.isError('请勿重复点击');
      return;
    }
    if (data.title == '') {
      util.isError('请填写标题', that);
      return false;
    }

    if (data.content == '') {
      util.isError('请填写正文', that);
      return false;
    }
    

    buttonClicked=1;
    wx.showToast({
      title: '提交中',
      icon: 'loading',
      duration: 3000
    });

    this.setData({
      title:data.title,
      //tag:data.tag,
      content:data.content,
      address:[]
    })
    this.upLoadImage(0);

  },
  onLoad: function (options) {
    this.setData({
      name:app.globalData.userInfo.nickName
    })
  },
  onShow: function (options) {
    //console.log(this.data);
  }
})