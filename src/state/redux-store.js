import {combineReducers, createStore, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./authReduser";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;


export default store;