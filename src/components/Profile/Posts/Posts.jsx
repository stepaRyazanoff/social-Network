import React from 'react'
import Post from './Post/Post'
import cl from './Posts.module.css'

const Posts = ({posts, addPost, updatePostText, postText}) => {

    const postsElements = posts.map(p => (<Post key={p.id} message={p.message} id={p.id} likes={p.likesCount}/>))

    const onButtonClick = () => {
        addPost()
    }

    const onChangeText = (e) => {
        updatePostText(e.target.value)
    }

    return (
        <div className={cl.posts}>
            <div className={cl.postsTop}>
                <h5>My Posts</h5>
                <div className={cl.postsBox}>
                    <textarea value={postText} placeholder={'Введите текст...'}
                              onChange={onChangeText}></textarea>
                    <button onClick={onButtonClick}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts
