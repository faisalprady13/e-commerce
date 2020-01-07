import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //sama kayak ini, (case "SET_CURRENT_USER":)  , karna cuma ngambil string dari exported object types
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
