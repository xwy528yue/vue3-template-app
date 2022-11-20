import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './config/router'
import pinia from './stores'

async function bootstrap() {
  const app = createApp(App)
  app.use(router)
  app.use(pinia)
  app.mount('#app')
}

bootstrap()
