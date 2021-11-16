<template>
  <nav class="nav-bar">
    <template v-if="loggedIn">
      <ul class="nav-bar__items">
        <li>
          <router-link class="nav-bar__link" to="#">Home</router-link>
        </li>
        <li>
          <router-link class="nav-bar__link" to="#">Blog</router-link>
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
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: mapGetters(['loggedIn'])
}
</script>
