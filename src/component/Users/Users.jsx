import React from 'react';
import styles from './users.module.css';



const Users = (props) => {
   return <div>
       {props.users.map(u=> <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
                {u.folowwed ?
                    <button onClick={()=>{props.unfolow(u.id)}}>Unfollow</button>
                    :<button onClick={()=>{props.folow(u.id)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullname}</div>
                <div>{u.status}</div>
            </span>
        </span>
           <span>
               <div>{u.location.city}</div>
               <div>{u.location.country}</div>
           </span>
       </div>)
       }

   </div>
}


export default Users;