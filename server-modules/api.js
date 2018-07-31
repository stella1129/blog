const router = require("express").Router();

//添加路由模块
const content = require('./modules/content');
const comments = require('./modules/comment');
const tags = require('./modules/tags');
const user = require('./modules/user');
//测试接口 /api/hello
router.get('/hello', content.hello);
//content
router.get('/contentAll', content.contentList);
router.get('/contentList/:page',content.getTenContent);
//article
router.get('/article/:id',content.article);
router.post('/article/submitArticle',content.submitArticle);

module.exports = router;