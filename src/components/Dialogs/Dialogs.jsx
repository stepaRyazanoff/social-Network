import React from 'react'
import cl from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'


const Dialogs = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>))
    const messagesElements = messages.map(m => (<Message key={m.id} message={m.message} id={m.id}/>))

    return (
        <div className={cl.dialogs}>
            <div className={cl.inner}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs
