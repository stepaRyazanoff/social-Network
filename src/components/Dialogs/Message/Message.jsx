import React from "react"
import cl from './Message.module.css'


const Message = ({ message, number }) => {

   return (
      <div className={cl.messages}>
         {number}. {message}
      </div>
   )
}

export default Message