<template>
	<div>
		<PageHeader />
		<main>
			<form @submit.prevent="authenticateUser">
				<h2>Login</h2>
				<div>
					Email
					<input type="email" v-model="email" required />
				</div>
				<div>
					Password
					<input type="password" v-model="password" required />
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</main>
		<PageFooter />
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

export default {
	name: 'Login',
	components: {
		PageHeader,
		PageFooter
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		...mapActions([
			'loginUser'
		]),
		authenticateUser() {
			const userData = {
				username: this.email,
				password: this.password
			}
			this.loginUser(userData)
		}
	}
}
</script>
