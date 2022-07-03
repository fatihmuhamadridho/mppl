import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialSate = {};
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialSate,
    composeWithDevTools(applyMiddleware(...middleware))
)

export type RootState = ReturnType<typeof store.getState>
export type TypedDispatch = typeof store.dispatch