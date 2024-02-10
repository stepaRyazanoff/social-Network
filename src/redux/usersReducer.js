import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS'
const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page})
const setUsers = users => ({type: SET_USERS, users})
const setTotalCount = totalUsersCount => ({type: SET_TOTAL_COUNT, totalUsersCount})
const subscribe = userId => ({type: SUBSCRIBE, userId})
const unsubscribe = userId => ({type: UNSUBSCRIBE, userId})
const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
const toggleFollowingProgress = (userId, inProgress) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, inProgress
})

export const getUsers = (pageSize, currentPage) => dispatch => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
        })
}

export const subscribeToUser = userId => dispatch => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.setSubscribe(userId)
        .then(() => {
            dispatch(subscribe(userId))
            dispatch(toggleFollowingProgress(userId, false))
        })
}

export const unsubscribeFromUser = userId => dispatch => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.deleteSubscribe(userId)
        .then(() => {
            dispatch(unsubscribe(userId))
            dispatch(toggleFollowingProgress(userId, false))
        })
}