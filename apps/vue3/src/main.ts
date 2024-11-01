import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
    unmount: () => void
  }
}

let app = createApp(App)

app.mount('#app')

window.unmount = () => {
  app.unmount()
}