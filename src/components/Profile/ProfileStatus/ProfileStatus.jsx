import React, {useEffect, useState} from "react"
import cl from './ProfileStatus.module.css'

const ProfileStatus = ({userStatus, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(userStatus)

    useEffect(() => {
        setStatus(userStatus)
    }, [userStatus])

    const onDoubleClicked = () => {
        setEditMode(true)
    }

    const sendStatus = () => {
        setEditMode(false)
        updateStatus(status)
    }

    const onTextChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={cl.status}>
            <div className={cl.statusInner}>
                {!editMode
                    && <span onDoubleClick={onDoubleClicked}>
                        {userStatus || 'status'}</span>}
                {editMode
                    && <input autoFocus
                              onBlur={sendStatus}
                              onChange={onTextChange}
                              value={status} type="text"/>}
            </div>
        </div>
    )
}

export default ProfileStatus