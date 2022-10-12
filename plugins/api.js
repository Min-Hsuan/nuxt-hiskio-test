import Auth from "~/api/auth.js";
import Cart from "~/api/cart.js";

export default (context, inject) => {
  const factories = {
    auth: Auth(context.$axios),
    cart: Cart(context.$axios),
  };
  inject("api", factories);
};
