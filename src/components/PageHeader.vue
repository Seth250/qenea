<template>
  <header class="header">
    <h1>
      <a href="/">Qenea</a>
    </h1>
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'PageHeader',
  components: {
    NavBar
  }
}
</script>
