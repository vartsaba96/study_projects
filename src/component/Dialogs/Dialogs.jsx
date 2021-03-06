import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {reduxForm,Field} from 'redux-form';
import {required,maxLengthCreator} from './../../utils/validators';
import {Textarea} from './../common/formsControls/FormsControls';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let messagesComponent = state.messages.map(me => <Message message={me.message}/>);
    let dialogsComponent = state.dialogs.map(di => <DialogItem name={di.name} id={di.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsItems}>
                {dialogsComponent}

            </div>
            <div className={s.messages}>
                <div>{messagesComponent}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                           validate={[required, maxLength100]}
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
         </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form:"dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;