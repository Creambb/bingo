// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartsList: [
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
    count: 0
  },

  computeCount: function () {
    var count = 0;
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      count += item.money * item.number
    })
    this.setData({
      count: count
    })
  },

  computeItemCount: function () {
    var chartsList = this.data.chartsList;
    chartsList.forEach((item) => {
      item.amount = item.money * item.number
    })
    this.setData({
      chartsList: chartsList
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
        chartsList: orders
      })
    }
    this.computeItemCount();
    this.computeCount();
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