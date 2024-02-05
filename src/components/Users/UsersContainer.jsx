import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import  axios from "axios";
import {
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    subscribeAC,
    unsubscribeAC
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    setCurrentPage(page) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${page}`)
            .then((response) => {
                console.log(response)
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(page)
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
})

export default connect(mapStateToProps, {
    setUsers: setUsersAC,
    setTotalCount: setTotalCountAC,
    setCurrentPage: setCurrentPageAC,
    subscribe: subscribeAC,
    unsubscribe: unsubscribeAC
})(UsersContainer)