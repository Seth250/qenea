<template>
	<div>
		<PageHeader />
		<main>
			<h2>Signup</h2>
			<form>
				<div>
					First Name
					<input type="text" v-model="firstName" required />
				</div>
				<div>
					Last Name
					<input type="text" v-model="lastName" required />
				</div>
				<div>
					Email
					<input type="text" v-model="email" required />
				</div>
				<div>
					Username
					<input type="text" v-model="username" required />
				</div>
				<div>
					Password
					<input type="text" v-model="password" required />
				</div>
				<div>
					Confirm Password
					<input type="text" v-model="password2" required />
				</div>
			</form>
		</main>
		<PageFooter />
	</div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

export default {
	name: 'SignUp',
	components: {
		PageHeader,
		PageFooter
	},
	data() {
		return {
			// formData: {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			password2: ''
			// }
		}
	}
}
</script>
