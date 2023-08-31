import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import VueCookieLaw from 'vue-cookie-law'
import './assets/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('VueCookieLaw', VueCookieLaw)

app.mount('#app')
