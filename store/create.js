export const state = () => ({
  step: 1
})

export const mutations = {
  prevStep(state) {
    state.step--
  },
  nextStep(state) {
    state.step++
  }
}

export const actions = {
  prevStep({ commit }) {
    commit('prevStep')
  },
  nextStep({ commit }) {
    commit('nextStep')
  }
}
