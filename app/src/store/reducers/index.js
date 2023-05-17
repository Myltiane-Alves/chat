import { combineReducers } from "redux";

import authReducer from "./authReducer";
import chatReducer from "./chatUserReducer";

export const reducers = combineReducers({authReducer, chatReducer})