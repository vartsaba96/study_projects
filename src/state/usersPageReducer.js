const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS='SET_USERS';

let initialState = {
   users: [ ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}
export const folowAC = (userId) => ({type: FOLOW, userId});
export const unfolowAC= (userId)=> ({type: UNFOLOW, userId});
export const setUsersAC=(users)=> ({type: SET_USERS, users});



export default usersReducer;