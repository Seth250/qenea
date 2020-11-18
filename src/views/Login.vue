<template>
	<div>
		<PageHeader />
		<main>
			<div v-if="wrongCredentials">
				<p>Invalid Email and/or Password</p>
			</div>
			<form @submit.prevent="authenticateUser">
				<h2>Login</h2>
				<div>
					Email
					<input type="email" v-model="email" autofocus required />
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
			password: '',
			wrongCredentials: false
		}
	},
	methods: {
		...mapActions([
			'loginUser'
		]),
		async authenticateUser() {
			const userData = {
				username: this.email,
				password: this.password
			}
			try {
				await this.loginUser(userData)
				this.$router.push({ name: 'Home' })
			} catch (err) {
				console.log(err)
				this.wrongCredentials = true
			}
		}
	}
}
</script>
