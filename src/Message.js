import React,{ forwardRef } from 'react'
import "./Message.css";
import ScrollToBottom from 'react-scroll-to-bottom';

const Message = forwardRef(({ text,username,current_username },ref) => {
    
    
    return (
        <div ref={ref} className={(username==current_username ? "user_message" : "Message")}>
            {(username!=current_username) && <p className="user">{username}</p>}
            <p className="text">{text}</p>
        </div>
    )
}
);
export default Message;
