const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
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
export const subscribeAC = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribeAC = (userId) => ({type: UNSUBSCRIBE, userId})
