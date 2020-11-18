// import axios from 'axios'
import axiosBase from '../../api'

const state = {
	authToken: localStorage.getItem('authToken') || null
}

const getters = {
	loggedIn: (state) => state.authToken !== null
}

const actions = {
	async loginUser({ commit }, credentials) {
		console.log(axiosBase)
		const { data } = await axiosBase.post('auth/obtain-token/', credentials)
		commit('updateLoginDetails', data)
	}
}

const mutations = {
	updateLoginDetails(state, { token, email }) {
		// localStorage.setItem('authToken', token)
		// localStorage.setItem('email', email)
		state.authToken = token
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
