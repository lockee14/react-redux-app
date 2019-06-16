import { combineReducers } from "redux";
import languagesReducer from "./languagesReducer";
import translateReducer from "./translateReducer";

export default combineReducers({ translate: translateReducer, language: languagesReducer }); // combine multiple reducing function