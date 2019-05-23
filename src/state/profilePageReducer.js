const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE'; 
let initialState = {
    posts: [{id: '1', message: 'hello world!!!', count: '34'},
        {id: '2', message: 'How are you?', count: '35'},
        {id: '3', message: 'Hy guys!!!', count: '36'},
        {id: '4', message: 'I am happy', count: '37'},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0,
            }
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: '',

            };


        }
        case UPDATE_NEW_POST_TEXT: {
         return {
             ...state,
             newPostText: action.newText,


         };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;


}
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile)=> ({type:SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text)=> ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;