import React from 'react'
import cl from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const setActive = ({isActive}) => (isActive ? 'active-link' : '')

    return (
        <aside className={cl.sidebar}>
            <nav className={cl.menu}>
                <ul>
                    <li>
                        <NavLink to='/profile' className={setActive}>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' className={setActive}>
                            Dialogs
                        </NavLink>
                    </li>
                    <li>
                        <a href='/#'>News</a>
                    </li>
                    <li>
                        <a href='/#'>Music</a>
                    </li>
                    <li>
                        <a href='/#'>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar
