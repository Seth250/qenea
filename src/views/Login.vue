<template>
	<main>
		<div v-if="wrongCredentials">
			<p>Invalid Email and/or Password</p>
		</div>
		<form @submit.prevent="authenticateUser">
			<h2>Login</h2>
			<BaseFormRow>
				<template #default>
					Email Address
				</template>
				<template #input>
					<BaseFormInput v-model="email" />
				</template>
			</BaseFormRow>

			<BaseFormRow>
				<template #default>
					Password
				</template>
				<template #input>
					<BaseFormInput v-model="password" />
					<p>
						<a href="/">Forgot Password?</a>
					</p>
				</template>
			</BaseFormRow>

			<BaseFormRow>
				<template #row>
					<button type="submit">Login</button>
				</template>
			</BaseFormRow>
		</form>
	</main>
</template>

<script>
import { mapActions } from 'vuex'
import BaseFormRow from '../components/BaseFormRow.vue'
import BaseFormInput from '../components/BaseFormInput.vue'

export default {
	name: 'Login',
	components: {
		BaseFormRow,
		BaseFormInput
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
