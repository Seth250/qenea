<template>
	<div>
		<PageHeader />
		<main>
			<h2>Login</h2>
		</main>
		<PageFooter />
	</div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

export default {
	name: 'Login',
	components: {
		PageHeader,
		PageFooter
	}
}
</script>
