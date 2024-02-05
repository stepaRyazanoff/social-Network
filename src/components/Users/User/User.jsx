import React from "react"
import cl from './User.module.css'
import unknownPhoto from '../../../assets/img/unknown-photo.webp'

const User = ({userId, name, photos: {small, large}, status, followed, subscribe, unsubscribe}) => {

    const onButtonClickSubscribe = () => {
        subscribe(userId)
    }

    const onButtonClickUnsubscribe = () => {
        unsubscribe(userId)
    }

    const userLargePhoto = large !== null ? large : unknownPhoto

    return (
        <div className={cl.userItem}>
            <span className={cl.numId}>{userId}</span>
            <div className={cl.userItemPhoto}>
                <img src={userLargePhoto} alt="photo"/>
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