import React from "react"
import cl from './User.module.css'


const User = ({userId, name, photo, status, followed, location, subscribe, unsubscribe}) => {

    const onButtonClickSubscribe = () => {
        subscribe(userId)
    }

    const onButtonClickUnsubscribe = () => {
        unsubscribe(userId)
    }

    return (
        <div className={cl.userItem}>
            <div className={cl.numId}>
                <span>{userId}</span>
            </div>
            <div className={cl.itemAbout}>
                <img src={photo} alt="photoUrl"/>
                <div className={cl.itemName}><h5>{name}</h5></div>
                <div className={cl.itemStatus}>{status}</div>
                {!followed && <button onClick={onButtonClickSubscribe} className={cl.itemBtn}>Подписаться</button>}
                {followed && <button onClick={onButtonClickUnsubscribe} className={cl.itemBtn}>Отписаться</button>}
            </div>
            <div className={cl.itemInfo}>
                <div className={cl.itemInfoCountry}>{location.country},</div>
                <div className={cl.itemInfoCity}>{location.city}</div>
            </div>
        </div>
    )
}

export default User