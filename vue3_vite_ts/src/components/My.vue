<template>
  <div>
      <button 
        v-for="(item,index) in store.listData" 
        :key="item.id"
        :class="[item.state === false ? 'no' : '', item.select === true ? 'yes' : '']"
        @click="select(index)"
      >
        {{item.title}} <span v-if="item.state === false">已售</span>
      </button>
  </div>
  <br>
  <br>
  <br>
  <div>
       <button 
        v-for="(item,index) in newArr.arr" 
        :key="item.id"
        @click="del(index,item.id)"
      >
         {{item.title}}
      </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useTestStore } from '../store/index'

const store = useTestStore()
 const list = reactive({
     data:[
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
 ]
 })
 const newArr:any = reactive({
     arr:[]
 })

 const select = (index:number) => {
    store.listData[index].select = !store.listData[index].select
        // newArr.arr = null
        newArr.arr = []
        newArr.arr = store.listData.filter((item)=>{
                if(item.select === true) {
                    console.log(item )
                    return item
                }
            })
        console.log(newArr.arr)
        
        // newArr.arr.push(store.newArr)
    
 }
 

 const del = (index:number,id:number) => {
    //  const arr = newArr.arr.filter((item)=>{
    //             if(item.id !== id) {
    //                 console.log(item )
    //                 return item
    //             }
    //         })
    // newArr.arr = arr
    store.listData.forEach(item=> {
        if(item.id === id) item.select = false
    });
        newArr.arr = []
        newArr.arr = store.listData.filter((item)=>{
            if(item.select === true) {
                console.log(item )   
                return item
            }
        })
 }

</script>

<style>
.no {
    background-color: #ff0000;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
.yes {
    background-color: #eded08;
}

</style>