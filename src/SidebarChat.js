import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar />
                <div className="SidebarChat__info">
                    <h2>chat name</h2>
                    <p> last message</p>
                </div>
            
        </div>
    )
}

export default SidebarChat
