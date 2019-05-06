import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;