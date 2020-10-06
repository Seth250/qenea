<template>
	<nav>
		<ul v-for="item in navItems">
			<li>
				<router-link :to="#">{{ item }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		navItems: Array
	}
}
</script>