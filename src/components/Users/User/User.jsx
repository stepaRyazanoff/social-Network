import React from "react"
import cl from './User.module.css'
import unknownPhoto from '../../../assets/img/unknown-photo.webp'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = ({
                  name,
                  photos: {small},
                  userId,
                  status,
                  followed,
                  subscribe,
                  unsubscribe,
                  processArray,
                  setProcessTheArray,
                  setProcessOfDisabling,
              }) => {

    const onButtonClickSubscribe = (id) => {
        setProcessOfDisabling(true)
        setProcessTheArray(id)
        usersAPI.setSubscribe(id)
            .then(response => {
                subscribe(id)
                setProcessOfDisabling(false)
                setProcessTheArray(id)
            })
    }

    const onButtonClickUnsubscribe = (id) => {
        setProcessOfDisabling(true)
        setProcessTheArray(id)
        usersAPI.deleteSubscribe(id)
            .then(response => {
                unsubscribe(id)
                setProcessOfDisabling(false)
                setProcessTheArray(id)
            })
    }

    const userSmallPhoto = small !== null ? small : unknownPhoto

    return (
        <div className={cl.userItem}>
            <span className={cl.numId}>{userId}</span>
            <div className={cl.userItemPhoto}>
                <NavLink to={`/profile/${userId}`}>
                    <img src={userSmallPhoto} alt=""/>
                </NavLink>
            </div>
            <div className={cl.itemAbout}>
                <div className={cl.itemName}>
                    <h5>{name}</h5>
                </div>
                <div className={cl.itemStatus}>{status}</div>
                {!followed && <button
                    disabled={processArray.some(u => u === userId)}
                    onClick={() => {
                        onButtonClickSubscribe(userId)
                    }}
                    className={cl.itemBtn}>
                    Подписаться
                </button>}
                {followed && <button
                    disabled={processArray.some(u => u === userId)}
                    onClick={() => {
                        onButtonClickUnsubscribe(userId)
                    }}
                    className={cl.itemBtn}>
                    Отписаться
                </button>}
            </div>
        </div>
    )
}

export default User