import axiosBase from '@/api'

const state = {
  authToken: localStorage.getItem('authToken') || null,
  email: localStorage.getItem('email') || null
}

const getters = {
  isLoggedIn: state => state.authToken != null
}

const actions = {
  async registerUser ({ commit }, payload) {
    const { password2, ...credentials } = payload
    await axiosBase.post('auth/users/', credentials)
  },

  async loginUser ({ commit }, credentials) {
    const { data } = await axiosBase.post('auth/token/login/', credentials)
    localStorage.setItem('authToken', data.auth_token)
    localStorage.setItem('email', data.email)
    commit('updateAuthDetails', data)
  }
}

const mutations = {
  updateAuthDetails (state, data) {
    state.authToken = data.auth_token
    state.email = data.email
  }
}

export default {
  state: () => state,
  actions,
  getters,
  mutations
}
