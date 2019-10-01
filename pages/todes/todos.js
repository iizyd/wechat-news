
Page({
  data: {
    page: 1, //todo
    isLoading: false, //todo
    all: [], //todo
   
    
    list_info: [
      {
        name: "1",
        imagePath: "http://www.gov.cn/xinwen/2019-03/22/5375995/images/16eabbeb5e5144059aab93960393d14e.jpg"
      },
      {
        name: "2",
        imagePath: "http://www.gov.cn/xinwen/2019-03/13/5373503/images/2adacad07ede45e8928274febbbdb004.jpg"
      },
      {
        name: "3",
        imagePath: "http://www.gov.cn/xinwen/2019-03/22/5375995/images/16eabbeb5e5144059aab93960393d14e.jpg"
      }
    ]
  },

  onPullDownRefresh: function () {
    var _this = this;
    _this.setData({
      isPullDown: true
    });
    this.onLoad();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  
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
  //     zhengce: this.data.zhengce.concat(this.data.all.slice(start, start + 10))
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
    wx.request({
      url: 'https://www.xsdsszz.com/image/getNews',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          zhengce: res.data.slice(0, 10), //todo
          all: res.data //todo
        })
      }
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })


  
    
 
 