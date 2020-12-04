// import axios from 'axios'
import axiosBase from '../../api'

const state = {
	authToken: localStorage.getItem('authToken') || null
}

const getters = {
	loggedIn: (state) => state.authToken !== null
}

const actions = {
	async createUser(context, userData) {
		const { data } = await axiosBase.post('auth/signup/', userData)
		console.log(data)
	},
	async loginUser({ commit }, credentials) {
		const { data } = await axiosBase.post('auth/token/login/', credentials)
		const token = data.token
		localStorage.setItem('authToken', token)
		localStorage.setItem('email', data.email)
		commit('updateAuthToken', token)
	},
	async logoutUser({ commit }) {
		// axiosBase.defaults.headers.common.Authorization = `Token ${state.authToken}`
		// await axiosBase.post('auth/token/logout/')
		localStorage.removeItem('authToken')
		localStorage.removeItem('email')
		commit('destroyAuthToken')
	}
}

const mutations = {
	updateAuthToken: (state, token) => { state.authToken = token },
	destroyAuthToken: (state) => { state.authToken = null }
}

export default {
	state,
	getters,
	actions,
	mutations
}
