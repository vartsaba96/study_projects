import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";

let store = {
    _state : {
        dialogsPage: {
            dialogs: [{id: '1', name: 'Vasya'},
                {id: '1', name: 'Vadim'},
                {id: '1', name: 'Dima'}
            ],
            messages: [{id: 1, message: "Hello world"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Hey"}],
            newMessageBody:'',

        },
        profilePage: {
            posts: [{id: '1', message: 'hello world!!!', count: '34'},
                {id: '2', message: 'How are you?', count: '35'},
                {id: '3', message: 'Hy guys!!!', count: '36'},
                {id: '4', message: 'I am happy', count: '37'},
            ],
            newPostText: 'it-kamasutra.com',
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log('State chenged');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
/*
    addPost(){
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            count:0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText=newText;
        this._callSubscriber(this._state);
    },

 */
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
        }
    }





export default store;
window.store=store;