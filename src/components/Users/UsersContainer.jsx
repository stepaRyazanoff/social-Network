import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import {
    setCurrentPage,
    setTotalCount,
    setUsers,
    subscribe,
    unsubscribe,
    toggleIsFetching,
    setProcessTheArray,
    setProcessOfDisabling,
} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    setCurrentPage(page) {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, page)
            .then(data => {
                this.props.setUsers(data.items)
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
                       setProcessOfDisabling={this.props.setProcessOfDisabling}
                       setProcessTheArray={this.props.setProcessTheArray}
                       processArray={this.props.processArray}
                       setCurrentPage={this.setCurrentPage.bind(this)}
                       unsubscribe={this.unsubscribe.bind(this)}
                       subscribe={this.subscribe.bind(this)}
                />
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
    processArray: state.usersPage.processArray,
    inProcess: state.usersPage.inProcess,
})

export default connect(mapStateToProps, {
    setUsers,
    setTotalCount,
    setCurrentPage,
    subscribe,
    unsubscribe,
    toggleIsFetching,
    setProcessTheArray,
    setProcessOfDisabling,
})(UsersContainer)