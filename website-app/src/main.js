import { createApp } from 'vue'
import { createPinia } from 'pinia'
import lazyLoad from 'vue-lazyload'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyLoad)
app.use(PrimeVue, {})

app.mount('#app')
