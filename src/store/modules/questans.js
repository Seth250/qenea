import axiosBase from '@/api'

const state = {
  questions: [],
  totalQuestions: 0
}

const getters = {
  pageQuestions: state => state.questions,
  totalQuestions: state => state.totalQuestions
}

const actions = {
  async fetchPageQuestions ({ commit }, pageNumber) {
    const params = {}
    if (pageNumber > 1) {
      params.page = pageNumber
    }
    const { data } = await axiosBase.get('questions', { params })
    commit('setPageQuestions', data)
  }
}

const mutations = {
  setPageQuestions (state, { results, count }) {
    state.questions = results
    state.totalQuestions = count
  }
}

export default {
  state: () => state,
  actions,
  getters,
  mutations
}
