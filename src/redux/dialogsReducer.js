const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'one'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
        {id: 4, name: 'four'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 4, message: 'Good bye'},
    ],
    messageText: '',
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, {
                        id: Date.now(),
                        message: state.messageText
                    }],
                messageText: ''
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.messageText,
            }

        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateMessageTextAC = text => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText: text
})
