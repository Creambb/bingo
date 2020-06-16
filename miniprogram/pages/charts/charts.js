// pages/charts/charts.js
const WXAPI = require('../../wxapi/index.js');

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowConfirm: false,
    isShowSelectAll: false,
    chartsList: [
      // {
      //   id: 1,
      //   url: "../../images/goods/pencil01.jpg",
      //   text: "晨光优品中性笔",
      //   typeList: ['粉红色', '淡蓝色', '淡黄色'],
      //   type: '粉红色',
      //   money: 3,
      //   sum: 20,
      //   number: 1,
      //   isChecked: false,
      // },
    ],
    deleteOperate: null,
    amount: 0
  },

  async ListChartGoods() {
    wx.showLoading({
      title: '加载中',
    })
    var obj = {
      userId: 1
    }
    var options = {
      cmd: 'ListChartGoods',
      body: obj
    }
    var chartsList = [];
    const res = await WXAPI.requestInfo('/api/wechat/charts', 'POST', options);
    var data = res.body;
    // data.forEach((item) => {
    //   if (item.specsDetail) {
    //     for (var key in item.specsDetail) {

    //      }
    //   }
    // })
    console.log(data);
    this.setData({
      chartsList: data
    })
    wx.hideLoading();
    // this.onChangeChecked();
  },

  checkout: function () {
    var chartsList = this.data.chartsList.filter(function (item) {
      return item.isChecked;
    })
    console.log(chartsList);
    if (this.data.amount > 0) {
      wx.navigateTo({
        url: '/pages/order/order?list=' + JSON.stringify(chartsList),
      })
    }
  },

  cancleSelectAll: function () {
    console.log('cancleSelectAll');
    this.onChangeSelectAll(false);
    this.setData({
      amount: 0
    })
  },

  selectAll: function () {
    console.log('selectAll');
    this.onChangeSelectAll(true);
    this.computeAmount();
  },

  onChangeSelectAll: function (bool) {
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      item.isChecked = bool
    })
    this.setData({
      chartsList: chartsList,
      isShowSelectAll: bool,
    })
  },

  computeAmount() {
    var amount = 0;
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
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

  deleteCharts: function () {
    this.setData({
      isShowConfirm: true
    })
    this.data.deleteOperate = this.clearCharts;
  },

  cancleConfirm: function () {
    this.setData({
      isShowConfirm: false
    })
  },

  clearConfirm: function () {
    this.data.deleteOperate();
  },

  clearCharts: function () {
    this.setData({
      chartsList: [],
      isShowConfirm: false
    })
  },

  navigateToGoods: function () {
    wx.navigateTo({ url: "/pages/goods/goods" })
    // wx.switchTab({ url:'/pages/goods/goods' })
  },

  onChangeChecked: function (e) {
    var selectItem = e.currentTarget.dataset.selectitem;
    var chartsList = this.data.chartsList;
    var num = 0;
    var isAll = true;
    chartsList.forEach((item) => {
      if (item.id === selectItem.id) {
        item.isChecked = !item.isChecked;
      }
      if (!item.isChecked) {
        isAll = false;
      }
    })
    this.setData({
      chartsList: chartsList,
      isShowSelectAll: isAll
    })
    this.computeAmount();
  },

  decreaseNum: function (e) {
    var selectItem = e.currentTarget.dataset.selectitem;
    var chartsList = this.data.chartsList.filter((item, index) => {
      console.log(item);
      console.log(index);
      if (item.id === selectItem.id) {
        item.cartNum--;
        if (item.cartNum === 0) {
          return false;
        }
      }
      return true;
    })
    this.setData({
      chartsList: chartsList
    })
    this.computeAmount();
  },

  addNum: function (e) {
    var selectItem = e.currentTarget.dataset.selectitem;
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      console.log(item);
      if (item.id === selectItem.id) {
        item.cartNum++;
      }
    })
    this.setData({
      chartsList: chartsList
    })
    this.computeAmount();
  },

  async updateCharts() {
    var chartsList = this.data.chartsList;
    var options = {}, obj = { userId: 1 };
    if (chartsList.length === 0) {
      options = {
        cmd: 'ClearCharts',
        body: obj
      }
      console.log('ClearCharts');
      const res = await WXAPI.requestInfo('/api/wechat/charts', 'POST', options);
    } else {
      obj.chartsList = chartsList;
      options = {
        cmd: 'UpdateCharts',
        body: obj
      }
      console.log('UpdateCharts');
      const res = await WXAPI.requestInfo('/api/wechat/charts', 'POST', options);
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
 * 生命周期函数--监听页面加载
 */
  onShow: function (options) {
    // var chartsList = app.globalData.chartsList;
    // this.setData({
    //   chartsList: chartsList
    // })
    console.log('------charts页面onShow了----------');

    this.ListChartGoods();
  },


  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
    this.updateCharts();
    console.log('------charts页面onHide了----------');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('------charts页面onUnload了----------');
  },

})