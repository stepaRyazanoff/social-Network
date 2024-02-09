import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(authData => {
                authAPI.getAuthPhoto(authData.id)
                    .then(photo => {
                        const {id, login, email} = authData
                        this.props.setAuthUserData(id, login, email)
                        this.props.setAuthUserPhoto(photo)
                    })
            })
    }

    render() {
        return (
            <Header id={this.props.id}
                    login={this.props.login}
                    email={this.props.email}
                    userPhoto={this.props.userPhoto}
                    isAuth={this.props.isAuth}
            />
        )
    }
}

const mapStateToProps = state => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    userPhoto: state.auth.userPhoto,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps,
    {
        setAuthUserData,
        setAuthUserPhoto
    })(HeaderContainer)