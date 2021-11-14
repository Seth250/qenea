<template>
  <BaseForm :formFunc="loginUser">
    <template #form-header>Login</template>

    <template #form-data>
      <FormRow>
        <template #label>Email Address</template>
        <template #input>
          <FormInput inputType="email" v-model="formData.email" required />
        </template>
      </FormRow>

      <FormRow>
        <template #label>Password</template>
        <template #input>
          <FormInput inputType="password" v-model="formData.password" required />
          <p>
            <a class="form__link" href="#">Forgot Password?</a>
          </p>
        </template>
      </FormRow>
    </template>

    <template #button-text>Login</template>

    <template #form-message>
      Don't have an account?
      <router-link class="form__link" :to="{name: 'SignUp'}">Signup here</router-link>
    </template>
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue'
import FormRow from '@/components/FormRow.vue'
import FormInput from '@/components/FormInput.vue'

export default {
  name: 'Login',
  components: {
    BaseForm,
    FormRow,
    FormInput
  },
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      console.log(this.formData)
    }
  }
}
</script>
