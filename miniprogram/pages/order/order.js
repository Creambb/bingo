// pages/order/order.js
const WXAPI = require('../../wxapi/index.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersList: [
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 3,
        isChecked: false,
        amount: 12
      },
      {
        id: 2,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 1,
        isChecked: false,
        amount: 20
      },
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 3,
        isChecked: false,
        amount: 12
      },
      {
        id: 2,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 1,
        isChecked: false,
        amount: 20
      },
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 3,
        isChecked: false,
        amount: 12
      },
      {
        id: 2,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 1,
        isChecked: false,
        amount: 20
      },
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 3,
        isChecked: false,
        amount: 12
      },
      {
        id: 2,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 1,
        isChecked: false,
        amount: 20
      },
    ],
    isShowConfirm: false,
    orderMark: '',
    amount: 0
  },

  goPayAmount() {
    this.setData({ isShowConfirm: true });
    this.orderSubmit();
  },

  async orderSubmit() {
    wx.showLoading({
      title: '加载中',
    })

    var obj = {}, list = [];
    this.data.ordersList.forEach(item => {
      console.log(item);
      obj.cartsId = item.id;
      obj.goodsId = item.goodsId;
      obj.goodsNum = item.cartNum;
      obj.goodsName = item.goodsDetail.goodsName;
      obj.goodsImg = item.goodsDetail.goodsImg;
      obj.goodsPrice = item.goodsDetail.shopPrice;
      obj.goodsSpecId = item.specsDetail.specsId;
      obj.goodsSpecs = item.specsDetail.goodsSpecs;
      list.push(obj);
    });
    var body = {
      userId: 1,
      realTotalAmount: this.data.amount,
      orderMark: this.data.orderMark,
      goodsList: list
    };
    console.log('body');
    console.log(body);
    const options = {
      cmd: 'SubmitOrder',
      body: body
    }
    const res = await WXAPI.requestInfo('/api/wechat/orders', 'POST', options);
    console.log(res);

  },


  payConfirm() {
    wx.showLoading({
      title: '加载中',
    })
    const options = {
      cmd: 'PayOrder',
      body: {
        // orderId: 
      }
    }
    const res = await WXAPI.requestInfo('/api/wechat/orders', 'POST', options)
  },

  payCancle() {

  },

  computeAmount() {
    var amount = 0;
    var ordersList = this.data.ordersList;
    ordersList.forEach((item) => {
      console.log(item);
      if (item.isChecked) {
        amount += Number(item.goodsDetail.shopPrice) * item.cartNum;
        console.log(amount);
      }
    })
    this.setData({
      amount: amount
    })
  },

  computeItemCount: function () {
    var ordersList = this.data.ordersList;
    ordersList.forEach((item) => {
      item.amount = item.money * item.number
    })
    this.setData({
      ordersList: ordersList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.list) {
      var orders = JSON.parse(options.list);
      console.log(orders);
      this.setData({
        ordersList: orders
      })
    }
    console.log('ordersList');
    console.log(this.data.ordersList);
    this.computeItemCount();
    this.computeAmount();
  },


  requestInfo(api, method, options) {
    var _url = 'http://172.19.13.240:3001' + api
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

  }
})