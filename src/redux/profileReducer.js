const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    posts: [
        {id: 1, message: 'Hello everyone)!', likesCount: 12},
        {id: 2, message: 'I`m a little dumb!', likesCount: 4},
    ],
    postText: '',
    profile: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: Date.now(),
                    message: state.postText,
                    likesCount: Math.ceil(Math.random() * 100)
                }],
                postText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.postText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = text => ({
    type: UPDATE_POST_TEXT,
    postText: text
})
export const setUserProfile = profile => ({
    type: SET_USER_PROFILE, profile
})