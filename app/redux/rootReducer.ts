import { combineReducers } from "redux";
import carReducer from "./reducers/car";

const rootReducer = combineReducers({
    carReducer,
})

export default rootReducer;