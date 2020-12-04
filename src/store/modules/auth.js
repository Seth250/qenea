// import axios from 'axios'
import axiosBase from '../../api'

const state = {
	authToken: localStorage.getItem('authToken') || null,
	username: localStorage.getItem('username') || null
}

const getters = {
	loggedIn: (state) => state.authToken !== null
}

const actions = {
	async loginUser({ commit }, credentials) {
		const { data } = await axiosBase.post('auth/token/login/', credentials)
		localStorage.setItem('authToken', data.token)
		localStorage.setItem('username', data.username)
		commit('updateAuthDetails', data)
	},
	async logoutUser({ commit }) {
		// axiosBase.defaults.headers.common.Authorization = `Token ${state.authToken}`
		// await axiosBase.post('auth/token/logout/')
		localStorage.removeItem('authToken')
		localStorage.removeItem('username')
		commit('destroyAuthDetails')
	}
}

const mutations = {
	updateAuthDetails: (state, data) => {
		state.authToken = data.token
		state.username = data.username
	},
	destroyAuthDetails: (state) => {
		state.authToken = null
		state.username = null
	}
}

export default {
	// namespaced: true,
	state,
	getters,
	actions,
	mutations
}
