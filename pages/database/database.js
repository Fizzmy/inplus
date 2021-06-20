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
    iconList: [{
      icon: 'C',
      color: 'red',
      badge: 0,
      name: 'C++'
    }, {
      icon: 'java',
      color: 'orange',
      badge: 0,
      name: 'Java'
    }, {
      icon: 'linux',
      color: 'yellow',
      badge: 0,
      name: 'Linux'
    }, {
      icon: 'php',
      color: 'olive',
      badge: 0,
      name: 'PHP'
    }, {
      icon: 'R',
      color: 'cyan',
      badge: 0,
      name: 'R语言'
    }, {
      icon: 'sdn',
      color: 'blue',
      badge: 0,
      name: 'SDN'
    }, {
      icon: 'bigData',
      color: 'purple',
      badge: 0,
      name: '大数据'
    }, {
      icon: 'AI',
      color: 'mauve',
      badge: 0,
      name: '机器学习'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '信息安全'
    }],
    iconList2: [{
      icon: 'ali',
      color: 'orange',
      badge: 0,
      name: '阿里巴巴'
    }, {
      icon: 'baidu',
      color: 'blue',
      badge: 0,
      name: '百度'
    }, {
      icon: 'apollo',
      color: 'purple',
      badge: 0,
      name: 'apollo'
    }, {
      icon: 'cambricon',
      color: 'olive',
      badge: 0,
      name: '寒武纪'
    }, {
      icon: 'jingdong',
      color: 'red',
      badge: 0,
      name: '京东'
    }, {
      icon: 'xunfei',
      color: 'cyan',
      badge: 0,
      name: '科大讯飞'
    }, {
      icon: 'meituan',
      color: 'yellow',
      badge: 0,
      name: '美团'
    }, {
      icon: 'tengxun',
      color: 'blue',
      badge: 0,
      name: '腾讯'
    }, {
      icon: 'xiaomi',
      color: 'orange',
      badge: 0,
      name: '小米'
    }, {
      icon: 'zijie',
      color: 'cyan',
      badge: 0,
      name: '字节跳动'
    }],
    gridCol:4,
    show:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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