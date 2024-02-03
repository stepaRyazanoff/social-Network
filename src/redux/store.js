import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello everyone)!', likesCount: 12},
                {id: 2, message: 'I`m a little dumb!', likesCount: 4},
            ],
            postText: ''
        },

        dialogsPage: {
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
            messageText: '',
        },

        sidebar: {}
    },

    _callSubscriber() {
        console.log('Anything')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

window.state = store.getState()

// export default store

