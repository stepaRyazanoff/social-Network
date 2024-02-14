import React from "react"
import Navbar from "./Navbar"
import {connect} from "react-redux"
import {logout} from "../../redux/authReducer"
// import {withRedirect} from "../../hoc/withRedirect"
import {compose} from "redux"

const NavbarContainer = ({logout}) => {

    const logOut = () => {
        logout()
    }

    return (
        <Navbar logOut={logOut}/>
    )
}

export default compose(
    // withRedirect,
    connect(
        null,
        {logout}))
(NavbarContainer)