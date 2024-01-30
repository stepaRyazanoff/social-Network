import React from 'react'
import cl from './Post.module.css'
import image from '../../../../img/images2.png'

const Post = ({ message, likes }) => {
	return (
		<div className={cl.post}>
			<div className={cl.postItem}>
				<img src={image} alt='' />
				<div>
					{message}
					<div className={cl.likes}>
						like
						<span> {likes}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
