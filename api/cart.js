//https://api.hiskio.com/v2
export default (axios) => ({
  remove(data) {
    return axios.delete("/carts", data);
  },
  add() {
    return axios.post("/carts", data);
  },
});
