import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './assets/scss/index.scss'

const app = createApp(App)

app.use(store)

app.use(router)

app.use(VueLoading, {
  color: '#222'
})

// ensuring the app is mounted after the router is initialized (to prevent transition on page load)
router.isReady().then(() => {
  app.mount('#app')
})

export default app
