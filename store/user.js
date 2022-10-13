const getDefaultState = () => {
  return {
    token: null,
    token_type: 'bearer',
    name: null,
    avatar: null
  }
}
export const state = getDefaultState

export const mutations = {
  resetState (state) {
    const initState = getDefaultState()
    Object.keys(initState).forEach(key => state[key] = initState(key))
  },
  setToken (state, payload) {
    state.token = payload.token
    state.token_type = payload.token_type
  }
}
