import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';

let Users = (props)=>{

let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
let pages = [];
for (let i=1; i<=pagesCount; i++){
    pages.push(i);
}
    return <div>
    <div>
        {pages.map( p=>{
            return <span className={props.currentPage === p && styles.selectedPage}
            onClick = {(e)=>props.onPageChanged(p)}>{p}</span>
        })}
    </div>
{props.users.map(u=> <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small !=null ? u.photos.small :userPhoto } className={styles.userPhoto} />
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