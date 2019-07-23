const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [{id: '1', name: 'Vasya'},
        {id: '1', name: 'Vadim'},
        {id: '1', name: 'Dima'}
    ],
    messages: [{id: 1, message: "Hello world"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hey"}],
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let messageBody = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages,{id: '6', message: messageBody}],
            };

        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});





export default dialogsReducer;