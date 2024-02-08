import React from "react"
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setUserPhoto} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                    .then(response => this.props.setUserPhoto(response.data.photos.small))
                const {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
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
        setUserPhoto
    })(HeaderContainer)