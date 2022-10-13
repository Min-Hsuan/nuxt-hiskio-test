const getDefaultState = () => {
  return {
    type: 'error', // error/success/pending
    message: null
  }
}

export const state = getDefaultState

export const mutations = {
  setMessage (state, payload) {
    state.type = payload.type
    state.message = payload.message
  }
}
