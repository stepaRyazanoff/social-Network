const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello everyone)!', likesCount: 12},
            {id: 2, message: 'I`m a little dumb!', likesCount: 4},
        ]
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

export default state