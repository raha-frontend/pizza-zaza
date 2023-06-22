import { createApp } from 'vue'
import router from './router'
import AppComponent from './App.vue'
import { store } from './store'

const app = createApp(AppComponent)

app.use(router)

app.use(store)

app.mount('#app')
