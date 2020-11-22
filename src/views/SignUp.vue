<template>
	<div class="container">
		<h2>SignUp</h2>
		<BaseForm :formFunction="authenticateUser">
			<template #form-data>
				<BaseFormRow>
					<template #label> First Name </template>
					<template #input>
						<BaseFormInput inputType="text" v-model="firstName" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label> Last Name </template>
					<template #input>
						<BaseFormInput inputType="text" v-model="lastName" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label> Email Address </template>
					<template #input>
						<BaseFormInput inputType="email" v-model="email" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Username </template>
					<template #input>
						<BaseFormInput inputType="text" v-model="username" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Password </template>
					<template #input>
						<BaseFormInput inputType="password" v-model="password" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Confirm Password </template>
					<template #input>
						<BaseFormInput inputType="password" v-model="password2" />
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
import BaseForm from '../components/BaseForm.vue'
import BaseFormRow from '../components/BaseFormRow.vue'
import BaseFormInput from '../components/BaseFormInput.vue'

export default {
	name: 'SignUp',
	components: {
		BaseForm,
		BaseFormRow,
		BaseFormInput
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
