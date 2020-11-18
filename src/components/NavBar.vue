<template>
	<nav class="nav-bar">
		<ul>
			<template v-if="loggedIn">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/">Profile</router-link>
				</li>
			</template>
			<template v-else>
				<li>
					<router-link to="/login">Login</router-link>
				</li>
				<li>
					<router-link to="/signup">SignUp</router-link>
				</li>
			</template>
		</ul>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'NavBar',
	computed: mapGetters(['loggedIn'])
}
</script>
