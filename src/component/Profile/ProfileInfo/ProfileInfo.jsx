import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/ava.jpg';

const ProfileInfo =({profile, status, updateStatus, isOwner, savePhoto}) => {

        if (!profile){
            return <Preloader />
        }
        const onMainPhotoSelected = (e) =>{
            if (e.target.files.length){
                savePhoto(e.target.files[0]);
            }
        }
        return (
            <div className={s.Profile_info}>
                <div className={s.discription_block}>
                    <img src = {profile.photos.large ||userPhoto} />
                    { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
                </div>

            </div>
        )
    }

export default ProfileInfo;