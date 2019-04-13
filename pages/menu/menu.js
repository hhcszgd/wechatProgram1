// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotomap:function(){
    wx.navigateTo({
      url: '../test4/test4',
    })
  },
  gotoworkpage:function(){
    wx.navigateTo({
      url: '../workpage/workpage',
    })
  }
  ,
  requestdata:function(){
    var tttt = this;
    var paras = { token:"nWh5dWP5dfQuIvz2DPD4GdfnGTsF7YAc"};
    wx.request({
      url: 'https://tpi.bjyltf.com/v1/index',
      data: paras,
      header: { 'content-type': 'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("成功");
        console.log(res.data.data.banner);
        var s = "";
        for(var i in  res.data.data.banner){
          s += res.data.data.banner[i].image_url;
          s += "\n\n";
          // tttt.setData({ contentOfServer: res.data.data.banner[i].image_url });
        }
        tttt.setData({ contentOfServer: s});
      },
      fail: function(res) {
        console.log("失败");
        console.log(res);
      },
      complete: function(res) {
        console.log("完成");
        console.log(res);
      },
    })
  }
})