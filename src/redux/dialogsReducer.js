const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({
                id: Date.now(),
                message: state.messageText
            })
            state.messageText = ''
            return state

        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.messageText
            return state

        default:
            return state
    }

}

export const updateMessageTextAC = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText: text
})
export const sendMessageAC = () => ({type: SEND_MESSAGE})
