import React from 'react'
import Post from './Post/Post'
import cl from './Posts.module.css'

const Posts = ({posts}) => {

    const elementValueRef = React.createRef()
    const postsElements = posts.map(p => (<Post key={p.id} message={p.message} id={p.id} likes={p.likesCount}/>))

    const addPost = () => {
        console.log(elementValueRef.current.value)
    }

    return (
        <div className={cl.posts}>
            <div className={cl.postsTop}>
                <h5>My Posts</h5>
                <textarea ref={elementValueRef}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default Posts
