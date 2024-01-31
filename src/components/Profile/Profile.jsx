import React from 'react'
import Posts from './Posts/Posts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, addPost, updatePostText, postText}) => {

    return (
        <>
            <div className={cl.head}><ProfileInfo/></div>
            <Posts posts={posts}
                   addPost={addPost}
                   updatePostText={updatePostText}
                   postText={postText}/>
        </>
    )
}

export default Profile
