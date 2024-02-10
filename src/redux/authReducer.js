import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

const initialState = {
    id: null,
    login: null,
    email: null,
    userPhoto: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.photo
            }

        default:
            return state
    }
}

const setAuthUserData = (userId, login, email) => ({
    type: SET_AUTH_USER_DATA, data: {userId, login, email}
})
const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo})

export const authMe = () => dispatch => {
    authAPI.authMe()
        .then(authData => {
            if (authData.resultCode === 0) {
                authAPI.getAuthPhoto(authData.data.id)
                    .then(photo => {
                        const {id, login, email} = authData.data
                        dispatch(setAuthUserPhoto(photo))
                        dispatch(setAuthUserData(id, login, email))
                    })
            }
        })
}