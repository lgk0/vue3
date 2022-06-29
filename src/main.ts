import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { setupRouter } from '@/router'

const app = createApp(App)
setupRouter(app);
app.mount('#app')
