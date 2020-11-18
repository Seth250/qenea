import axios from 'axios'

const baseURL = 'http://localhost:8000'

export default axios.create({
	baseURL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})
