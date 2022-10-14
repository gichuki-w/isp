import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "DATAFROMAPP":
      return {
        user: action.payload.user,
        role: action.payload.role,
        message: action.payload.message,
      }

    default:
      return state;
  }
};


export default reducer
