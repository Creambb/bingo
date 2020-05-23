// pages/charts/charts.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowConfirm: false,
    isShowSelectAll: false,
    chartsList: [
      {
        id: 1,
        url: "../../images/goods/pencil01.jpg",
        text: "晨光优品中性笔",
        typeList: ['粉红色', '淡蓝色', '淡黄色'],
        type: '粉红色',
        money: 3,
        sum: 20,
        number: 1,
        isChecked: false,
      },
      // {
      //   id: 2,
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
    count: 0
  },

  Checkout: function () {
    var chartsList = this.data.chartsList.filter(function (item) {
      return item.isChecked;
    })
    console.log(chartsList);
    if(this.data.count > 0){
      wx.navigateTo({
        url: '/pages/order/order?list=' + JSON.stringify(chartsList),
      })
    }
  },

  cancleSelectAll: function () {
    console.log('cancleSelectAll');
    this.onChangeSelectAll(false);
    this.setData({
      count: 0
    })
  },

  selectAll: function () {
    console.log('selectAll');
    this.onChangeSelectAll(true);
    this.computeCount();
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

  computeCount() {
    var count = 0;
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      if (item.isChecked) {
        count += item.money * item.number
      }
    })
    this.setData({
      count: count
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
    this.computeCount();
  },

  decreaseNum: function (e) {
    var selectItem = e.currentTarget.dataset.selectitem;
    var chartsList = this.data.chartsList.filter((item, index) => {
      console.log(item);
      console.log(index);
      if (item.id === selectItem.id) {
        item.number--;
        if (item.number === 0) {
          return false;
        }
      }
      return true;
    })
    this.setData({
      chartsList: chartsList
    })
    this.computeCount();
  },

  addNum: function (e) {
    var selectItem = e.currentTarget.dataset.selectitem;
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      console.log(item);
      if (item.id === selectItem.id) {
        item.number++;
      }
    })
    this.setData({
      chartsList: chartsList
    })
    this.computeCount();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var chartsList = app.globalData.chartsList;
    this.setData({
      chartsList: chartsList
    })
    console.log(chartsList)
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
    wx.hideTabBar({
      animation: true
    });
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