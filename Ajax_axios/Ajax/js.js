const btn = document.getElementsByTagName('button')[0];
const result = document.getElementById('#result');
btn.onclick = function (){
    // 1.创建对象
    const xhr = new XMLHttpRequest();
    //2.初始化，设置请求方法和url
    xhr.open('GET','http://127.0.0.1:8000/server');
    //3.发送
    xhr.send();
    //4.事件绑定，处理服务端返回的结果
    //readystate 是 xhr 对象的属性。表示状态0 1 2 3 4
    //change 改变
    result.innerHTML = xhr.response;
    xhr.onreadystatechenge = function (){
        result.innerHTML = '2';
        if(xhr.readyState === 4 ){
            //判断响应状态
            result.innerHTML = '1';
            if(xhr.status >= 200 && xhr.status < 300) {
                // console.log(xhr.status);//状态码
                // console.log(xhr.statusText);//响应字符串
                // console.log(xhr.getAllResponseHeaders());//响应头
                // console.log(xhr.response);//响应体

                //
                result.innerHTML = xhr.response;

            } else {

            }
        }
    }
}