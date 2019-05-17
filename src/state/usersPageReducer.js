const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'; 
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';

let initialState = {
   users: [ ],
   pageSize:5,
   totalUsersCount: 0,
   currentPage: 1,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLOW:
           return {
                ...state,
                users: state.users.map((u)=> {
                    if (u.id === action.userId){
                        return {...u, folowwed: true}
                    }
                    return u;
                }),
            }
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map((u)=> {
                    if (u.id === action.userId){
                        return {...u, folowwed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.count}
        default:
            return state;
    }
}
export const folowAC = (userId) => ({type: FOLOW, userId});
export const unfolowAC= (userId)=> ({type: UNFOLOW, userId});
export const setUsersAC=(users)=> ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage)=> ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalUsersCountAC = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})



export default usersReducer;