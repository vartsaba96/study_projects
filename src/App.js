import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import ProfileContainer from './component/Profile/ProfileContainer';
import {Route, withRouter} from 'react-router-dom';
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {initializeApp} from './state/appReduser';
import {connect} from "react-redux";
import { compose } from 'redux';
import Preloader from './component/common/preloader/Preloader';
import {BrowserRouter} from "react-router-dom";
import store from './state/redux-store';
import {Provider} from "react-redux";


class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp();
    }
    render(){
        if(!this.props.initialized){
        return <Preloader />
        } else{
    return (
            <div className="app-wraper">
                <HeaderContainer className="header"/>
                <Navbar className="navbar"/>
                <div className="app-wraper-content">
                    <Route path='/profile/:userId?' 
                        render= {() => <ProfileContainer />} />
                    <Route path='/messages' 
                        render= { ()=><DialogsContainer />} />
                    <Route path='/users'
                        render= { ()=><UsersContainer />} />
                    <Route path='/news' 
                        render= { ()=><News />  } />
                    <Route path='/music' 
                        render= { ()=><Music />} />
                    <Route path='/settings' 
                    render= { ()=><Settings /> } />
                     <Route path='/login' 
                    render= { ()=><Login /> } />
                </div>
                </div>

    );
}
}
}
const mapStateToProps = (state)=> ({
    initialized: state.app.initialized,
});
let AppContainer=  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

 const MainApp = (props) =>{
        return  <BrowserRouter>
        <Provider store={store}>
        <AppContainer />
        </Provider>
        </BrowserRouter>
    }

export default MainApp;