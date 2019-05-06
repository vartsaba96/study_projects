const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let initialState = {
    dialogs: [{id: '1', name: 'Vasya'},
        {id: '1', name: 'Vadim'},
        {id: '1', name: 'Dima'}
    ],
    messages: [{id: 1, message: "Hello world"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hey"}],
    newMessageBody:'',
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
           return {
                ...state,
                newMessageBody:action.messageBody,
            };

        }
        case SEND_MESSAGE: {
            let messageBody = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id: '6', message: messageBody}],
            };

        }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (messageBody)=> ({
    type: UPDATE_NEW_MESSAGE_BODY,
    messageBody: messageBody
});




export default dialogsReducer;