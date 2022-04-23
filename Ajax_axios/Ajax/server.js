// 1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

/**3.创建理由规则
 * request 是请求报文的封装
 * response 是对响应报文的封装
 */
app.get('/server',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('HELLO AJAX');
});
//POST请求
  /*  app.post('/server',(request,response)=>{
        //设置响应头，设置允许跨域
        response.setHeader('Access-Control-Allow-Origin','*');
        //设置响应
        response.send('HELLO AJAX POST');
    });
*/
app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应数据
    const data = {
        name:'MyJson+nodemon'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
//针对IE请求
app.get('/ie',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
         //设置响应
        response.send('延时响应fgdfgfdgfdgfdgfdgfdgfdgfdgdfg');
    },3000);
});
//jQuery服务
app.all('/jqueryAll',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // const data = {name: 'jquery ajax all'}
    // response.send(JSON.stringify(data));
    response.send('jquery ajax axios');
});
//axios服务
app.all('/axios-All',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'jquery ajax all'}
    response.send(JSON.stringify(data));

});
//fetch服务
app.all('/fetch-All',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'jquery ajax all'}
    response.send(JSON.stringify(data));

});
app.post('/jquery',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('jquery server POST！');
});
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中");
});