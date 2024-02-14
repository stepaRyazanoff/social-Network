import {authAPI} from "../api/api"

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

const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}
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
                        dispatch(setAuthUserData(id, login, email, true))
                    })
            }
        })
}

export const login = (email, password, rememberMe, captcha) => dispatch => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            }
        })
}

export const logout = () => dispatch => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}