<template>
	<div>
		<h2>Logout</h2>
	</div>
</template>

<script>
export default {
	name: 'Logout',
	async created() {
		await this.$store.dispatch('logoutUser')
		this.$router.push({ name: 'Login' })
	}
}
</script>
