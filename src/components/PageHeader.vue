<template>
	<header class="page-header">
		<h1><a href="/">Qenea</a></h1>
		<NavBar />
	</header>
</template>

<script>
import NavBar from './NavBar'

export default {
	name: 'PageHeader',
	components: {
		NavBar
	}
}
</script>
