

const requestInfo = function (api, method, options) {
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
};

module.exports = {
  requestInfo: requestInfo,
};