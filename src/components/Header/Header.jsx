import React from 'react'
import cl from './Header.module.css'

const Header = () => {
	return (
		<header className={cl.header}>
			<div>
				<div>
					<a href='/#'>socialNetwork</a>
				</div>
			</div>
		</header>
	)
}

export default Header
