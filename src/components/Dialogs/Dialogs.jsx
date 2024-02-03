import React from 'react'
import cl from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = ({dialogs, messages, messageText, sendMessage, updateMessageText}) => {

    const dialogsElements = dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>))
    const messagesElements = messages.map((m, index) => (<Message key={m.id} number={index + 1} message={m.message}/>))

    const onButtonClick = () => {
        sendMessage()
    }

    const onChangeText = (e) => {
        updateMessageText(e.target.value)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.inner}>
                <div className={cl.dialogsBox}>
                    {dialogsElements}
                </div>
                    <div className={cl.messagesBox}>
                        {messagesElements}
                    </div>
            </div>
            <div className={cl.formBox}>
                <textarea value={messageText}
                          onChange={onChangeText}
                          placeholder='Введите сообщение...'></textarea>
                <button onClick={onButtonClick}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs
