import React from 'react'
import cl from './ProfileInfo.module.css'
import image from '../../../assets/img/unknown-photo.webp'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({
                         photos: {large},
                         fullName,
                         lookingForAJob,
                         lookingForAJobDescription,
                         aboutMe,
                         contacts,
                         userStatus,
                         updateStatus
                     }) => {

    const userLargePhoto = !large ? image : large

    return (
        <div className={cl.profileInfo}>
            <div className={cl.profileInfoInner}>
                <div className={cl.head}>
                    <img src={userLargePhoto} alt=""/>
                    <div className={cl.headName}>{fullName}</div>
                </div>
                <ProfileStatus userStatus={userStatus} updateStatus={updateStatus}/>
                <div className={cl.content}>
                    <div className={cl.about}>About me: {aboutMe}</div>
                    <div className={cl.job}>lookingForAJob: {lookingForAJob}</div>
                    <div className={cl.jobDesc}>lookingForAJobDescription: {lookingForAJobDescription}</div>
                </div>
                <div className={cl.contacts}></div>
            </div>
        </div>
    )
}

export default ProfileInfo
