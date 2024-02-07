import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./PostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";
import Preloader from "../../Common/Preloader/Preloader";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 29961
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => this.props.setUserProfile(response.data))
    }

    render() {
        return (
            <>
                {!this.props.profile
                    ? <Preloader/>
                    : <Profile {...this.props.profile}/>}
            </>
        )
    }

}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default connect
(mapStateToProps, {setUserProfile})
(withRouter(ProfileContainer))
