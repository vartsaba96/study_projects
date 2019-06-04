import React from 'react';
import {connect} from "react-redux";
import {folow, setUsers, unfolow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../state/usersPageReducer";
import Users from './Users';
import * as Axios from 'axios';
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
    }
}


export default connect(mapStateToProps,{folow,unfolow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);