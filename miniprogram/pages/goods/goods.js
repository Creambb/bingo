// pages/class/class.js
let proListToTop = [];

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerHeight: 0,
    searchHeight: 0,
    leftText2: [
      {
        id: "01",
        icon: "../../images/goods/activity.svg",
        catName: "活动",
      },
      {
        id: "02",
        icon: "../../images/goods/new.svg",
        catName: "新品",
      },
      {
        id: "03",
        icon: "../../images/goods/recommend.svg",
        catName: "推荐",
      },
      {
        id: "04",
        catName: "晨光系列",
      },
      {
        id: "05",
        catName: "文具专区",
      },
      {
        id: "06",
        catName: "精品专区",
      },
    ],
    leftText: [],
    topData: [
      {
        id: "99999",
        icon: "../../images/goods/activity.svg",
        catName: "活动",
      },
      {
        id: "99998",
        icon: "../../images/goods/new.svg",
        catName: "新品",
      },
      {
        id: "99997",
        icon: "../../images/goods/recommend.svg",
        catName: "推荐",
      },],
    dataList2: [
      {
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
    dataList: [],
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
    categoryList: [],
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
    navScrollLeft: 0,

    currentActiveIndex: 0,
    isClickMenu: false, // 是否点击菜单
    proListToTop: [],  // 记录每一个类型的列表道顶部的距离
  },

  async listTopGoods() {
    wx.showLoading({
      title: '加载中',
    })
    const options = {
      cmd: 'ListTopGoods'
    }
    const res = await this.requestInfo('/api/wechat/goods', 'POST', options)
    this.resolveTopGoods(res);
  },

  resolveTopGoods: function (result) {
    if (result.code === 0) {
      var data = result.body;
      console.log(data);
      var leftText = this.data.leftText.concat(this.data.topData);
      var topData = this.data.topData;
      var dataList = this.data.dataList;
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
      dataList = dataList.concat(topData);
      this.setData({
        leftText: leftText,
        dataList: dataList,
      })
    }
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
    const res = await this.requestInfo('/api/wechat/goods', 'POST', options);
    var data = res.body;
    console.log(data);
    var dataList = this.data.dataList;
    // var categoryList = this.data.categoryList;
    data.forEach((item) => {
      if (item.isShow && item.goodsList.length != 0) {
        dataList.push(item);
      }
    })
    this.setData({
      dataList: dataList
    })
    wx.hideLoading();
    this.getEleHeight();
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
    this.data.dataList.forEach((item) => {
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
    var index = e.currentTarget.dataset.index;
    var typeidx = e.currentTarget.dataset.typeidx;
    // console.log(e.currentTarget.dataset);
    // console.log(e.currentTarget.dataset.attribute);
    var selectItem = this.data.selectItem;
    var goodsStock, obj = {};
    selectItem.details[index].checkIndex = typeidx;
    selectItem.details.forEach((item) => {
      console.log(item);
      obj[item.name] = item.typeList[item.checkIndex];

    })
    console.log('obj');
    console.log(obj);
    this.data.typeStockList.forEach((item) => {
      console.log(JSON.stringify(item.goodsSpecs) == JSON.stringify(obj));
      if (JSON.stringify(item.goodsSpecs) == JSON.stringify(obj)) {
        goodsStock = item.goodsStock;
      }
    })
    this.setData({
      selectItem: selectItem,
      goodsStock: goodsStock
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
    // console.log('showDetails');
    // console.log(e.currentTarget.dataset.selectitem);
    var selectItem = e.currentTarget.dataset.selectitem;
    var details = [];
    // console.log(selectItem.attributeList);
    for (let key in selectItem.attributeList) {
      var obj = {
        name: key,
        typeList: selectItem.attributeList[key],
        // checkIndex: 0
      }
      details.push(obj);
    }
    selectItem.details = details;
    console.log(selectItem);
    this.setData({
      isAlertShowAnimation: true,
      currentType: 0,
      selectItem: selectItem
    });
    this.listTypesStock();
  },

  async listTypesStock() {
    console.log(this.data);
    var goodsStock = 0, obj = {}, requestData = {};
    var selectItem = this.data.selectItem;
    selectItem.details.forEach((item) => {
      console.log(item);
      obj[item.name] = item.typeList[item.checkIndex];
    })
    requestData.goodsId = selectItem.goodsId;
    requestData.type = JSON.stringify(obj);
    console.log(requestData);
    const options = {
      cmd: 'ListTypesStock',
      data: requestData
    }
    const res = await this.requestInfo('/api/wechat/goods', 'POST', options);
    var data = res.body;
    console.log('res');
    console.log(res);
    data.forEach((item) => {
      goodsStock += item.goodsStock;
    })
    console.log('goodsStock');
    console.log(goodsStock);
    this.setData({
      typeStockList: data,
      goodsStock: goodsStock,
      isShowAlert: true,
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
    return new Promise(function (resolve, reject) {
      wx.request({
        url: _url,
        method: method,
        data: options,
        header: {
          'Content-Type': 'application/json'
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

  getEleHeight() {
    var headerHeight, searchHeight, proListToTop = [];

    // 头部所占据的高度，在后续滑动时需要减掉该高度
    wx.createSelectorQuery().select("#header").boundingClientRect(res => {
      headerHeight = res.height;
      // 回调函数为异步，所以只能在方法里面更新数据
      this.setData({
        headerHeight: headerHeight,
      })
    }).exec()

    // 搜索框所占据的高度，在后续滑动时需要减掉该高度
    wx.createSelectorQuery().select("#searchBox").boundingClientRect(res => {
      searchHeight = res.height
      this.setData({
        searchHeight: searchHeight,
      })
    }).exec()

    // 记录每一个类型的列表道顶部的距离
    wx.createSelectorQuery().selectAll('.itemTitle').boundingClientRect((rects) => {
      rects.forEach((rect) => {
        proListToTop.push(rect.top.toFixed(2) - this.data.headerHeight - this.data.searchHeight);
      })
      this.setData({
        proListToTop: proListToTop,
      })
    }).exec()

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listTopGoods();
    this.getEleHeight();
    // this.listCategory();

    // this.setData({
    //   currentActiveIndex: this.data.leftText[0].id
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //滚动触发
  scroll: function (e) {
    // 若滑动是点击菜单触发的，则不进行判断；
    if (!this.data.isClickMenu) {
      // 获取滚动的高度
      var scrollTop = e.detail.scrollTop;
      var proListToTop = this.data.proListToTop;
      var currentActiveIndex;
      for (let i = 0; i < proListToTop.length; i++) {
        if (e.detail.scrollTop < proListToTop[i] && i !== 0 && e.detail.scrollTop > proListToTop[i - 1]) {
          this.setData({
            currentActiveIndex: i - 1,
          })
        }
      }
    }
    // 将点击菜单状态还原为false
    this.setData({
      isClickMenu: false,
    })
  },

  //点击左边事件
  changeLeftMenu: function (e) {
    // 当前点击的导航对应的右列表id
    var rigId = e.currentTarget.dataset.id;
    // 当前导航索引
    var index = e.currentTarget.dataset.index;
    // 点击当前导航索引，不作处理
    if (this.data.currentActiveIndex === index) {
      return;
    }
    this.setData({
      rigId: rigId,
      // 设置选中id
      currentActiveIndex: index,
      // 是否点击
      isClickMenu: true
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