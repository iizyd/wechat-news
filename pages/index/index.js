//import { compileFunction } from "vm";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_info: [{
        name: "1",
        imagePath: "http://www.gov.cn/premier/2019-04/11/5381527/images/0bd31e4416af4dbaa2fae427f9661f9f.jpg"
      },
      {
        name: "2",
        imagePath: "http://www.gov.cn/premier/2019-04/11/5381526/images/bd66ca6871d64ecda57b98a4906ff3f9.jpg"
      },
      {
        name: "3",
        imagePath: "http://www.gov.cn/premier/2019-04/11/5381524/images/010c13897ca9467ab248bf22cd60b1b8.jpg"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 使用API: wx.createAudioContext 获取 此音频组件的 上下文对象
    this.audioCtx = wx.createAudioContext('myAudio')

    var that = this //不要漏了这句，很重要
    wx.request({
      url: 'https://www.xsdsszz.com/audio/allContent',
      // https://graphql.shenjian.io/?user_key=db2f156afe-ZTkwYmJjMT&timestamp=1555142569605&sign=bde98b8b000bc4926aa2d3043f532d1b&source_id=4812248&query=source(limit:20,article_img:{ne:""}){}
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          zhihu: res.data,
          idtag: 0
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
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

  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  play: function (event) {
    var that = this
    var id = event.currentTarget.id
    that.setData({
        idtag: id
      },

      function () {
        that.audioPlay();
      })


  }
})