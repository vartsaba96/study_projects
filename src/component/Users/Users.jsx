import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import { NavLink } from "react-router-dom";
import * as Axios from 'axios';
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.folowwed ?
                        <button disabled={props.followwingInProgress.some(id=>id===u.id)} onClick={() => { 
                            props.toggleFollowingProgress(true, u.id);
                            Axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`,{
                                withCredentials: true,
                                headers: {
                                    "api-key":"12617c6a-70a4-4dea-8437-dd1cdd9881f3"
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0){
                                    props.unfolow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                             }
                        
                        }>Unfollow</button>
                        : <button disabled={props.followwingInProgress.some(id=>id===u.id)} onClick={() => { 
                            props.toggleFollowingProgress(true, u.id);
                            Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    "api-key" : "12617c6a-70a4-4dea-8437-dd1cdd9881f3"
                                }
                            })
                            .then(response => {
                                props.toggleFollowingProgress(true, u.id);
                                if (response.data.resultCode === 0){
                                    props.folow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
            <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </span>
        </div>)
        }

    </div>
}

export default Users;