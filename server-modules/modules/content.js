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
//获取10篇文章
Content.getTenContent = async(req,res) => {
  let page = req.params.page;
  const queryTenContent =  (page) => {
    const query = new AV.Query('ContentList');// 创建查询实例
    query.descending('createdAt');//创建时间的降序排列
    query.skip((page - 1)*10);//跳过之前的以获取第page页的10条数据
    query.limit(10) // 限制返回项数量
    return query.find();
  }
  try {
    const data = await queryTenContent(page);
    if( data ) {
      let arr = [];
      for(let item of data) {
        let result= {};
        result.objectId = item.get('objectId')
        result.title = item.get('title');
        result.abstract = item.get('abstract')
        result.author = item.get('author')
        result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        arr.push(result);
      }
      let final_result = {};
      final_result.page = page;
      final_result.data = arr;
      res.send(final_result)
    }else {
      throw new Error('Can\'t find the data=Content')
    }

  } catch (err) {
    console.error(err)
  } 
}

//获取指定文章内容
Content.article = async (req,res) => {
  console.log("enter article")
  const id = req.params.id;
  const queryArticle = (id) => {
    const query = new AV.Query('ContentList');
    return query.get(id)
  }
  try {
    const data = await queryArticle(id);
    let result = {};
    if(data) {
      result.title = data.get('title');
      result.content = data.get('content');
      result.createdAt = data.get('createdAt').Format("yyyy-MM-dd");
      res.send(result);
    }else {
      throw new Error('article can not found')
    }
  } catch(err) {
      console.log(err);
  }
}

let postContentList = AV.Object.extend('ContentList');
Content.submitArticle = async (req,res) => {
  let _post = {
    title:req.body.title,
    content: req.body.title,
    abstract: req.body.abstract
  }
  if(!_post.title.trim() || !_post.content.trim() ) {
     res.status(500).send('昵称和内容不可为空')
  }
  let myPost = new postContentList();
  myPost.set('title', _post.title);
  myPost.set('content', _post.content);
  myPost.set('abstract',_post.abstract);
  myPost.save().then(function(item){
    console.log('objectId is ' + item.id);
    res.send(item.id + " -> post successfully" );
  },function(err){
    res.status(500).send(error);
  })
}
module.exports = Content;
