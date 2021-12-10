<template>
  <BaseForm :form-func="createUser">
    <template #form-header>Create an account</template>

    <template #form-data>
      <FormRow :is-grid-row="true">
        <FormRow>
          <template #label>First Name</template>
          <template #input>
            <FormInput name="firstname" v-model="formData.first_name" :errors="formErrors.first_name" required />
          </template>
        </FormRow>
        <FormRow>
          <template #label>Last Name</template>
          <template #input>
            <FormInput name="lastname" v-model="formData.last_name" :errors="formErrors.last_name" required />
          </template>
        </FormRow>
      </FormRow>

      <FormRow>
        <template #label>Email Address</template>
        <template #input>
          <FormInput name="email" input-type="email" v-model="formData.email" :errors="formErrors.email" required />
        </template>
      </FormRow>

      <FormRow>
        <template #label>Username</template>
        <template #input>
          <FormInput name="username" v-model="formData.username" :errors="formErrors.username" required />
        </template>
      </FormRow>

      <FormRow>
        <template #label>Password</template>
        <template #input>
          <FormInput name="password" input-type="password" v-model="formData.password" required />
        </template>
      </FormRow>

      <FormRow>
        <template #label>Confirm Password</template>
        <template #input>
          <FormInput
            name="password2"
            input-type="password"
            v-model="formData.password2"
            :errors="formErrors.password"
            @keyup="debounce(checkPasswordFields)"
            required
          />
        </template>
      </FormRow>
    </template>

    <template #button-text>Sign up</template>

    <template #form-message>
      Already have an account?
      <router-link class="form__link" :to="{ name: 'Login' }">Login here</router-link>
    </template>
  </BaseForm>
</template>
<script>
import BaseForm from '@/components/BaseForm.vue'
import FormRow from '@/components/FormRow.vue'
import FormInput from '@/components/FormInput.vue'
import { mapActions } from 'vuex'
import _ from 'lodash'

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
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        password2: ''
      },
      formErrors: {
        first_name: [],
        last_name: [],
        email: [],
        username: [],
        password: []
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    async createUser () {
      try {
        this.checkPasswordFields()
        // await this.registerUser(this.formData)
        // route props are in params object
        this.$router.push({
          name: 'Login',
          params: { text: 'Account has been created successfully. Login to continue.' }
        })
      } catch (err) {
        if (err.response) {
          this.formErrors = { ...this.formErrors, ...err.response.data }
        }
      }
    },
    checkPasswordFields () {
      if (this.formData.password !== this.formData.password2) {
        this.formErrors.password = ['The two password fields don\'t match.']
      } else {
        this.formErrors.password = []
      }
    },
    debounce: func => _.debounce(func, 250)()
  }
}
</script>
