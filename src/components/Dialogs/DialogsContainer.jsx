import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

class DialogsContainer extends React.Component {
    constructor() {
        super()
    }

    sendMessage() {
        this.props.sendMessage()
    }

    updateMessageText(text) {
        this.props.updateMessageText(text)
    }

    render() {
        return (
            <Dialogs dialogs={this.props.dialogs}
                     messages={this.props.messages}
                     messageText={this.props.messageText}
                     sendMessage={this.sendMessage.bind(this)}
                     updateMessageText={this.updateMessageText.bind(this)}/>
        )
    }
}


const mapStateToProps = state => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.messageText,
})

export default connect(mapStateToProps, {
    sendMessage: sendMessageAC,
    updateMessageText: updateMessageTextAC
})(DialogsContainer)