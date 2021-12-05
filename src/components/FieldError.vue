<template>
  <ul v-if="errors && errors.length" class="form__error-list">
    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  name: 'FieldError',
  props: {
    errors: {
      type: Array,
      required: false
    }
  }
}
</script>
