import React from "react"
import cl from './User.module.css'
import unknownPhoto from '../../../assets/img/unknown-photo.webp'
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = ({
                  userId,
                  name,
                  photos: {small},
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
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            null, {
                headers: {
                    'API-KEY': '9947e954-4f4d-4295-a326-d1a6673e842c'
                },
                withCredentials: true
            }).then(response => {
            if (response.data.resultCode === 0) {
                subscribe(id)
                setProcessOfDisabling(false)
                setProcessTheArray(id)
            }
        })
    }

    const onButtonClickUnsubscribe = (id) => {
        setProcessOfDisabling(true)
        setProcessTheArray(id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                headers: {
                    'API-KEY': '9947e954-4f4d-4295-a326-d1a6673e842c'
                },
                withCredentials: true
            }).then(response => {
            if (response.data.resultCode === 0) {
                unsubscribe(id)
                setProcessOfDisabling(false)
                setProcessTheArray(id)
            }
        })
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