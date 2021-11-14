<template>
  <nav class="nav-bar">
    <template v-if="true">
      <ul class="nav-bar__items">
        <li>
          <router-link class="nav-bar__link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-bar__link" to="/">Blog</router-link>
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
          <router-link class="nav-bar__link" to="/">Login</router-link>
        </li>
        <li>
          <router-link class="nav-bar__link" to="/">Signup</router-link>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
