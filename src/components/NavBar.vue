<template>
  <nav class="nav-bar">
    <template v-if="isLoggedIn">
      <ul class="nav-bar__items">
        <li>
          <router-link class="nav-bar__link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <a class="nav-bar__link" @click="logout">Logout</a>
        </li>
      </ul>
      <div class="nav-bar__user">
        <div>
        </div>
      </div>
    </template>
    <template v-else>
      <ul class="nav-bar__items">
        <li>
          <router-link class="nav-bar__link" :to="{ name: 'Login' }">Login</router-link>
        </li>
        <li>
          <router-link class="nav-bar__link" :to="{ name: 'SignUp' }">Signup</router-link>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: mapGetters(['isLoggedIn']),
  methods: {
    ...mapActions(['logoutUser']),
    async logout () {
      await this.logoutUser()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
