import axiosBase from '@/api'

const state = {
  authToken: localStorage.getItem('authToken') || null,
  email: localStorage.getItem('email') || null
}

const getters = {
  isLoggedIn: state => state.authToken != null,
  userToken: state => state.authToken
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
  },
  async logoutUser ({ commit }) {
    await axiosBase.post('auth/token/logout/')
    localStorage.removeItem('authToken')
    localStorage.removeItem('email')
    commit('destroyAuthDetails')
  }
}

const mutations = {
  updateAuthDetails (state, data) {
    state.authToken = data.auth_token
    state.email = data.email
  },
  destroyAuthDetails (state) {
    state.authToken = null
    state.email = null
  }
}

export default {
  state: () => state,
  actions,
  getters,
  mutations
}
