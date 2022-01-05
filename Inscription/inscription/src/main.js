import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'
import Router from './router'
import Store from './store/index'


// app.header('Access-Control-Allow-Origin','*');

// app.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

// app.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');


const app = createApp(App)
app.use(Router)
app.use(Vuex)
app.use(Store)
app.mount('#app')