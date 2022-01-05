import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'
import Router from './router'




const app = createApp(App)
app.use(Router).use(Vuex).mount('#app')
