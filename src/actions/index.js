import { CALL_API } from '../middleware/api'

export const authProfile = code => ({
  type: "AUTH_PROFILE",
  code,
})

export const requestProfile = user_id => ({
  type: "REQUEST_PROFILE",
  user_id,
})

export const receiveProfile = json => ({
  type: "RECEIVE_PROFILE",
  profile: json,
  receivedAt: Date.now(),
})

export const receiveToken = json => ({
  type: "RECEIVE_TOKEN",
  token: json.token,
  receivedAt: Date.now(),
})

export const fetchProfile = () => {
  return {
    [CALL_API]: {
      endpoint: 'profile',
      authenticated: true,
      types: ["PROFILE_REQUEST", "PROFILE_SUCCESS", "PROFILE_FAILURE"]
    }
  }
}

export const fetchPrediction = () => {
  console.error(2)
  return {
    [CALL_API]: {
      endpoint: 'predict-me',
      authenticated: true,
      types: ["PREDICTION_REQUEST", "PREDICTION_SUCCESS", "PREDICTION_FAILURE"]
    }
  }
}

export const requestAuthProfile = code => dispatch => {
  dispatch(authProfile(code))
  return fetch("http://127.0.0.1:4000/auth/vk/callback?code=" + code)
    .then(response => response.json()
    .then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(json.message))
        return Promise.reject(json.token)
      } else {
        // If login was successful, set the token in local storage
        localStorage.setItem("id_token", json.token)

        // Dispatch the success action
        dispatch(receiveLogin(json.token))
      }
    })
    .then(() => dispatch(fetchProfile()))
    .catch(err => console.log("Error: ", err))
}

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem("id_token")
    dispatch(receiveLogout())
  }
}
