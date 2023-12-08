import userReducer from "./user";
import { combineReducers } from "redux";

export default combineReducers(Object.assign({}, { user: userReducer }));
