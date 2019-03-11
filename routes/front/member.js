var router = require('koa-router')();
var svgCaptcha = require('svg-captcha');
router.get('/',async (ctx)=>{
    console.log('index.js file /');
    ctx.render('front/member');
})
router.get('/code',async (ctx)=>{
    console.log('member file code ');
     var captcha = svgCaptcha.create({
        size:4,
        fontSize: 40,
        width: 92,
        height:30,
        background:"#cc9966"
    });
    //console.log(captcha.text);

    //保存生成的验证码
    ctx.session.code=captcha.text;
    //设置响应头
    ctx.response.type = 'image/svg+xml';
    ctx.body=captcha.data;
})
module.exports=router.routes();