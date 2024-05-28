/* eslint-disable linebreak-style */
import { combineReducers } from "redux";
import wordReducer from "./word";

const reducer = combineReducers({
    viewChallange: wordReducer
});

export default reducer;