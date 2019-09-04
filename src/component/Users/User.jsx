import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import { NavLink } from "react-router-dom";



let User = ({ user, followwingInProgress , unfollow, follow, ...props}) => {

    
    return <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.folowwed ?
                        <button disabled={followwingInProgress
                            .some(id=>id===user.id)} onClick={() => {unfollow(user.id);}
                        }>Unfollow</button>
                        : <button disabled={followwingInProgress
                            .some(id=>id===user.id)} onClick={() => { 
                            follow(user.id);}
                            }>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
            <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </span>

    </div>
}

export default User;