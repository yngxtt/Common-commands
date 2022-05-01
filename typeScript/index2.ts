//类
class UP {
   public name: string 
   private age: number  // 私有的,
   protected sex :number  // 子类可以继承，但外部不能访问
   readonly h: string //只读
   fn() {
       let age = 11
       console.log(age)
   }
}
let up = new UP
up.name = 'up'
// up.age = 18   // 不能访问
//但可以通过内部方法访问
up.fn()  //11
console.log(up) //UP { name: 'up' }



//继承
class upChild extends UP {

}
let child = new upChild
child.fn()



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
abstract class abs {
    abstract a(): string
}
class ABS extends abs {
    a() {
        return 'a'
    }
}

//函数中的可选参数
function Func (sa:string,sc?:string): string {
    return sa + sc
}
let F1 = Func('hello','!!!')
console.log(F1)
let F2 = Func('hello')
console.log(F2)

//默认参数
function func (sa:string,sc:string='!!!'): string {
    return sa + sc
}
let f1 = func('hello','!!!')
console.log(f1)
let f2 = func('hello')
console.log(f2)

//泛型
function ff<T> (str: T): T {
    return str
}
ff<string>('1')
ff<number>(1)

function f<T> (str:Array<T> ): Array<T> {
    return str
}

//---------------------------
interface IFood {
    name:string
    tag:string
}

class Per<IFood> {
    good:IFood
}

//交叉类型 (将多个类型合并)
function extend<U,T> (first:T,second:U):T & U {
    let R = <T & U>{}
    return R
}

interface Ia {
    name:string | number | boolean
}
//联合数据类型
function pad(value:string,padding:any) {

}

let array: Array<string> = ['a','b','c']
for(let i of array ) {
    console.log(i)//a,b,c
}

for(let i in array ) {
    console.log(i)//1,2,3
}


// 命名空间
namespace Validation {
    export interface str {
        
    }
}
