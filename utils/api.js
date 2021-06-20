class Request{
  constructor() {
    this.baseUrl='https://api.fizzmy.club/inplus/'
  }
  getRequest(url,data,method)
  {
    //console.log(data);
    return new Promise((resolve,reject)=>{
      wx.request({
        url:this.baseUrl+url,
        data:data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        method:method,
        success:(res=>{
          resolve(res);
        }),
        fail:(res=>{
          reject(res);
        })
      })
    })
  }
}
module.exports = {
  Request:Request
}