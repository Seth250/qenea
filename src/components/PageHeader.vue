<template>
  <header class="header">
    <h1>
      <router-link :to="{ name: 'Home' }">Qenea</router-link>
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
