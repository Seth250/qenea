import axios from 'axios'

const state = {
	accessToken: localStorage.getItem('authtoken') || null
}

const getters = {
	loggedIn: (state) => state.accessToken !== null
}

const actions = {
	async loginUser({ commit }, credentials) {
		try {
			console.log(credentials)
			const response = await axios.post('http://localhost:8000/auth/obtain-token/', credentials)
			console.log(response.data)
		} catch (err) {
			console.log(err)
		}
	}
}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}
