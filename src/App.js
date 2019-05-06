import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Profile from './component/Profile/Profile';
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
                    <Route path='/profile' render= {() => <Profile store={props.store}
                    />
                    } />
                    <Route path='/messages'render= {()=><DialogsContainer store={props.store} />} />
                    <Route path='/users'render= {()=><UsersContainer />} />
                    <Route path='/news' render= { ()=><News />  } />
                    <Route path='/music' render= { ()=><Music />} />
                    <Route path='/settings' render= { ()=><Settings /> } />
                </div>
                </div>

    );
}
export default App;
