import {rerenderEntireApp} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello everyone)!', likesCount: 12},
            {id: 2, message: 'I`m a little dumb!', likesCount: 4},
        ],
        postText: ''
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'one'},
            {id: 2, name: 'two'},
            {id: 3, name: 'three'},
            {id: 4, name: 'four'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Okay'},
            {id: 3, message: 'Ny da'},
            {id: 4, message: 'Good bye'},
        ],
    },

    sidebar: {}
}

export const updatePostText = (newPostText) => {
    state.profilePage.postText = newPostText
    rerenderEntireApp(state, addPost, updatePostText)
}

export const addPost = () => {
    state.profilePage.posts.push({
            id: 3,
            message: state.profilePage.postText,
            likesCount: 4
        }
    )
    state.profilePage.postText = ''
    rerenderEntireApp(state, addPost, updatePostText)
}

window.state = state

export default state