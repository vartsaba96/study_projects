import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo =(props) => {
    
        if (!props.profile){
            return <Preloader />
        }
        return (
            <div className={s.Profile_info}>
                <div className={s.discription_block}>
                    <img src = {props.profile.photos.large} />
                    ava+discription
                </div>

            </div>
        )
    }

export default ProfileInfo;