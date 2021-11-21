<template>
  <div class="form-container">
    <div class="form-header">
      <p>
        <slot name="form-header"></slot>
      </p>
    </div>
    <form class="form" @submit.prevent="formFunc">
      <slot name="form-data"></slot>

      <FormRow>
        <button type="submit" class="form__btn">
          <slot name="button-text">Submit</slot>
        </button>
      </FormRow>

      <FormRow>
        <p class="form__message">
          <slot name="form-message"></slot>
        </p>
      </FormRow>
    </form>
  </div>
</template>

<script>
import FormRow from './FormRow.vue'

export default {
  name: 'BaseForm',
  components: {
    FormRow
  },
  props: {
    formFunc: {
      type: Function,
      required: false
    }
  }
}
</script>
