import React from "react"
import {login} from "../../redux/authReducer"
import {connect} from "react-redux"
import Login from "./Login"
import {compose} from "redux"
import {Navigate} from "react-router"

const LoginContainer = (props) => {

    const logIn = (login, password, rememberMe) => {
        props.login(login, password, rememberMe)
    }

    return (
        <>
            {props.isAuth && <Navigate to={'/profile'}/>}
            <Login logIn={logIn}/>
        </>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default compose(connect
(mapStateToProps,
    {login}))
((LoginContainer))
