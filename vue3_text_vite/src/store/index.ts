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
            songByUrlData: null,
            songUrl: 'http://m701.music.126.net/20220507004020/968e802f497ad2d16ca557456f02326f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096429529/2bea/211b/0672/43be1ec076b8d7d7dc457549274e1d5f.mp3'
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