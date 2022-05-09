import { createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import My from '../components/My.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:"/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/my',
        component: My
    },

]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

export default router