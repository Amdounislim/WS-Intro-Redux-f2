import { combineReducers } from "redux";

import reducerCounter from "./reducerCounter"

const rootReducer = combineReducers({
    reducerCounter: reducerCounter
});

export default rootReducer;
