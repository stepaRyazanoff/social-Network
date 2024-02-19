import React, {useState} from 'react'
import cl from './ProfileInfo.module.css'
import image from '../../../assets/img/unknown-photo.webp'
import ProfileStatus from "../ProfileStatus/ProfileStatus"
import cn from "classnames"

const ProfileInfo = ({
                         photos: {large},
                         fullName,
                         lookingForAJob,
                         lookingForAJobDescription,
                         aboutMe,
                         contacts,
                         userStatus,
                         updateStatus,
                         isOwner,
                         setUserPhoto
                     }) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onSelectFile = (e) => {
        if (e.target.files.length) setUserPhoto(e.target.files[0])
    }

    const userLargePhoto = !large ? image : large

    return (
        <div className={cl.profileInfo}>
            <div className={cl.profileInfoInner}>
                <div className={cl.head}>
                    <img src={userLargePhoto}
                         onDoubleClick={activateEditMode}
                         onClick={deactivateEditMode}
                         alt=""/>
                    {isOwner &&
                        <div className={cn(cl.inputFile, {[cl.active]: editMode})}>
                            <label className={cl.labelInputFile}>
                                выберите файл
                                <input onChange={onSelectFile} type="file"/>
                            </label>
                        </div>}
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
