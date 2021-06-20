const app = getApp()
Page({
  data: {
    dataImg:[
      "https://i.loli.net/2021/03/08/u41RGCE7FUVzs2H.jpg","https://i.loli.net/2021/03/08/JathpkXfWGl4jsE.jpg","https://i.loli.net/2021/03/08/JgihUVlQtNoDrc6.jpg","https://i.loli.net/2021/03/08/leg9bwspi4V6xY7.jpg","https://i.loli.net/2021/03/08/qAxYVNcHhBvf4ig.jpg","https://i.loli.net/2021/03/08/HSkc89jhst61O2p.jpg","https://i.loli.net/2021/03/08/JHbz9E1aNchGQMl.jpg","https://i.loli.net/2021/03/08/CSlVs2Fn1xrZQzG.jpg","https://i.loli.net/2021/03/08/XHQ6Dwa9lBvfcUk.jpg","https://i.loli.net/2021/03/08/QldaB9kr8PIU5nR.jpg","https://i.loli.net/2021/03/08/bo3dvXEeZ7KYx8f.jpg","https://i.loli.net/2021/03/08/sPqCRIVvf47OjBL.jpg","https://i.loli.net/2021/03/08/9RbTCnUmWyXV1f4.jpg"
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