const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS='SET_USERS';

let initialState = {
   users: [
       {id:1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLaYWwpAG6Jpw9v1pEGn_l_EMK6MKUfq34dDFiRg45z_pb_1X',
           folowwed:true, fullname:'Pavlo V', status:'Just happy', location: { country:'Ukraine', city:'Kyiv'}},
       {id:2,
           photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TCGjx9inw7zgX08bGQhUmGoNT1U_LqdhRVmM5rtdcZLUTLkH5w',
           folowwed:false,fullname:'Dima D', status:'Just happy for fun', location: { country:'Ukraine', city:'Kharkiv'}},
       {id:3,
           photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcdejCAtD-QIefUKZpNEIWgg00oUDXbimTncg0dgpaE2SkLfD',
           folowwed:false,fullname:'Vitalik S', status:'I am sad', location: { country:'Ukraine', city:'Donetsk'}}
   ]
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