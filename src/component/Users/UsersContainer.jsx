import React from 'react';
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleFollowingProgress, requestUsers} from "../../state/usersPageReducer";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowwingInProgress,getUsers  } from '../../state/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount(){
        let {currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage,pageSize);

    }
    onPageChanged = (pageNumber)=>{
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
        
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