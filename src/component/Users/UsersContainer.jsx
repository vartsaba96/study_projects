import React from 'react';
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleFollowingProgress, requestUsers} from "../../state/usersPageReducer";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowwingInProgress  } from '../../state/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }
    onPageChanged = (pageNumber)=>{

        this.props.requestUsers(pageNumber, this.props.pageSize);
        
    }
     render (){
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followwingInProgress={this.props.followwingInProgress}
        />  
        </>
     }
 }


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followwingInProgress: state.usersPage.followwingInProgress,
    }
}
*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followwingInProgress: getFollowwingInProgress(state),
    }
}


    export default compose(
        //withAuthRedirect,
        connect(mapStateToProps,
            {follow,unfollow, setCurrentPage,
            toggleFollowingProgress, requestUsers
            }),
    )(UsersContainer);