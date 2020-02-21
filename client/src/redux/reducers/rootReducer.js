import { combineReducers } from "redux";
import confMesgReducer from "./confMesgReducer";

const rootReducer = combineReducers({
  messages: confMesgReducer
});

export default rootReducer;
