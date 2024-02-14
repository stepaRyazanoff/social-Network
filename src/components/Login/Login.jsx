import React from "react"
import cl from './Login.module.css'
import LoginForm from "./LoginForm";

const Login = () => {

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={cl.login}>
            <div className={cl.container}>
                <div className={cl.loginInner}>
                    <h4>Login</h4>
                    <LoginForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Login