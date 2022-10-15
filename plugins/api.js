import Auth from "~/api/auth.js";
import Cart from "~/api/cart.js";
import Course from "~/api/course.js";

export default ({ $axios, store, app }, inject) => {
  const request = $axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });
  const factories = {
    auth: Auth(request),
    cart: Cart(request),
    course: Course(request),
  };

  request.onRequest((config) => {
    const cookieToken = app.$cookies.get("auth-token");
    const token = store.getters["user/getToken"];
    if (!cookieToken && token) {
      store.dispatch("user/logout", "連線逾時，請重新登入", { root: true });
      return;
    } else if (token) {
      config.headers.Authorization = cookieToken;
    }
    return config;
  });
  request.onResponse((response) => {
    return response;
  });
  request.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      store.dispatch("user/logout", null, { root: true });
    }
  });
  inject("api", factories);
};
