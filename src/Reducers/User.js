
const reducer = (state, action) => {
  switch (action.type) {
    case "DATAFROMAPP":
      return {
        user: action.payload.user,
        redirect: action.payload.redirect,
        message: action.payload.message,
      }

    default:
      return state;
  }
};

export default reducer
