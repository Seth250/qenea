<template>
  <div class="home">
		<PageHeader></PageHeader>
		<main>Home Page</main>
		<PageFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
	name: 'Home',
	components: {
		PageHeader,
		PageFooter
	}
}
</script>
