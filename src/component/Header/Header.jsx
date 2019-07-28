import React from 'react';
import s from './Header.module.css'; 
import {NavLink} from "react-router-dom";

const Header =(props)=> {
        return(<header className={s.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/USA_Network_logo_%282006%29.svg/1200px-USA_Network_logo_%282006%29.svg.png" />
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to={'/login'}>Login</NavLink>}
                </div>
             </header>
        )
    }


export default Header;