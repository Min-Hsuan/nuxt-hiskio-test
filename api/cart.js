// https://api.hiskio.com/v2
export default (axios) => ({
  remove(data) {
    return axios.delete("/carts", data);
  },
  add(data) {
    return axios.post("/carts", data);
  },
  get() {
    return axios.post("/carts", { items: [] });
  },
});
