const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: Date.now(),
                message: state.postText,
                likesCount: 10
            })
            state.postText = ''
            return state

        case UPDATE_POST_TEXT:
            state.postText = action.postText
            return state

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({
    type: UPDATE_POST_TEXT,
    postText: text
})