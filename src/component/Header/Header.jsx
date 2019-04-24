import React from 'react';
import s from './Header.module.css';


class Header extends React.Component {
    render(){
        return(
            <header className={s.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/USA_Network_logo_%282006%29.svg/1200px-USA_Network_logo_%282006%29.svg.png" />
             </header>
        )
    }
}

export default Header;