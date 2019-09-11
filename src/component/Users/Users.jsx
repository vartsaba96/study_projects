import React from 'react';
import {Pagination} from './../common/Pagination/Pagination';
import User from './User';


let Users = ({currentPage,onPageChanged, totalUsersCount, pageSize, users, ...props}) => {


    return(
    <div>
     <Pagination currentPage={currentPage} onPageChanged={onPageChanged} 
                 totalItemsCount={totalUsersCount} pageSize={pageSize}  />
        <div>
        {users.map(u =><User user={u} key={u.id} followwingInProgress={props.followwingInProgress} 
                             unfollow={props.unfollow} follow={props.follow} />
        )
        }
        </div>
    </div>
    )
}

export default Users;