const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let initialState = {
    posts: [{id: '1', message: 'hello world!!!', count: '34'},
        {id: '2', message: 'How are you?', count: '35'},
        {id: '3', message: 'Hy guys!!!', count: '36'},
        {id: '4', message: 'I am happy', count: '37'},
    ],
    newPostText: 'it-kamasutra.com',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text)=> ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;