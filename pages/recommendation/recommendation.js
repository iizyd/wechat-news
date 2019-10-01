//index.js
//获取应用实例
var request = require('../../utils/request.js');
var app = getApp();
Page({
  data: {
    list: [],
    url: "/pages/details/details?",
    page: 1, //todo
    isLoading: false, //todo
    all: [], //todo
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    isTabSelector: false,
    channelId: null,
    page: 1,
    isPullDown: false,
    
   
  },
  //列表
  tourl: function (e) {
    // object转换get字符串
    var index = e.target.dataset.index;
    var temp = this.data.newsData[index];
    app.array = temp;
    
    wx.navigateTo({ url: "/pages/details/details" });

  },
  //滚动条
  tourls: function (e) {
    // object转换get字符串
    var index = e.target.dataset.index;
    var temp = this.data.scrollData[index];
    app.array = temp;
    console.log("bb", app.array);
    wx.navigateTo({ url: "/pages/details/details" });

  },
  

  
  
  onReady: function () {
    // 页面渲染完成
    console.log(2)
  },
  onShow: function () {
    console.log(3)
  },
  onHide: function () {
    console.log(4)
    // 页面隐藏
  },
  onUnload: function () {
    console.log(5)
    // 页面关闭
  },
  
  //控制最新频道标签是否选择
  ctrlNews: function (e) {
    var index = e.target.dataset.index;
    console.log(this.data.newestData[index].selected)
    this.data.newestData[index].selected = !this.data.newestData[index].selected;
    this.setData({
      newestData: this.data.newestData
    })
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    var _this = this;
    _this.setData({
      isPullDown: true
    });
    this.onLoad();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  // //上拉加载
  // onReachBottom: function () { //todo
  //   if (this.isLoading) return;
  //   this.setData({ isLoading: true })
  //   wx.showToast({
  //     title: "正在加载",
  //     icon: 'loading',
  //     duration: 1000
  //   })
  //   let start = (this.data.page - 1) * 10;

  //   this.setData({
  //     zhihu: this.data.zhihu.concat(this.data.all.slice(start, start + 10))
  //   })
  //   setTimeout(() => {
  //     this.setData({
  //       page: this.data.page + 1
  //     })
  //     this.setData({
  //       isLoading: false
  //     })
  //   })

  // },

  onLoad: function () {
    var that = this//不要漏了这句，很重要
    console.log('===start')
    wx.request({
      url: 'https://www.xsdsszz.com/leader/getNews',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          zhihu: res.data.slice(0, 10), //todo
          all: res.data //todo
        
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })


  },

})
