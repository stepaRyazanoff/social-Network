import React from "react"
import cl from './User.module.css'
import unknownPhoto from '../../../assets/img/unknown-photo.webp'
import {NavLink} from "react-router-dom";

const User = ({userId, name, photos: {small}, status, followed, subscribe, unsubscribe}) => {

    const onButtonClickSubscribe = () => {
        subscribe(userId)
    }

    const onButtonClickUnsubscribe = () => {
        unsubscribe(userId)
    }

    const userSmallPhoto = small !== null ? small : unknownPhoto

    return (
        <div className={cl.userItem}>
            <span className={cl.numId}>{userId}</span>
            <div className={cl.userItemPhoto}>
                <NavLink to={`/profile/${userId}`}>
                    <img src={userSmallPhoto} alt="photo"/>
                </NavLink>

            </div>
            <div className={cl.itemAbout}>
                <div className={cl.itemName}>
                    <h5>{name}</h5>
                </div>
                <div className={cl.itemStatus}>{status}</div>
                {!followed && <button onClick={onButtonClickSubscribe} className={cl.itemBtn}>Подписаться</button>}
                {followed && <button onClick={onButtonClickUnsubscribe} className={cl.itemBtn}>Отписаться</button>}
            </div>
        </div>
    )
}

export default User