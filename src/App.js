import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import ProfileContainer from './component/Profile/ProfileContainer';
import Route from "react-router-dom/es/Route";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";

const App = (props) => {
    return (

            <div className="app-wraper">
                <Header className="header"/>
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
                </div>
                </div>

    );
}
export default App;
