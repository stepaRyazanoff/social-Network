import React from "react"
import cl from './Users.module.css'
import User from "./User/User"

const Users = ({users, subscribe, unsubscribe}) => {
    return (
        <div className={cl.users}>
            <div className={cl.inner}>
                {users.map(u => <User key={u.id}
                                      userId={u.id}
                                      photo={u.photoUrl}
                                      followed={u.followed}
                                      name={u.fullName}
                                      status={u.status}
                                      location={u.location}
                                      subscribe={subscribe}
                                      unsubscribe={unsubscribe}
                />)}
            </div>
        </div>
    )
}

export default Users