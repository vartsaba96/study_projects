import './index.css';
import store from './state/redux-store';
import React from 'react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";

export let renderEntriesTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/></BrowserRouter>, document.getElementById('root'));
}
renderEntriesTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderEntriesTree(state);
});