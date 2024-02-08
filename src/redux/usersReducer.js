const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PROCESS_THE_ARRAY = 'SET_PROCESS_THE_ARRAY'
const SET_PROCESS_OF_DISABLING = 'SET_PROCESS_OF_DISABLING'

const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    processArray: [],
    inProcess: false,
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

        case SET_PROCESS_OF_DISABLING:
            return {
                ...state,
                inProcess: action.inProcess
            }

        case SET_PROCESS_THE_ARRAY:
            return {
                ...state,
                processArray: state.inProcess
                    ? [...state.processArray, action.id]
                    : state.processArray.filter(u => u !== action.id)
            }

        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const subscribe = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setProcessTheArray = (id) => ({type: SET_PROCESS_THE_ARRAY, id})
export const setProcessOfDisabling = (inProcess) => ({type: SET_PROCESS_OF_DISABLING, inProcess})