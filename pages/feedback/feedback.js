var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    feedList: [{ id: 302, nickname: "慕木可", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/2jNKZqm7nMEhNRluI…Zsw8IH537qHq5x53eqiarm24ibQgnymSn4EXglFny7haOlw/0", content: "登不进微图书馆，求解！！！", datetime: "2017-11-14" }, { id: 301, nickname: "十一郎", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/RqAIt1x7pOjeGKc6g…8CDacrxosNKWXxjR9C5Smkl0OWUYrahhv2fYNian00aMFoQ/0", content: "什么时候可以充校园卡", datetime: "2017-11-13" }, { id: 300, nickname: "随意", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/xYDPibmNfjGlhFSTJ…5cvyZt5wcnbV4bib3jEnnh0QDsiaHm4lB36BvS1lBWlWBKw/0", content: "我的课表为什么没有英语课？？？？？", datetime: "2017-11-13" }, { id: 299, nickname: "壹柯相思树", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/43QWJdclJBUOOH0sv…RdicazFl2F7IV3icOXLo96iaLL6LBm1AXFNIOQyXg5OK4Eg/0", content: "不能看下周课表的吗", datetime: "2017-11-11" }, { id: 298, nickname: "victory ^_^", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/q71unA3HmXyeww0tc…VzO90YtrfzBvTmR5vNPjs3icIRG8ZDsiaICGHh5HIJys8hg/0", content: "想知道哪些课程要考试，哪些不要", datetime: "2017-11-09" }, { id: 297, nickname: "无锋", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/t7nAicQKpkLNb1Lud…g9YDy6LngOjyGicP7gZia26We1ZBQU6aGZM0d78rDmnKEIA/0", content: "登录校园网账户失败", datetime: "2017-11-08" }, { id: 296, nickname: "未凉天", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epq0Rc0D…tZmvN6zTbs8tcv6wXgLjiczQrzHkVMEibtK3ZVsRJbBJPQQ/0", content: "课表只能发送给微信好友，不能发送到QQ，以前是可以的", datetime: "2017-11-08" }, { id: 295, nickname: "未凉天", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epq0Rc0D…tZmvN6zTbs8tcv6wXgLjiczQrzHkVMEibtK3ZVsRJbBJPQQ/0", content: "课表只能发送给微信好友，不能发送到QQ，以前是可以的", datetime: "2017-11-08" }, { id: 294, nickname: "空天", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/QJB1eDJiaGopRUyBG…uPIW1icIOLPUatj862z7hYpHepBJlZiavG8iau58KLRJMTQ/0", content: "课表错了", datetime: "2017-11-08" }, { id: 293, nickname: "口口口", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/AT6w4n3ibtCkhCIrc…c8Y4Qmabcl5Pib8MjckzAxzI2O55ric3ricBnkC3o2liaNA/0", content: "这里只能看你正在借的书，不能看你直接借的书", datetime: "2017-11-06" }, { id: 292, nickname: "爱哭鬼灵精", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFoWXtU…YtUd8jBHvA7vVo2HFkwkTLRVS2t3tUiaEWjoghhRuIwdWcg/0", content: "请问老师如果绑定帐号使用微图书馆查询图书信息", datetime: "2017-11-06" }, { id: 291, nickname: "李越", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJpkSgmh…mgqFsSibDXKUlxqwuh1xB0fDSHQyES2X0RqVP6vBwqG8Ocw/0", content: "自作自受咋咋咋这是，(咋咋咋)走着走着自始至终咋咋咋在(((在咋咋咋()这是事实苏州(的在)", datetime: "2017-11-05" }, { id: 290, nickname: "口口口", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/AT6w4n3ibtCkhCIrc…c8Y4Qmabcl5Pib8MjckzAxzI2O55ric3ricBnkC3o2liaNA/0", content: "你可以点击对应的课看课程的详细信息", datetime: "2017-11-03" }, { id: 289, nickname: "粽子", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/VqvOaHcbyUvTLSS2n…S2pFnIaOVLCNxwiaWLFxxTnqnJCYZB4SPFt4mQJ3SX4mBCw/0", content: "希望可以查看上课教师的名字", datetime: "2017-11-03" }, { id: 288, nickname: "口口口", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/AT6w4n3ibtCkhCIrc…c8Y4Qmabcl5Pib8MjckzAxzI2O55ric3ricBnkC3o2liaNA/0", content: "你们要的全部课表来啦！！！", datetime: "2017-11-02" }, { id: 287, nickname: "The Pretty Reckless", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqLv19l5…a8ibaoIjB89W39sicV2cN7lR6qz4eydmGqjNhzFav2zLTug/0", content: "滑动看下一天课表", datetime: "2017-11-02" }, { id: 286, nickname: "口口口", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/AT6w4n3ibtCkhCIrc…c8Y4Qmabcl5Pib8MjckzAxzI2O55ric3ricBnkC3o2liaNA/0", content: "空教室可能还要需要一点时间才能开发出来，难度有点大", datetime: "2017-11-01" }, { id: 283, nickname: "CZL", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/25xJzSibSXkTQL3Tv…lribu9Z6nN2F8Sz1Bib1UnAcrUqdEu1p1oqGWQo7Lv70J5w/0", content: "希望空教室功能赶快出来", datetime: "2017-11-01" }, { id: 282, nickname: "口口口", pictrue: "https://wx.qlogo.cn/mmopen/vi_32/AT6w4n3ibtCkhCIrc…c8Y4Qmabcl5Pib8MjckzAxzI2O55ric3ricBnkC3o2liaNA/0", content: "如有个别问题想问可以加群询问，这里只是做反馈处理", datetime: "2017-11-01" }],
    power: false
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '留言板',
    })

    // loadList(this)
  },
  bindFormSubmit: function (e) {
    var that = this
    var content = e.detail.value.textarea
    if (content == "") {
      return
    }
    if (content.length > 100) {
      wx.showToast({
        title: '不能超过100个字符！',
        icon: 'success',
        duration: 1500
      })
      return
    }
    var session = wx.getStorageSync('session')
    var param = {
      openid: session,
      content: content
    }
    request.loadData(this, '/user/feedback', param, function (res) {
      wx.showToast({
        title: '感谢您的支持',
        icon: 'success',
        duration: 1500
      })
      // setTimeout(function () {
      //   loadList(that)
      // }, 1500)
    })
  },
  bindBack: function (e) {
    if (e.detail.value.backtext.length > 100 || e.detail.value.backtext < 1) {
      wx.showToast({
        title: '请重新书写',
        icon: 'success',
        duration: 1500
      })
      return
    }
    console.log(e.detail.value.backtext);
    console.log(e.detail.value.backId);
  }
})

function loadList(that) {
  var param = {
    page: 0
  }
  request.loadData(that, '/feedback/list', param, function (res) {
    var feedList = res.data
    for (let i = 0; i < feedList.length; i++) {
      feedList[i].datetime = util.formatTime(new Date(feedList[i].datetime))
    }
    that.setData({
      feedList: feedList
    })
  })
}