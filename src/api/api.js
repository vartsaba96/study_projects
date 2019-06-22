import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key":"12617c6a-70a4-4dea-8437-dd1cdd9881f3",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10 ){

        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
         {
        }).then(response => response.data);
    
    },
    follow (userId) {
        return  instance.post(`follow/${userId}`)
    },
    unfollow (userId){
        return instance.delete(`unfollow/${userId}`);
    },
    getProfile(userId){
        return instance.get(`profile/`+ userId);
      
    }
    }

export const authAPI = {
        me(){
        return instance.get(`auth/me`);
        }       
        } 
    