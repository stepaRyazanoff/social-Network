import React from 'react'
import Post from './Post/Post'
import cl from './Posts.module.css'
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";

const Posts = (props) => {

    const postsElements = props.posts.map(p => (<Post key={p.id} message={p.message} id={p.id} likes={p.likesCount}/>))

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChangeText = (e) => {
        props.dispatch(updatePostTextAC(e.target.value))
    }

    return (
        <div className={cl.posts}>
            <div className={cl.postsTop}>
                <h5>My Posts</h5>
                <div className={cl.postsBox}>
                    <textarea value={props.postText} placeholder={'Введите текст...'}
                              onChange={onChangeText}></textarea>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts
