<template>
  <PageHeader />
  <main class="main">
    <router-view />
  </main>
</template>

<script>
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
