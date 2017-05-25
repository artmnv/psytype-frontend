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

export const fetchProfile = () => dispatch => {
  dispatch(requestProfile())
  return fetch(`http://127.0.0.1:3000/user.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveProfile(json)))
}

export const requestAuthProfile = code => dispatch => {
  dispatch(authProfile(code))
  return fetch(`http://127.0.0.1:3000/user_auth.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveProfile(json)))
}
