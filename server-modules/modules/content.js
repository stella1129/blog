'use strict';

const AV = require('leanengine');

Date.prototype.Format = function(fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
              (o[k]) :
              (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;

}

let Content = {};
Content.hello = (req,res) => {
  res.send({
    hello:"It works content!"
  })
}
Content.contentList = async(req,res) => {
  const queryContentList =() => {
    const query = new AV.Query('ContentList');
    query.ascending('createdAt');
    return query.find();
  }
  try {
    const data = await queryContentList()
    if (data) {
        let arr = []
        for (let item of data) {
            let result = {}
            result.objectId = item.get('objectId')
            result.title = item.get('title')
            result.abstract = item.get('abstract')
            result.author = item.get('author')
            result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
            arr.push(result)
        }
        let final_result = {}
        final_result.listLength = arr.length
        final_result.data = arr
        res.send(final_result)
    } else {
        throw new Error('Can\'t find the data-Content')
    }
} catch (error) {
    console.log(error)
}

}

module.exports = Content;
