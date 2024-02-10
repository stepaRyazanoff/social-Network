import React from 'react'
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";
import Preloader from "../../Common/Preloader/Preloader";
import {withRedirect} from "../../hoc/withRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 29961
        }
        this.props.setUserProfile(profileId)
    }

    render() {
        return (
            <>
                {!this.props.profile
                    ? <Preloader/>
                    : <Profile {...this.props.profile} isAuth={this.props.isAuth}/>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default connect
(mapStateToProps, {setUserProfile})
(withRouter(withRedirect(ProfileContainer)))
