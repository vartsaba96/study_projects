import {combineReducers, createStore, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./authReduser";
import appReduser from "./appReduser";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReduser,
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;


export default store;