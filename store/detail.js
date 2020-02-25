export const state = () => ({
  page: 'checklist'
})

export const mutations = {
  next(state) {
    state.page = 'join'
  }
}

export const actions = {
  next({ commit }) {
    commit('next')
  }
}
