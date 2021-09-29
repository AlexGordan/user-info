import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

export const RootReducer = combineReducers({
    usersReducer,
});
