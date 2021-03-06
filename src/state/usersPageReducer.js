import {usersAPI} from './../api/api';
import {updateObjectInArray} from './../utils/object-helpers';


const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'; 
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [ ],
   pageSize:10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followwingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLOW:
           return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {folowwed: true} ),
                /*/
                users: state.users.map((u)=> {
                    if (u.id === action.userId){
                        return {...u, folowwed: true}
                    }
                    return u;
                }),
                */
            }
        case UNFOLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {folowwed: false} ),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                followwingInProgress: action.isFetching 
                ? [...state.followwingInProgress, action.userId] 
                : state.followwingInProgress.filter(id=>id!=action.userId)}
        default:
            return state;
    }
}
export const folowSuccess = (userId) => ({type: FOLOW, userId});
export const unfolowSuccess = (userId)=> ({type: UNFOLOW, userId});
export const setUsers=(users)=> ({type: SET_USERS, users});
export const setCurrentPage = (currentPage)=> ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalUsersCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount});
export const toggleIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId)=>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) =>{

return async(dispatch) =>{
    
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
     dispatch(toggleIsFetching(false));
     dispatch(setUsers(data.items));
     dispatch(setTotalUsersCount(data.totalCount));
}
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId));
            let response = await apiMethod(userId)
                 dispatch(toggleFollowingProgress(true, userId));
                 if (response.data.resultCode === 0){
                     dispatch(actionCreator(userId));
                 }
                 dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId) =>{

    return async(dispatch) =>{
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(this), folowSuccess);
    }
}
    export const unfollow = (userId) =>{

        return async(dispatch) =>{
            followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(this), unfolowSuccess);
        }
    }
export default usersReducer;