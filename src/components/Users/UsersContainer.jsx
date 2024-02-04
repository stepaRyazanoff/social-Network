import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import {setUsersAC, subscribeAC, unsubscribeAC} from "../../redux/usersReducer";
import userPhoto from "../../img/photo-post.png";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.setUsers([
            {
                id: 1,
                followed: true,
                photoUrl: userPhoto,
                fullName: 'Алексей Ванючий',
                status: 'Hello world',
                location: {country: 'russia', city: 'krsk'}
            },
            {
                id: 2,
                followed: false,
                photoUrl: userPhoto,
                fullName: 'Денис Повисов',
                status: 'Hello all',
                location: {country: 'russia', city: 'kmr'}
            },
            {
                id: 3,
                followed: false,
                photoUrl: userPhoto,
                fullName: 'Олег Жульба',
                status: 'Hello ',
                location: {country: 'russia', city: 'nvkz'}
            },
        ])
    }

    subscribe(userId) {
        this.props.subscribe(userId)
    }

    unsubscribe(userId) {
        this.props.unsubscribe(userId)
    }

    render() {
        return (
            <>
                <Users users={this.props.users}
                       unsubscribe={this.unsubscribe.bind(this)}
                       subscribe={this.subscribe.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
})

export default connect(mapStateToProps, {
    setUsers: setUsersAC,
    subscribe: subscribeAC,
    unsubscribe: unsubscribeAC
})(UsersContainer)