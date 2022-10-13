import Auth from '~/api/auth.js'
import Cart from '~/api/cart.js'
import Course from '~/api/course.js'

export default ({ $axios }, inject) => {
  const request = $axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const factories = {
    auth: Auth(request),
    cart: Cart(request),
    course: Course(request)
  }

  request.onRequest((config) => {
    return config
  })
  request.onResponse((response) => {
    return response
  })
  request.onError((error) => {
    return error
  })
  inject('api', factories)
}
