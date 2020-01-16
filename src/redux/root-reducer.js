import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//local storage on windows
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});

//same root reducer but has persist capability
export default persistReducer(persistConfig, rootReducers);
