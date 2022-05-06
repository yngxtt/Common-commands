import { defineStore } from "pinia"
import { Names } from './storeName'


type User = {
    n:string,
    age:number
}

let result: User = {
    n:'LISI',
    age: 18
}

const Login = ():Promise<User> => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(result)
        },2000)
    })
}

export const useTestStore = defineStore(Names.TEST,{
    state: () => {
        return {
            name: 'zhangSan',
            age: 18,
            song: null,
            songUrl: null
        }
    },

    getters: {

    },

    actions: {
        async setTestName() {
           const result  =  await Login()
           this.name = result.n 
        }
    }
})