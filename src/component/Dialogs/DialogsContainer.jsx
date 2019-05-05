import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*
const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (<Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onMessageChange}
            state={state}/>
    )
}

 */
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;