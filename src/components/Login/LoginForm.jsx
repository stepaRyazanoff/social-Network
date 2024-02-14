import React from "react"
import cl from "./LoginForm.module.css"
import {reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {createField} from "../../helpers/createField"
import {required} from "../../utils/validators"

const LoginForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={cl.loginForm}>
            {createField(
                'login',
                required,
                'loginInput',
                Input,
                'login',
                'text')}
            {createField(
                'password',
                required,
                'loginInput',
                Input,
                'password',
                'password')}
            {createField(
                'rememberMe',
                required,
                null,
                Input,
                null,
                'checkbox',
                true,
                'remember me',
                'checkbox')}
            <button className={cl.loginBtn}>Login</button>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)