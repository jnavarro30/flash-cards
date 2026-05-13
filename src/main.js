import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Import the router

const app = createApp(App)

app.use(router) // 2. Use the router plugin
app.mount('#app')
