<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </div> -->
		<PageHeader />
		<main class="main-content">
			<router-view />
		</main>
		<PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
	name: 'App',
	components: {
		PageHeader,
		PageFooter
	}
}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
