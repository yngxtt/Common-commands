function fn() {
    let abc: string = 'Hello'
    console.log(abc)
}

fn()

//没有返还值
function demo1 () :void {
    console.log(1)
    // return 1
}

//对象参数
function demo2 ({a,b}:{a:number,b:number}){
    console.log(1)
    return a + b
}
const value = demo2({a:1,b:2})

//执行不完函数
function demo3() : never {
    throw new Error()
    console.log(1)
}

//数组
const ArrNum:number[] = [1,2,3]
const ArrStr:string[] = ['1','2','3']
const ArrUndf:undefined[] = [undefined,undefined] 
const arr : (number | string)[] = [1,'2',3]

const duixiang :{name:string,age:number}[]= [
    {name:'a',age:18},
    {name:'b',age:19}
]

type lady = {name:string,age:number}
const DX :lady[]= [
    {name:'a',age:18},
    {name:'b',age:19}
]

class Lady {
    name:string 
    age:number
}
const obj :Lady[]= [
    {name:'a',age:18},
    {name:'b',age:19}
]

// const arrTest : (string | number)[] = ['a', 2, 'c']  
//元组
const yuanzu : [string, number, string ] = ['a', 2, 'c'] 


//接口 
interface iHao {
    name: string
    age: number
    statureHeight: number
    weight?: number     // ?  可选，不强制
}
const hao = {
    name: 'zhangSan',
    age: 20,
    statureHeight: 180
}
function Hao(hao:iHao) {
    console.log(hao.name + ',' + hao.age + ',' + hao.statureHeight)
}
Hao(hao)

