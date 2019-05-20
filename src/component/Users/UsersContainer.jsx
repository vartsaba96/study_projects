import React from 'react';
import {connect} from "react-redux";
import {folow, setUsers, unfolow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../state/usersPageReducer";
import Users from './Users';
import Axios from 'axios';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
 });
    }
    onPageChanged = (pageNumber)=>{
    this.props.toggleIsFetching(true);
     this.props.setCurrentPage(pageNumber);
     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false);
         this.props.setUsers(response.data.items);
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