var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类
var UP = /** @class */ (function () {
    function UP() {
    }
    UP.prototype.fn = function () {
        var age = 11;
        console.log(age);
    };
    return UP;
}());
var up = new UP;
up.name = 'up';
// up.age = 18   // 不能访问
//但可以通过内部方法访问
up.fn(); //11
console.log(up); //UP { name: 'up' }
//继承
var upChild = /** @class */ (function (_super) {
    __extends(upChild, _super);
    function upChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return upChild;
}(UP));
var child = new upChild;
child.fn();
//getter setter
// class GS {
// static fname : string = '张'  //静态在new在之前就存在
//     private _username: string = '张三'
//     get username() {
//         return this._username
//     }
//     set username(value:string) {
//         this._username = value + 'haha'
//     }
// }
// let gs = new GS
// gs.username = '李四'
// console.log(gs.username)
//抽象类
var abs = /** @class */ (function () {
    function abs() {
    }
    return abs;
}());
var ABS = /** @class */ (function (_super) {
    __extends(ABS, _super);
    function ABS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABS.prototype.a = function () {
        return 'a';
    };
    return ABS;
}(abs));
//函数中的可选参数
function Func(sa, sc) {
    return sa + sc;
}
var F1 = Func('hello', '!!!');
console.log(F1);
var F2 = Func('hello');
console.log(F2);
//默认参数
function func(sa, sc) {
    if (sc === void 0) { sc = '!!!'; }
    return sa + sc;
}
var f1 = func('hello', '!!!');
console.log(f1);
var f2 = func('hello');
console.log(f2);
//泛型
function ff(str) {
    return str;
}
ff('1');
ff(1);
function f(str) {
    return str;
}
var Per = /** @class */ (function () {
    function Per() {
    }
    return Per;
}());
//交叉类型 (将多个类型合并)
function extend(first, second) {
    var R = {};
    return R;
}
//联合数据类型
function pad(value, padding) {
}
var array = ['a', 'b', 'c'];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    console.log(i);
}
for (var i in array) {
    console.log(i);
}
