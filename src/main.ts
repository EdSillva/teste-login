import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { initializeRemoteConfig } from './services/firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)
initializeRemoteConfig()

app.mount('#app')
