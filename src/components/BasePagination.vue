<template>
  <div class="pagination" v-if="numPages > 1">
    <!-- so that we can remove the default router-link-active classes -->
    <router-link
      :to="pageQuery(currentPage - 1)"
      v-slot="{ href, navigate }"
      custom>
      <a
        v-show="currentPage > 1"
        :href="href"
        @click="navigate"
        class="pagination__link pagination__link--lg"
      >
        <BaseIcon name="left-caret" />
        <span>Prev</span>
      </a>
    </router-link>

    <router-link
      v-for="page in numPages"
      :key="page"
      :to="pageQuery(page)"
      v-slot="{ href, navigate }"
      custom
    >
      <a
        v-bind="isLinkActive(page) ? { 'aria-current': 'page' } : ''"
        :href="href"
        @click="navigate"
        :class="['pagination__link', { 'pagination__link--active': isLinkActive(page) }]"
      >
        {{ page }}
      </a>
    </router-link>

    <router-link
      :to="pageQuery(currentPage + 1)"
      v-slot="{ href, navigate }"
      custom
    >
      <a
        v-show="currentPage < numPages"
        :href="href"
        @click="navigate"
        class="pagination__link pagination__link--lg"
      >
        <span>Next</span>
        <BaseIcon name="right-caret" />
      </a>
    </router-link>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'BasePagination',
  props: {
    count: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: parseInt(process.env.VUE_APP_PAGE_SIZE)
    }
  },
  components: {
    BaseIcon
  },
  computed: {
    numPages () {
      return Math.ceil(this.count / this.perPage)
    }
  },
  methods: {
    pageQuery (page) {
      return {
        query: { page }
      }
    },
    isLinkActive (page) {
      return page === this.currentPage
    }
  }
}
</script>
