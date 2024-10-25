import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import './style.css'
import App from './App.vue'
import router from './router'

microApp.start({
  disableScopecss: true,
})

createApp(App).use(router).mount('#app')
