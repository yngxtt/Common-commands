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
            songUrl: 'http://m701.music.126.net/20220507004020/968e802f497ad2d16ca557456f02326f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096429529/2bea/211b/0672/43be1ec076b8d7d7dc457549274e1d5f.mp3',
            listData: [
                {
                    id: 1,
                    title: 'A1',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 2,
                    title: 'A2',
                    price: 99,
                    state: true,
                    select: true
                },
                {
                    id: 3,
                    title: 'A3',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 4,
                    title: 'A4',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 5,
                    title: 'A5',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 6,
                    title: 'A6',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 7,
                    title: 'A7',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 8,
                    title: 'A8',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 9,
                    title: 'A9',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 10,
                    title: 'A10',
                    price: 99,
                    state: false,
                    select: false
                },
                {
                    id: 11,
                    title: 'A11',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 12,
                    title: 'A1',
                    price: 99,
                    state: false,
                    select: false
                },
                {
                    id: 12,
                    title: 'A1',
                    price: 99,
                    state: true,
                    select: false
                },
                {
                    id: 13,
                    title: 'A13',
                    price: 99,
                    state: false,
                    select: false
                },
                {
                    id: 14,
                    title: 'A14',
                    price: 99,
                    state: true,
                    select: false
                },
                 {
                    id: 15,
                    title: 'A15',
                    price: 99,
                    state: true,
                    select: false
                }
            ],
            newArr: []
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