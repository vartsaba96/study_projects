import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
    render() {
        return (
            <div className={s.Profile_info}>
                <div className={s.discription_block}>
                    ava+discription
                </div>

            </div>
        )
    }
}

export default ProfileInfo;