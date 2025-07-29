import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

setTimeout(() => {
  //if you
  app.mount('#app')
}, 4000)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {})
