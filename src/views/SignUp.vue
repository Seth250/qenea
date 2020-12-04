<template>
	<div class="container">
		<BaseForm :formFunction="registerUser">
			<template #form-header> SignUp </template>

			<template #form-data>
				<BaseFormRow>
					<template #label> First Name </template>
					<template #field>
						<BaseFormInput inputType="text" v-model="formData.first_name" />
						<FormFieldError :fieldErrors="formErrors.first_name" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label> Last Name </template>
					<template #field>
						<BaseFormInput inputType="text" v-model="formData.last_name" />
						<FormFieldError :fieldErrors="formErrors.last_name" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label> Email Address </template>
					<template #field>
						<BaseFormInput inputType="email" v-model="formData.email" />
						<FormFieldError :fieldErrors="formErrors.email" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Username </template>
					<template #field>
						<BaseFormInput inputType="text" v-model="formData.username" />
						<FormFieldError :fieldErrors="formErrors.username" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Password </template>
					<template #field>
						<BaseFormInput inputType="password" v-model="formData.password" />
					</template>
				</BaseFormRow>

				<BaseFormRow>
					<template #label>	Confirm Password </template>
					<template #field>
						<BaseFormInput inputType="password" v-model="formData.password2" />
						<FormFieldError :fieldErrors="formErrors.password2" />
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
import axiosBase from '../api'
import BaseForm from '../components/BaseForm.vue'
import BaseFormRow from '../components/BaseFormRow.vue'
import BaseFormInput from '../components/BaseFormInput.vue'
import FormFieldError from '../components/FormFieldError.vue'

export default {
	name: 'SignUp',
	components: {
		BaseForm,
		BaseFormRow,
		BaseFormInput,
		FormFieldError
	},
	data() {
		return {
			formData: {
				first_name: '',
				last_name: '',
				email: '',
				username: '',
				password: '',
				password2: ''
			},
			formErrors: {}
		}
	},
	methods: {
		async registerUser() {
			try {
				await axiosBase.post('auth/signup/', this.formData)
				this.$router.push({ name: 'Login' })
			} catch (err) {
				if (err.response) {
					this.formErrors = err.response.data
				}
			}
		}
	}
}
</script>
