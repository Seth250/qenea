import { createStore } from 'vuex'
import auth from './modules/auth.js'

const store = createStore({
  modules: {
    auth
  }
})

export default store
