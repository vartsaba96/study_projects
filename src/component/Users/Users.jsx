import React from 'react';
import styles from './users.module.css';
import Axios from 'axios';
import userPhoto from '../../assets/images/ava.jpg';
const Users = (props) => {
   if (props.users.length===0){
       Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
           props.setUsers(response.data.items);
       });
   }
   return <div>
       {props.users.map(u=> <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small !=null?u.photos.small :userPhoto } className={styles.userPhoto} />
            </div>
            <div>
                {u.folowwed ?
                    <button onClick={()=>{props.unfolow(u.id)}}>Unfollow</button>
                    :<button onClick={()=>{props.folow(u.id)}}>Follow</button>}
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