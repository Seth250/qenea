<template>
  <div :class="[isGridRow ? 'form__grid-row' : 'form__row']">
    <slot>
      <label class="form__label">
        <slot name="label"></slot>
      </label>
      <slot name="input"></slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FormRow',
  props: {
    isGridRow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
