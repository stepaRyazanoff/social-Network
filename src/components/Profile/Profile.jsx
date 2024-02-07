import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./PostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo {...props}/>
            <PostsContainer/>
        </>
    )
}

export default Profile
