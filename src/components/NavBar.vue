<template>
	<nav>
		<ul>
			<template v-if="authenticated">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/">Profile</router-link>
				</li>
			</template>
			<template v-else>
				<li>
					<router-link to="/">Login</router-link>
				</li>
				<li>
					<router-link to="/signup">SignUp</router-link>
				</li>
			</template>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		authenticated: Boolean
	}
}
</script>
