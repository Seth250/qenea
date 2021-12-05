<template>
  <input
    :name="name"
    :type="inputType"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="['form__input', { 'form__input--error': hasError }]"
    :placeholder="placeholder"
  >
  <FieldError v-if="hasError" :errors="errors" />
</template>

<script>
import FieldError from './FieldError.vue'

export default {
  name: 'FormInput',
  props: {
    name: {
      type: String,
      required: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    errors: {
      type: [Array, undefined],
      required: false
    }
  },
  components: {
    FieldError
  },
  computed: {
    hasError () {
      return this.errors && this.errors.length
    }
  }
}
</script>
