import React from "react"
import cn from "classnames"
import {reduxForm} from "redux-form"
import cl from "./LoginForm.module.css"
import {Input} from "../common/FormsControls/FormsControls"
import {createField} from "../../helpers/createField"
import {required} from "../../utils/validators"

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit} className={cn(cl.loginForm, {[cl.summaryError]: error})}>
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
            {error
                ? <span className={cl.errorText}>{error}</span>
                : ''
            }
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