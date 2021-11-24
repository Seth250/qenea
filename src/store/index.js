import { createStore } from 'vuex'
import auth from './modules/auth.js'
import questans from './modules/questans.js'

const store = createStore({
  modules: {
    auth,
    questans
  }
})

export default store
