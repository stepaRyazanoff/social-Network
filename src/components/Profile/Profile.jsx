import React from 'react'
import Posts from './Posts/Posts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, dispatch, postText}) => {

    return (
        <>
            <div className={cl.head}><ProfileInfo/></div>
            <Posts posts={posts}
                   dispatch={dispatch}
                   postText={postText}/>
        </>
    )
}

export default Profile
