console.log('test');
//数据类型
//1.布尔
var b = false;
b = true;
//2. 字符串
var str = 'abc';
// 3.数组
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
//4.元组
var x;
x = ['a', 1];
//5.枚举
var e;
(function (e) {
    e[e["a"] = 0] = "a";
    e[e["b"] = 1] = "b";
    e[e["c"] = 2] = "c";
    e[e["d"] = 3] = "d"; //3
})(e || (e = {}));
var ee;
(function (ee) {
    ee[ee["a"] = 5] = "a";
    ee[ee["b"] = 6] = "b";
    ee[ee["c"] = 7] = "c";
    ee[ee["d"] = 8] = "d"; //8
})(ee || (ee = {}));
//也可以枚举字符串
//6. Any
var an = 1;
an = 'an';
//null 和 undefined  联合数据类型
var s = null;
console.log(s); //null
s = 's';
console.log(s); //'s'
//void在函数后可以省略
function fn() {
    console.log('fn');
}
function fn2() {
    console.log('fn2');
}
//有返回值
function fn3() {
    console.log('fn3');
    return 'str';
}
var u = { name: 'haha' };
u = {};
var ZhangSan = {
    name: 'zhangsan',
    sex: 1
};
var func = function (name) { return name; };
//传入类型    //返回值类型
var funa = func('hello');
console.log(funa);
var abc = {
    ab: 'a',
    ac: 'b'
};
var Name = /** @class */ (function () {
    function Name() {
    }
    return Name;
}());
var username = new Name();
username.name = 'zhangsan';
console.log(username); //Name { name: 'zhangsan' }
var c = /** @class */ (function () {
    function c() {
    }
    return c;
}());
