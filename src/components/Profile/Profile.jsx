import React from 'react'
import Posts from './Posts/Posts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./PostsContainer";
// {posts, dispatch, postText}
const Profile = ({store}) => {

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
