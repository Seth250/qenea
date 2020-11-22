import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// },
	{
		path: '/signup',
		name: 'SignUp',
		component: SignUp,
		meta: {
			requiresGuest: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			requiresGuest: true
		}
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
	},
	{
		path: '/:username',
		name: 'Profile',
		component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.loggedIn) {
			next()
		} else {
			next({ name: 'Login' })
		}
	} else if (to.matched.some((record) => record.meta.requiresGuest)) {
		if (store.getters.loggedIn) {
			next()
			console.log('loggedIn')
		} else {
			next()
			console.log('not logged In')
		}
	} else {
		next()
	}
})

export default router
