import React from "react"
import cl from './Message.module.css'


const Message = ({ message, id }) => {


   return (
      <div className={cl.messages}>
         {id}. {message}
      </div>
   )
}

export default Message