var router = require('koa-router')();
var svgCaptcha = require('svg-captcha');
router.get('/',async (ctx)=>{
    console.log('news.js file /');
    ctx.render('front/news');
})
module.exports=router.routes();