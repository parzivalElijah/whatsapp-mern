import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticonRounded, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"
function Chat() {
    return (
        <div className="Chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> chat</h3>
                    <p>last seen</p>
                </div>
                    <div className="chat__headerRight">
                        <IconButton>
                                <SearchOutlined />
                            </IconButton>   
                        <IconButton>
                                <AttachFile />
                            </IconButton>  
                        <IconButton>
                                <MoreVert />
                            </IconButton>  
                    </div>
            </div>
                        <div className="Chat__Body">
                            <p className="chat__message">
                                <span className="chat__name">somebody</span>
                                a message 
                                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                            </p>
                            <p className="chat__message chat__receive">
                                <span className="chat__name">somebody</span>
                                a message 
                                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                            </p>
                        </div>
                            <div className="chat__footer">
                                <InsertEmoticonRounded />
                                <form>
                                    <input
                                    placeholder="type a message"
                                    type="text" />
                                    <button
                                    type='submit'>
                                        send a message
                                    </button> 
                                </form>
                                <Mic />
                            </div>
        </div>
    )
}

export default Chat
