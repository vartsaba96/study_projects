import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let messagesComponent = state.messages.map(me => <Message message={me.message}/>);
    let dialogsComponent = state.dialogs.map(di => <DialogItem name={di.name} id={di.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsItems}>
                {dialogsComponent}

            </div>
            <div className={s.messages}>
                <div>{messagesComponent}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;