import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routers/index'
import { createPinia } from 'pinia'
const store = createPinia()

createApp(App).use(router).use(store).mount('#app')
