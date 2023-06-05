import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import VueAxios  from 'vue-axios'
import axios from 'axios'
import service from './service.js'

let app = createApp(App)

app.config.globalProperties.service = service

app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
