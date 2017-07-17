const profile = (state = {}, action) => {
  switch (action.type) {
    case 'PREDICTION_SUCCESS':
      return {
        ...state,
        ...action.response
      }
    default:
      return state
  }
}

export default profile
