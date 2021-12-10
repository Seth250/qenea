<template>
  <div class="question-container">
    <div class="create-box">
      <router-link to="#" class="create-box__link">
        <BaseIcon name="add" class="create-box__icon" />
        <span class="create-box__text">Ask Question</span>
      </router-link>
    </div>
    <QuestionItem
      v-for="(question, index) in pageQuestions"
      :key="index"
      :title="question.title"
      :description="question.description"
      :slug="question.slug"
      :num-votes="question.total_points"
      :num-answers="question.total_answers"
      :asked-by="question.user.username"
      :tags="question.tags"
      :dateAsked="question.created_at"
    />
    <BasePagination :count="totalQuestions" :current-page="pageNumber" />
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import BasePagination from '@/components/BasePagination.vue'
import QuestionItem from '@/components/QuestionItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    BaseIcon,
    BasePagination,
    QuestionItem
  },
  data () {
    return {
      pageNumber: 0
    }
  },
  watch: {
    // using watch so that the page questions always update upon route change (even during arrow navigation)
    $route: {
      immediate: true, // so it is called when the component is mounted
      async handler (newRoute) {
        try {
          this.pageNumber = +newRoute.query.page || 1
          await this.fetchPageQuestions(this.pageNumber)
        } catch (err) {
          if (err.response) {
            console.log(err.response.data)
          }
        }
      }
    }
  },
  methods: {
    ...mapActions(['fetchPageQuestions'])
  },
  computed: {
    ...mapGetters(['pageQuestions', 'totalQuestions'])
  }
}
</script>
