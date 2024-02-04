import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./PostsContainer";

const Profile = () => {

    return (
        <>
            <div className={cl.head}>
                <ProfileInfo/>
            </div>
            <PostsContainer/>
        </>
    )
}

export default Profile
