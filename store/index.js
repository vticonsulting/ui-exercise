export const state = () => ({
  menuOpen: false,
})

export const mutations = {
  toggleMenu(state) {
    state.menuOpen = !state.menuOpen
  },
  openMenu(state) {
    state.menuOpen = true
  },
  closeMenu(state) {
    state.menuOpen = false
  },
}
