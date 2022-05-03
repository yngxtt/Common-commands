import Axios from "./index";

export const getBeeList = (data) => Axios({
    url:`/search?keywords=${data}`,
    method: 'GET'
    // url:'/search',
    // data,
    // method: 'GET'
    
})

export const test = () => Axios({
    url:'/cloudsearch?limit=30&offset=0&type=1&keywords=%E5%AD%A4%E5%8B%87%E8%80%85'
})