import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogsPageReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {folowAC, setUsersAC, unfolowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../state/usersPageReducer";


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;