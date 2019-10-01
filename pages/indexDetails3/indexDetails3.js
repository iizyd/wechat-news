// pages/indexDetails/index'Details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aptime: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onLoad: function (options) {

    console.log('-=========================')
    console.log(options)
    var that = this //不要漏了这句，很重要
    wx.request({
      url: 'https://www.xsdsszz.com/image/getNewsIn', //todo
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        let info = res.data.find(news => news.id == options.id) //todo
        info.aImage = info.aImage.replace(/<img/g, '<img width="370"')
        info.aImage = info.aImage.replace(/<img/g, '<img height=""')
        info.aImage = info.aImage.replace(/<img/g, '<img style="margin:auto;"')
        
        console.log(info)
        that.setData({
          aptime: info.aImage,
          aptime2: info.aTitle,
          aptime3: info.aPTime,
          aptime4: info.aSource



          //todo
        })
        that.setData({
          zhihu: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },

})