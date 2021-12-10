<template>
  <article class="question-item">
    <div class="question-item__col-1">
      <div class="question-stat">
        <p class="question-stat__value">{{ numVotes }}</p>
        <p class="question-stat__name">votes</p>
      </div>
      <div class="question-stat">
        <p class="question-stat__value">{{ numAnswers }}</p>
        <p class="question-stat__name">answers</p>
      </div>
    </div>
    <div class="question-item__col-2">
      <div class="question-item__title">
        <router-link :to="{ name: 'QuestionDetail', params: { slug } }">{{ title }}</router-link>
      </div>
      <div class="question-item__description">
        <p>{{ description }}</p>
      </div>
      <div class="question-item__bottom">
        <div>
          <a class="question-tag" href="#" v-for="(tag, index) in tags" :key="index">
            {{ tag }}
          </a>
        </div>
        <div>
          <div></div>
          <div>
            <p>{{ askedBy }}</p>
            <p>{{ formattedDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { formatDate } from '@/utils'

export default {
  name: 'QuestionItem',
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    numVotes: {
      type: Number,
      required: true
    },
    numAnswers: {
      type: Number,
      required: true
    },
    askedBy: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    dateAsked: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate () {
      return formatDate(this.dateAsked)
    }
  }
}
</script>
