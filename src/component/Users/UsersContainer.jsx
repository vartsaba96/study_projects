import React from 'react';
import {connect} from "react-redux";
import {folow, setUsers, unfolow, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleFollowingProgress} from "../../state/usersPageReducer";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {usersAPI} from './../../api/api';

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
 });
    }
    onPageChanged = (pageNumber)=>{
    this.props.toggleIsFetching(true);
     this.props.setCurrentPage(pageNumber);
     
     usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
 });
    }
     render (){
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        folow={this.props.folow}
        unfolow={this.props.unfolow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followwingInProgress={this.props.followwingInProgress}
        />  
        </>
     }
 }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followwingInProgress: state.usersPage.followwingInProgress,
    }
}


export default connect(mapStateToProps,{folow,unfolow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);