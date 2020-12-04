<template>
	<nav class="nav-bar">
		<ul class="nav-bar__items">
			<template v-if="loggedIn">
				<li>
					<router-link :to="{ name: 'Home' }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Profile', params: { username } }">
						Profile
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Logout' }">Logout</router-link>
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
		<div class="nav-bar__hamburger">
			<div class="block-1"></div>
			<div class="block-1"></div>
			<div class="block-1"></div>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
	name: 'NavBar',
	computed: {
		...mapGetters(['loggedIn']),
		...mapState({
			username: (state) => state.auth.username
		})
	}
}
</script>
