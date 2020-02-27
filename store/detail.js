export const state = () => ({
  page: 'checklist',
  selected: 'brief'
})

export const mutations = {
  next(state) {
    state.page = 'join'
  },
  brief(state) {
    state.selected = 'brief'
  },
  view(state) {
    state.selected = 'view'
  },
  join(state) {
    state.selected = 'join'
  },
  choice(state) {
    state.selected = 'choice'
  }
}
