import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./authReduser";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;