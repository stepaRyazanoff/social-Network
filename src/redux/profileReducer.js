import {profileAPI} from "../api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'Hello everyone)!', likesCount: 12},
        {id: 2, message: 'I`m a little dumb!', likesCount: 4},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: Date.now(),
                    message: action.postText,
                    likesCount: Math.ceil(Math.random() * 100)
                }],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPost = postText => ({type: ADD_POST, postText})

export const setProfile = profile => ({
    type: SET_USER_PROFILE, profile
})

export const setUserProfile = profileId => dispatch => {
    profileAPI.getProfile(profileId)
        .then(data => {
            dispatch(setProfile(data))
        })
}

export const setUserStatus = status => ({
    type: SET_USER_STATUS, status
})

export const getUserStatus = (userId) => dispatch => {
    profileAPI.getUserStatus(userId)
        .then(status => {
            dispatch(setUserStatus(status))
        })
}

export const updateUserStatus = (newStatus) => dispatch => {
    profileAPI.updateUserStatus(newStatus)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(newStatus))
            }
        })
}