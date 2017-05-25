const profile = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_PROFILE":
      return {
        ...state,
        ...action.profile
      };
    default:
      return state;
  }
};

export default profile;
