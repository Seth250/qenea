<template>
  <ul class="form__error-list">
    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  name: 'FieldError',
  props: {
    errors: {
      type: Array,
      required: false,
      validators: errors => errors && errors.length
    }
  }
}
</script>
