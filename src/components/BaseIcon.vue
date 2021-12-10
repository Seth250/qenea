<template>
  <component :is="`${name}Icon`"></component>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    AddIcon: defineAsyncComponent(() => import('./__private__/media/AddIcon.vue')),
    LeftCaretIcon: defineAsyncComponent(() => import('./__private__/media/LeftCaretIcon.vue')),
    RightCaretIcon: defineAsyncComponent(() => import('./__private__/media/RightCaretIcon.vue'))
  }
}
</script>
