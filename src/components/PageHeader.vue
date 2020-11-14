<template>
	<header class="page-header">
		<h1><a href="/">Qenea</a></h1>
		<NavBar
			:authenticated="false"
		/>
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
