import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogsPageReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {folowAC, setUsersAC, unfolowAC} from "../../state/usersPageReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;