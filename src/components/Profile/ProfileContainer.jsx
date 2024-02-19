import React from 'react'
import {compose} from "redux"
import Profile from "./Profile"
import {connect} from "react-redux"
import {withRouter} from "../../hoc/withRouter"
import Preloader from "../common/Preloader/Preloader"
import {withRedirect} from "../../hoc/withRedirect"
import {
    getUserStatus, setPhoto,
    setUserProfile,
    updateUserStatus
} from "../../redux/profileReducer"

class ProfileContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.router.params.profileId
        if (!profileId) profileId = this.props.authorizedId
        this.props.setUserProfile(profileId)
        this.props.getUserStatus(profileId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.profileId !== this.props.router.params.profileId) {
            this.refreshProfile()
        }
    }

    updateStatus(newStatus) {
        this.props.updateUserStatus(newStatus)
    }

    setUserPhoto(photoPile) {
        this.props.setPhoto(photoPile)
    }

    render() {
        return (
            <>
                {!this.props.profile
                    ? <Preloader/>
                    : <Profile isOwner={!this.props.router.params.profileId}
                               setUserPhoto={this. setUserPhoto.bind(this)}
                               {...this.props.profile}
                               isAuth={this.props.isAuth}
                               userStatus={this.props.userStatus}
                               updateStatus={this.updateStatus.bind(this)}/>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.status,
    authorizedId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    withRedirect,
    connect
    (mapStateToProps,
        {
            getUserStatus,
            setUserProfile,
            updateUserStatus,
            setPhoto,
        }))(ProfileContainer)
