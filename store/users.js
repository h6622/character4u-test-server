export const state = () => ({
  me: null
})

export const mutations = {
  setMe(state, payload) {
    state.me = payload
  }
}

export const actions = {
  signup({ commit }, payload) {
    commit('setMe', payload)
    console.log(payload)
  }
}
