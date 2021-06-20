const app = getApp()
Page({
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/bXEKIBauSYfocCZ.jpg","https://i.loli.net/2021/03/08/XUgNu5KxGCcMHre.png","https://i.loli.net/2021/03/08/p2g3D5cWFM7iRto.jpg","https://i.loli.net/2021/03/08/ztEDgINePGlkv1j.jpg","https://i.loli.net/2021/03/08/HPomRgUWx2E4BOM.jpg","https://i.loli.net/2021/03/08/5RjLxHiJIgvhwlK.jpg"
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
})