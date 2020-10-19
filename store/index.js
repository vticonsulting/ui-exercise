export const state = () => ({
  menuOpen: false,
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen
  },
}
