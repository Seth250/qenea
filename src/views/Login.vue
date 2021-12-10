<template>
  <div>
    <div v-if="message.isOpen" :class="getMessageClasses">
      <span class="message__text">{{ message.text }}</span>
      <span class="message__close" @click="message.isOpen = false">&times;</span>
    </div>

    <BaseForm :form-func="authenticateUser">
      <template #form-header>Login to your account</template>

      <template #form-data>
        <FormRow>
          <template #label>Email Address</template>
          <template #input>
            <FormInput name="email" input-type="email" v-model="formData.email" required />
          </template>
        </FormRow>

        <FormRow>
          <template #label>Password</template>
          <template #input>
            <FormInput name="password" input-type="password" v-model="formData.password" required />
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
  </div>
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
      },
      message: {
        isOpen: false,
        text: '',
        type: 'success'
      }
    }
  },
  computed: {
    getMessageClasses () {
      return ['message', `message--${this.message.type}`, { 'message--hidden': !this.message.isOpen }]
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    async authenticateUser () {
      try {
        await this.loginUser(this.formData)
        this.$router.push({ name: 'Home' })
      } catch (err) {
        this.message.isOpen = true
        this.message.text = 'Email and Password combination is invalid.'
        this.message.type = 'error'
      }
    }
  },
  mounted () {
    if (this.$route.params.text) {
      this.message.isOpen = true
      this.message.text = this.$route.params.text
    }
  }
}
</script>
