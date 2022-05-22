class Hello {
    hello = 'Hello world!'
    sayHello () {
        return this.hello
    }
}

const HELLO = new Hello()
console.log(HELLO.sayHello())

//继承
class helloPuls extends Hello {
    //重写
    sayHello(): string {
        return super.sayHello() + this.hello  //super继承父类的方法
    }
}
const PH = new helloPuls()
console.log(PH.sayHello())

class Person {
    public name: string
    private age : number  //私有变量，只能在类内部使用,不继承
    protected sex: string //友好的，可以被继承
    public say() {
        console.log(this.age)
    }
}

const person = new Person()

//构造函数
class Haha {
    public name : string 
    constructor(name:string) {
        this.name = name
    }
    //简写
    // constructor(public name : string) {}
}

const haha = new Haha('hello')

class Ha extends Haha {
    constructor(public age:number) {
        super('hello world')
    }
}

const ha = new Ha(18)
console.log(ha.age,ha.name)


class Girl {
    constructor(private _age: number) {
       
    }
    get age() {
        return this._age
    }
    set age(age: number) {
        this._age = age
    }
}

const girl = new Girl(18)
girl.age = 20
console.log(girl.age)

//只读属性
class Preson2 {
    public readonly _name: string //只读属性
    constructor(name:string) {
        this._name = name
    }
}
const person2 = new Preson2 ('zhanSan')
console.log(person2._name)

// 抽象类
abstract  class helloX {
    abstract hello()
}

class helloA extends helloX {
    hello() {
        console.log('B') 
    }
}

class helloB extends helloX {
    hello() {
        console.log('C')
    }
}

class helloC extends helloX {
    hello() {
        console.log('C')
    }
}