import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo =({profile, status, updateStatus}) => {
    
        if (!profile){
            return <Preloader />
        }
        return (
            <div className={s.Profile_info}>
                <div className={s.discription_block}>
                    <img src = {profile.photos.large} />
                    <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
                </div>

            </div>
        )
    }

export default ProfileInfo;