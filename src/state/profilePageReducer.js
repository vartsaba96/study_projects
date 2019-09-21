import { usersAPI,profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE ='SET_USER_PROFILE'; 
const SET_STATUS ='SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [{id: '1', message: 'hello world!!!', count: '34'},
        {id: '2', message: 'How are you?', count: '35'},
        {id: '3', message: 'Hy guys!!!', count: '36'},
        {id: '4', message: 'I am happy', count: '37'},
    ],
    profile: null,
    status: "",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                count: 0,
            }
            return {
                ...state,
                posts : [...state.posts, newPost],

            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state,  profile: {...state.profile, profile: action.photos}}
        }
        default:
            return state;


}
}
export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile)=> ({type:SET_USER_PROFILE, profile});
export const setStatus = (status)=> ({type:SET_STATUS, status});
export const savePhotoSuccess = (photos)=> ({type:SAVE_PHOTO_SUCCESS, photos});


export const getUserProfile = (userId)=> async(dispatch) =>{
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId)=> async(dispatch) =>{
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}
export const updateStatus = (status)=> async(dispatch) =>{
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode ===0){
        dispatch(setStatus(status));
        }
}
export const savePhoto = (file)=> async(dispatch) =>{
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode ===0){
        dispatch(savePhotoSuccess(response.data.data.photos));
        }
}




export default profileReducer;