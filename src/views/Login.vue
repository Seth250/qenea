<template>
  <BaseForm :formFunc="authenticateUser">
    <template #form-header>Login</template>

    <template #form-data>
      <FormRow>
        <template #label>Email Address</template>
        <template #input>
          <FormInput name="email" inputType="email" v-model="formData.email" required />
        </template>
      </FormRow>

      <FormRow>
        <template #label>Password</template>
        <template #input>
          <FormInput name="password" inputType="password" v-model="formData.password" required />
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
import { mapActions } from 'vuex'
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
    ...mapActions(['loginUser']),
    async authenticateUser () {
      try {
        await this.loginUser(this.formData)
        this.$router.push({ name: 'Home' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
