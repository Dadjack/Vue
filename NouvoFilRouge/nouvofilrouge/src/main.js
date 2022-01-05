import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import Vuex from 'vuex'
import Store from './store/index'

const app = createApp(App)
app.use(router)
app.use(Vuex)
app.use(Store)
.mount('#app');