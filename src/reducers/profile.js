const profile = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PROFILE':
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        ...action.response
      }
    default:
      return state
  }
}

export default profile
