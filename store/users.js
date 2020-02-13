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
    this.$axios
      .post(
        'http://localhost:3085/users/signup',
        {
          userid: payload.userid,
          usertype: payload.usertype,
          password: payload.password,
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          company: payload.company
        },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        commit('setMe', res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  login({ commit }, payload) {
    this.$axios
      .post(
        'http://localhost:3085/users/login',
        {
          userid: payload.userid,
          password: payload.password
        },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        commit('setMe', res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  logout({ commit }) {
    this.$axios
      .post(
        'http://localhost:3085/users/logout',
        {},
        {
          withCredentials: true
        }
      )
      .then((data) => {
        commit('setMe', null)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
