//index.js
//获取应用实例
var request = require('../../utils/request.js');
var app =getApp();
Page({
  data: {
    list:[],
    page: 1, //todo
    isLoading: false, //todo
    all:[], //todo
    url:"/pages/details/details?",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // indicatorDots: true,
    // autoplay: true,
    // interval: 5000,
    // duration: 1000,
    // isTabSelector: false,
    // channelId:null,
    // page:1,
    // isPullDown:false,
    favorData:[
      {
        channelId:"mainNewsGov",
        name:"热点",
        selected:true,
      },{
        channelId:"mainNewsPP",
        name:"反腐",
        selected:true,
      }
    ],
    newsData:[],
    scrollData:[],
    attrationData:[],
    newestData:[],
    animationData:{}
  },
  //列表
   tourl:function(e){
    // object转换get字符串
    var index=e.target.dataset.index;
    var temp=this.data.newsData[index];
    app.array=temp;
   
    wx.navigateTo({url:"/pages/details/details"});
    
  },
  //滚动条
  tourls:function(e){
    // object转换get字符串
    var index=e.target.dataset.index;
    var temp=this.data.scrollData[index];
    app.array=temp;
    console.log("bb",app.array);
    wx.navigateTo({url:"/pages/details/details"});
    
  },
  

  // 切换数据
  getNewsdes:function(e){
    this.setData({
        page: 1,
        zhihu: []
      })
    console.log

    this.init(e.target.dataset.channelid)
    
  },

  
  onReady:function(){
    // 页面渲染完成
    console.log(2)
  },
  onShow: function(){
    console.log(3)
  },
  onHide:function(){
    console.log(4)
    // 页面隐藏
  },
  onUnload:function(){
    console.log(5)
    // 页面关闭
  },
  
  //控制最新频道标签是否选择
  ctrlNews:function(e){
    var index = e.target.dataset.index;
    console.log(this.data.newestData[index].selected)
    this.data.newestData[index].selected = !this.data.newestData[index].selected;
    this.setData({
      newestData : this.data.newestData
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var _this = this;
    _this.setData({
      isPullDown: true
    });
    this.onLoad();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  //上拉加载
  onReachBottom:function(){ //todo
    if(this.isLoading) return ;
    this.setData({isLoading: true})
    isLoading:false
    wx.showToast({
      title: "正在加载",
      icon: 'loading',
      duration: 1000
    })
  //   let start = (this.data.page - 1) * 10;
 
  //     this.setData({
  //       zhihu: this.data.zhihu.concat(this.data.all.slice(start, start + 10))
  //     })
  //     setTimeout(()=>{
  //       this.setData({
  //         page: this.data.page + 1
  //       })
  //       this.setData({
  //         isLoading : false
  //       }) 
  //     })
    this.onLoad()
    
  },

  onLoad: function () {
    this.init('mainNewsGov')
  },
  init(key){
    var that = this//不要漏了这句，很重要
    wx.request({
      url: `https://www.xsdsszz.com/${key}/getNews`,
      
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)

        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          zhihu: res.data.slice(0, 10), //todo
          all: res.data //todo
        })
      }
    })
  }
  
})
