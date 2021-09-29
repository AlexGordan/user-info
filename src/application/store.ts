import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducers/root";
import thunk from "redux-thunk";

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
