<template>
	<div class="container">
		<div class="message" v-if="wrongCredentials">
			<p>Invalid Email and/or Password</p>
		</div>
		<BaseForm :formFunction="authenticateUser">
			<template #form-header>Login</template>

			<template #form-data>
				<BaseFormRow>
					<template #label> Email Address </template>
					<template #field>
						<BaseFormInput inputType="email" v-model="email" inputId="id_email" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label> Password </template>
					<template #field>
						<BaseFormInput inputType="password" v-model="password" />
						<p>
							<a href="/">Forgot Password?</a>
						</p>
					</template>
				</BaseFormRow>
			</template>

			<template #form-message>
				Don't have an Account? <router-link :to="{ name: 'SignUp' }">Signup here</router-link>
			</template>
		</BaseForm>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BaseForm from '../components/BaseForm.vue'
import BaseFormRow from '../components/BaseFormRow.vue'
import BaseFormInput from '../components/BaseFormInput.vue'

export default {
	name: 'Login',
	components: {
		BaseForm,
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
		...mapActions(['loginUser']),
		async authenticateUser() {
			const userData = {
				username: this.email,
				password: this.password
			}
			try {
				await this.loginUser(userData)
				this.$router.push({ name: 'Profile', params: { username: this.username } })
			} catch (err) {
				console.log(err)
				this.wrongCredentials = true
			}
		}
	},
	computed: {
		// because of the modules, we can't mapState directly
		...mapState({
			username: state => state.auth.username
		})
	}
}
</script>
