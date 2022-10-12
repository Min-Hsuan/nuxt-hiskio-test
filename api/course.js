export default (axios) => ({
  fundraise() {
    return axios.get("/courses/fundraising", data);
  },
});
