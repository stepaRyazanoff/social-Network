import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";
import {withRedirect} from "../../hoc/withRedirect";
import Preloader from "../../Common/Preloader/Preloader";
import {setUserProfile} from "../../redux/profileReducer";
import {compose} from "redux";

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

export default compose(withRedirect,withRouter,connect
(mapStateToProps, {setUserProfile}))(ProfileContainer)
