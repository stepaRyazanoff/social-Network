const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 5,
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


        default:
            return state
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const subscribeAC = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribeAC = (userId) => ({type: UNSUBSCRIBE, userId})
