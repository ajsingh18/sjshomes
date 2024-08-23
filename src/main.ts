import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'
import { createGtm } from '@gtm-support/vue-gtm'

const app = createApp(App)

app.use(router)
app.use(
  createGtm({
    id: ['GTM-NVHXDNH6', 'G-CDYXC5806H'],
    vueRouter: router
  })
)

app.mount('#app')
