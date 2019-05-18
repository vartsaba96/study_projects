import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogsPageReducer";
import {connect} from "react-redux";
import {folowAC, setUsersAC, unfolowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../state/usersPageReducer";
import Users from './Users';
import Axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount(){
     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
 });
    }
    onPageChanged = (pageNumber)=>{
     this.props.setCurrentPage(pageNumber);
     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
 });
    }
     render (){
        return <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        folow={this.props.folow}
        unfolow={this.props.unfolow}
        />
     }
 }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        folow: (userId) => {
            dispatch(folowAC(userId));
        },
        unfolow: (userId) => {
            dispatch(unfolowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);