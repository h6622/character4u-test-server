export const state = () => ({
  lists: [
    { index: 0, clicked: '#F0F0F0' },
    { index: 1, clicked: '#F0F0F0' },
    { index: 2, clicked: '#F0F0F0' },
    { index: 3, clicked: '#F0F0F0' },
    { index: 4, clicked: '#F0F0F0' },
    { index: 5, clicked: '#F0F0F0' },
    { index: 6, clicked: '#F0F0F0' },
    { index: 7, clicked: '#F0F0F0' },
    { index: 8, clicked: '#F0F0F0' }
  ]
})

export const mutations = {
  clickStar(state, payload) {
    state.lists[payload.index].clicked = '#8241fa'
  },
  canselStar(state, payload) {
    state.lists[payload.index].clicked = '#F0F0F0'
  }
}
