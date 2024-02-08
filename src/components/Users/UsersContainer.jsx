import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import axios from "axios";
import {
    setCurrentPage,
    setTotalCount,
    setUsers,
    subscribe,
    unsubscribe,
    toggleIsFetching,
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }


    setCurrentPage(page) {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(page)
                this.props.toggleIsFetching(false)
            })
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
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       setCurrentPage={this.setCurrentPage.bind(this)}
                       unsubscribe={this.unsubscribe.bind(this)}
                       subscribe={this.subscribe.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
})

export default connect(mapStateToProps, {
    setUsers,
    setTotalCount,
    setCurrentPage,
    subscribe,
    unsubscribe,
    toggleIsFetching,
})(UsersContainer)