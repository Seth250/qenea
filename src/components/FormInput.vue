<template>
  <div class="form__input-container">
    <input
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form__input"
      :placeholder="placeholder"
      :required="required"
    >
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
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
    }
  }
}
</script>
