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
        <router-link to="#">{{ title }}</router-link>
      </div>
      <div class="question-item__description">
        <p>{{ description }}</p>
      </div>
      <div class="question-item__bottom">
        <div>
          <a class="question-tag" href="#">python</a>
          <a class="question-tag" href="#">django</a>
          <a class="question-tag" href="#">vue</a>
          <a class="question-tag" href="#">vuex</a>
        </div>
        <div>
          <div></div>
          <div>
            <p>{{ askedBy }}</p>
            <p>{{ Math.floor(Math.random() * 30) + 1 }} mins ago</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'QuestionItem',
  props: {
    title: {
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
    }
  }
}
</script>
