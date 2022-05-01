console.log('test')

//数据类型
//1.布尔
let b: boolean = false
b = true
 //2. 字符串
let str: string = 'abc'

// 3.数组
let arr: number[] = [1,2,3,4]
let arr2: Array<number> = [1,2,3,4]

//4.元组
let x: [string,number]

x = ['a', 1]

//5.枚举

enum e {
    a, //0
    b, //1
    c, //2
    d  //3
}

enum ee {
    a=5, //5
    b, //6
    c, //7
    d  //8
}
//也可以枚举字符串

//6. Any
let an: any = 1
an = 'an'


//null 和 undefined  联合数据类型
let s: string | null = null 
console.log(s) //null
s = 's'
console.log(s) //'s'


//void在函数后可以省略
function fn() {
    console.log('fn')
}

function fn2(): void {
    console.log('fn2')
}

//有返回值
function fn3(): string {
    console.log('fn3')
    return 'str'
}


/**
 * 类型断言
*/
interface User {
    name: string
}
let u: User = {name:'haha'}
u = {} as User


//接口
interface IUser  {
    readonly name: String  //readonly只读
    age?:number
    sex:number
}



const ZhangSan: IUser = {
    name:'zhangsan',
    sex:1
}
// ZhangSan.name = 'x'  //报错 readonly只读


//函数接口
interface IFunc  {
    (name: string): void
}
let func: IFunc = (name: string): String => name
                //传入类型    //返回值类型

                let funa = func('hello')
console.log(funa)

//可索引类型
interface ISteringArr {
    [index:string]: string
}

let abc: ISteringArr = {
    ab: 'a',
    ac: 'b'
}


//类类型
interface IName {
    name: string
}
class Name implements IName {
    name: string
} 
let username = new Name()
username.name = 'zhangsan'
console.log(username)  //Name { name: 'zhangsan' }

//接口继承
interface Ia {
    age:number
}
interface Ib extends Ia {
    name: string
}
class c implements Ib {
    name: string
    age: number  // 必须，， 继承了Ia
} 
