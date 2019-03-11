/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();
//引入模块

var index=require('./front/index.js');
var news=require('./front/news.js');
var member=require('./front/member.js');
var url=require('url');

//配置中间件 获取url的地址
router.use(async (ctx,next)=>{
    //console.log(ctx.request.header.host);

    //模板引擎配置全局的变量

    var pathname=url.parse(ctx.request.url).pathname;
     console.log('123'+pathname);
      await  next();
    //  /admin/login/code?t=709.0399997523431
    //var pathname=url.parse(ctx.request.url).pathname;
    //ctx.redirect('/front/index');
    //权限判断
    /*if(ctx.session.userinfo){
        await  next();
    }else{  //没有登录跳转到登录页面
        if(pathname=='/front/' ||login pathname=='/front/login/doLogin'  || pathname=='/front/login/code'){
            await  next();
        }else{
            ctx.redirect('/front/login');
        }
    }*/


})
router.get('/',async (ctx)=>{
   ctx.redirect('/front/index');
})
router.get('/:first',async (ctx)=>{
   ctx.render('front/'+ctx.params.first);
})
router.use('/index',index);
router.use('/news',news);
router.use('/member',member);
module.exports=router.routes();