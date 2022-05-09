import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import { createPinia } from 'pinia'

const store = createPinia()
import { Button , List , Search} from 'vant';




createApp(App).use(router).use(store).use(List).use(Button).use(Search).mount('#app')
