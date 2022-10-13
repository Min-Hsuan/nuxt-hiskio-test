export default axios => ({
  login (data) {
    return axios.post('/auth/login', data)
  },
  member () {
    return axios.get('/me')
  }
})
