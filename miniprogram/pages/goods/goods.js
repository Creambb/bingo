// pages/class/class.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftText2: [{
      id: "01",
      icon: "../../images/goods/activity.svg",
      text1: "活动",
    },
    {
      id: "02",
      icon: "../../images/goods/new.svg",
      text1: "新品",
    },
    {
      id: "03",
      icon: "../../images/goods/recommend.svg",
      text1: "推荐",
    },
    {
      id: "04",
      text1: "晨光系列",
    },
    {
      id: "05",
      text1: "文具专区",
    },
    {
      id: "06",
      text1: "精品专区",
    },
    ],
    leftText: [],
    topData: [{
      id: "99999",
      icon: "../../images/goods/activity.svg",
      text1: "活动",
    },
    {
      id: "99998",
      icon: "../../images/goods/new.svg",
      text1: "新品",
    },
    {
      id: "99997",
      icon: "../../images/goods/recommend.svg",
      text1: "推荐",
    },],
    rightData2: [{
      id: "01",
      title: "活动",
      frist: [{
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        money: 3,
        sum: 20,
      },
      {
        id: 2,
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        typeList: ['白色', '橘色'],
        money: 5.2,
        sum: 20,
      },
      {
        id: 3,
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
      },
      {
        id: 4,
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
      },
      {
        id: 5,
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
      },
      ],
    },
    {
      id: "02",
      title: "新品",
      frist: [{
        id: 21,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        money: 3,
        sum: 20,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        money: 5.2,
        sum: 20,
        id: 22,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 23,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 24,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
        id: 25,
      },
      ],
    },
    {
      id: "03",
      title: "推荐",
      frist: [{
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        money: 3,
        sum: 20,
        id: 31,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        money: 5.2,
        sum: 20,
        id: 32,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔(美)",
        money: 12,
        sum: 20,
        id: 33,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 34,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
        id: 35,
      },
      ],
    },
    {
      id: "04",
      title: "晨光系列",
      frist: [{
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        money: 3,
        sum: 20,
        id: 41,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔(美)",
        money: 5.2,
        sum: 20,
        id: 42,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 43,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 44,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
        id: 45,
      },
      ],
    },
    {
      id: "05",
      title: "文具专区",
      frist: [{
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔(美)",
        money: 3,
        sum: 20,
        id: 61,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        money: 5.2,
        sum: 20,
        id: 62,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 63,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 64,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
        id: 65,
      },
      ],
    },
    {
      id: "06",
      title: "精品专区",
      frist: [{
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        money: 3,
        sum: 20,
        id: 1,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        money: 5.2,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
      },
      ],
    },
    {
      id: "06",
      title: "精品专区",
      frist: [{
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        money: 3,
        sum: 20,
        id: 1,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        money: 5.2,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
      },
      ],
    },
    ],
    rightData: [],
    listData: [
      // {
      //   tag: 'hot',
      //   title: "活动",
      //   goodsList: []
      // },
      // {
      //   tag: 'new',
      //   title: "新品",
      //   goodsList: []
      // },
      // {
      //   tag: 'recom',
      //   title: "推荐",
      //   goodsList: []
      // },
    ],
    hotData: {
      tag: 'hot',
      image: "../../images/goods/activity.svg",
      title: "活动",
      goodsList: []
    },
    newData: {
      tag: 'new',
      image: "../../images/goods/new.svg",
      title: "新品",
      goodsList: []
    },
    recomData: {
      tag: 'recom',
      title: "推荐",
      image: "../../images/goods/recommend.svg",
      goodsList: []
    },
    categoryList: [],
    classfiySelect: "",
    isClick: false,
    isShowAlert: false,
    isAlertShowAnimation: true,
    isSearch: false,
    searchWord: '',
    currentType: 0,
    checkedItem: {
      url: "../../images/goods/pencil01.jpg",
      text: "晨光优品中性笔",
      typeList: ['粉红色', '淡蓝色', '淡黄色'],
      money: 3,
      sum: 20,
    },
    selectItem: {},
    chartsList: [],
    navData: [
      {
        image: '../../images/index/home_unchecked.svg',
        activeImage: '../../images/index/home_checked.svg',
        text: 'home'
      },
      {
        image: '../../images/index/goods_unchecked.svg',
        activeImage: '../../images/index/goods_checked.svg',
        text: 'goods'
      },
      {
        image: '../../images/index/charts_unchecked.svg',
        activeImage: '../../images/index/charts_checked.svg',
        text: 'charts'
      },
      {
        image: '../../images/index/mine_unchecked.svg',
        activeImage: '../../images/index/mine_checked.svg',
        text: 'mine'
      },
    ],
    searchList: [
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        money: 3,
        sum: 20,
      },
      {
        url: "../../images/goods/pencil02.jpg",
        text: "得力彩色中性笔",
        typeList: ['白色', '橘色'],
        money: 5.2,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil03.jpg",
        text: "得力糖果中性笔",
        money: 12,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil04.jpg",
        text: "按压式花边修正带",
        money: 6.9,
        sum: 20,
        id: 2,
      },
      {
        url: "../../images/goods/pencil05.jpg",
        text: "得力文具便利贴",
        money: 4,
        sum: 20,
      }
    ],
    hotSearchList: [
      {
        id: 1,
        text: '中性笔'
      },
      {
        id: 3,
        text: '晨光'
      },
      {
        id: 1,
        text: '美'
      },
    ],
    currentTab: 1,
    navScrollLeft: 0
  },

  async listTopGoods() {
    wx.showLoading({
      title: '加载中',
    })
    const options = {
      cmd: 'ListTopGoods'
    }
    const res = await this.requestInfo('/api/goods', 'POST', options)
    this.resolveTopGoods(res);
  },

  resolveTopGoods: function (result) {
    if (result.code === 0) {
      var data = result.body;
      var leftText = this.data.leftText.concat(this.data.topData);
      var topData = this.data.topData;
      var rightData = this.data.rightData;
      this.data.topData.forEach((item) => {
        switch (item.id) {
          case '99999':
            item.goodsList = data.hotList;
            break;
          case '99998':
            item.goodsList = data.newList;
            break;
          case '99997':
            item.goodsList = data.recomList;
            break;
        }
      })
      rightData = rightData.concat(topData);
      this.setData({
        leftText: leftText,
        rightData: rightData,
        classfiySelect: leftText[0].id
      })
    }
    wx.hideLoading();
    this.ListCategory();
  },

  async ListCategory() {
    wx.showLoading({
      title: '加载中',
    })
    const options = {
      cmd: 'ListCategory'
    }
    const res = await this.requestInfo('/api/goods', 'POST', options)
    var data = res.body;
    var leftText = this.data.leftText;
    var categoryList = data.list;
    leftText = leftText.concat(data.list);
    this.setData({
      categoryList: categoryList,
      leftText: leftText
    });
    wx.hideLoading();
    this.ListGoods();
  },

  async ListGoods() {
    wx.showLoading({
      title: '加载中',
    })
    const options = {
      cmd: 'ListGoods'
    }
    const res = await this.requestInfo('/api/goods', 'POST', options);
    // var data = res.body;
    var data = res;
    console.log(data);
    var rightData  = this.data.rightData;
    // var categoryList = this.data.categoryList;
    this.data.categoryList.forEach((item) => {
      item.goodsList = [];
      data.list.forEach((goodItem) => {
        if (goodItem.categoryId == item.id) {
          console.log(goodItem.categoryId);
          console.log(item.id);
          console.log(goodItem.categoryId == item.id);
          item.goodsList.push(goodItem);
        }
      })
      rightData.push(item);
    })
    // rightData = rightData.concat(data.list);
    console.log('rightData');
    console.log(rightData);
    this.setData({
      rightData: rightData
    })

    wx.hideLoading();

  },

  resolveListGoods: function (data) {
    console.log(data);
    var listData = this.data.listData;
    this.data.categoryList.forEach((item) => {
      item.goodsList = [];
      data.list.forEach((goodItem) => {
        if (goodItem.goodsCatId == item.catId) {
          item.goodsList.push(goodItem);
        }
      })
      listData.push(item);
    })
    this.setData({
      listData: listData
    })
    // this.setData({
    //   hotData: hotData,
    //   newData: newData,
    //   recomData: recomData
    // })
  },

  onClickHotWord: function (e) {
    this.setData({
      searchWord: e.currentTarget.dataset.text
    })
    this.getSearchList()
  },

  watchSearchWord: function (e) {
    // console.log(e.detail.value);
    var value = e.detail.value;
    this.setData({
      searchList: [],
      searchWord: value
    })
    console.log(this.data.searchWord);
    if (!value) {
      return;
    }
    this.getSearchList()
  },

  getSearchList: function () {
    var value = this.data.searchWord;
    var searchList = [];
    this.data.rightData.forEach((item) => {
      item.goodsList.forEach((data) => {
        if (data.text.indexOf(value) > -1) {
          console.log(data.text.indexOf(value))
          console.log(data);
          searchList.push(data);
        }
      })
    })
    this.setData({
      searchList: searchList
    })
  },

  searchGoods: function () {
    if (!this.data.isSearch) {
      console.log('searchGoods')
      this.setData({
        isSearch: true,
        searchList: []
      })
    }
  },

  clearSearchWord: function () {
    this.setData({
      searchWord: '',
      searchList: []
    })
  },

  backToGoods: function () {
    this.setData({
      isSearch: false
    })
  },

  selectType: function (e) {
    console.log(e.currentTarget.dataset.id);
    var current = e.currentTarget.dataset.id;
    this.setData({
      currentType: current
    })
  },

  addToCharts: function (e) {
    console.log('addToCharts');
    var isExist = false;
    var num = 0;
    var selectItem = this.data.selectItem;
    var chartsList = this.data.chartsList;
    console.log(this.data.currentType)
    selectItem.type = selectItem.typeList[this.data.currentType];
    this.data.chartsList.forEach((item) => {
      if (item.id === selectItem.id && item.type === selectItem.type) {
        item.number++;
        isExist = true;
      }
      num += item.number;
    })
    if (!isExist) {
      selectItem.number = 1;
      chartsList.push(selectItem);
      num += 1;
    }
    this.setData({
      isShowAlert: false,
      chartsList: chartsList
    })
    console.log(this.data.chartsList);

    wx.setTabBarBadge({//tabbar右上角添加文本
      index: 2, ////tabbar下标
      text: String(num)	//显示的内容
    })
    app.globalData.chartsList = chartsList;
  },

  showDetails: function (e) {
    console.log('showDetails');
    console.log(e.currentTarget.dataset.selectitem)
    this.setData({
      isShowAlert: true,
      isAlertShowAnimation: true,
      currentType: 0,
      selectItem: e.currentTarget.dataset.selectitem
    })
  },

  hideAlert: function () {
    console.log('hideAlert');
    this.setData({
      isAlertShowAnimation: false
    })
    setTimeout(() => {
      this.setData({
        isShowAlert: false,
      })
    }, 400)
    console.log(this.data.isShowAlert)
  },

  requestInfo(api, method, options) {
    var _url = 'http://172.19.13.240:3000' + api
    console.log(_url)
    return new Promise(function (resolve, reject) {
      wx.request({
        url: _url,
        method: method,
        data: options,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function success(request) {
          resolve(request.data);
        },
        fail: function fail(error) {
          reject(error);
        },
        complete: function complete(aaa) {
          // 加载完成
        }
      });
    });
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listTopGoods();
    // this.listCategory();

    // this.setData({
    //   classfiySelect: this.data.leftText[0].id
    // })
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
  //滚动触发
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    console.log('scrollTop');
    console.log(scrollTop);
    that.data.leftText.forEach(function (clssfiy, i) {
      console.log(that.length(clssfiy['id']));
      var _h = 26 + that.length(clssfiy['id']) * 90;
      console.log('h')
      // console.log(_h)
      console.log(h)
      console.log(that.data.isClick)
      if (scrollTop >= h && !that.data.isClick) {
        classfiySelect = clssfiy['id'];
        // that.setData({
        //   isClick: false
        // })
      }
      h += _h;
      // console.log(h);
    })
    that.setData({
      classfiySelect: classfiySelect,
      isClick: false
    })
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['goodsList'].length;
      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    console.log(e.currentTarget.dataset.id);
    console.log(this);
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
      classfiySelect: l_id,
      isClick: true
    })
  },
  //跳转详情界面
  particulars: function (e) {

  },

  switchNav(event) {
    console.log(event)
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  }
})