const isLogin = true;
export default function (context) {
    context.isMobile = false;
    console.log("middleware mobile:", Object.keys(context));
    let userAgent ='';
    if(context.req){
      userAgent = context.req.headers['user-agent'];
    }
    else{
      userAgent = navigator.userAgent;
    }
    if(/mobile/i.test(userAgent)){
      context.isMobile = true;
    }
    if (!isLogin) {
        context.redirect('/');
    }
}