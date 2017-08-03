export const BASE_URL = 'http://127.0.0.1:8080/'

function callApi (endpoint, authenticated) {
  const token = localStorage.getItem('id_token') || null
  let config = {}

  if (authenticated) {
    if (token) {
      config = {
        headers: { Authorization: `Bearer ${token}` }
      }
    } else {
      console.error('No token saved!')
      return Promise.reject(new Error('Unauthenticated'))
    }
  }

  return fetch(BASE_URL + endpoint, config).then(response => {
    if (!response.ok && response.status === 401) {
      localStorage.removeItem('id_token')
      return Promise.reject(new Error('Unauthenticated'))
    }

    return response.json()
  })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, types, authenticated } = callAPI

  const [requestType, successType, errorType] = types

  next({
    type: requestType
  })

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error =>
      next({
        error: error.message || 'There was an error.',
        type: errorType
      })
  )
}
