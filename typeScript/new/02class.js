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
var Hello = /** @class */ (function () {
    function Hello() {
        this.hello = 'Hello world!';
    }
    Hello.prototype.sayHello = function () {
        return this.hello;
    };
    return Hello;
}());
var HELLO = new Hello();
console.log(HELLO.sayHello());
//继承
var helloPuls = /** @class */ (function (_super) {
    __extends(helloPuls, _super);
    function helloPuls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //重写
    helloPuls.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + this.hello; //super继承父类的方法
    };
    return helloPuls;
}(Hello));
var PH = new helloPuls();
console.log(PH.sayHello());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person();
//构造函数
var Haha = /** @class */ (function () {
    function Haha(name) {
        this.name = name;
    }
    return Haha;
}());
var haha = new Haha('hello');
var Ha = /** @class */ (function (_super) {
    __extends(Ha, _super);
    function Ha(age) {
        var _this = _super.call(this, 'hello world') || this;
        _this.age = age;
        return _this;
    }
    return Ha;
}(Haha));
var ha = new Ha(18);
console.log(ha.age, ha.name);
var Girl = /** @class */ (function () {
    function Girl(_age) {
        this._age = _age;
    }
    Object.defineProperty(Girl.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Girl;
}());
var girl = new Girl(18);
girl.age = 20;
console.log(girl.age);
