import React from 'react'
import "./Sidebar.css"
import  "@material-ui/icons"
import {Avatar, IconButton} from "@material-ui/core"
import { ChatRounded, DonutLargeRounded,MoreHorizOutlined, SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>                            <DonutLargeRounded />
                    </IconButton>
                    <IconButton>                            <ChatRounded />
                    </IconButton>
                    <IconButton>                            <MoreHorizOutlined />
                    </IconButton>
                </div>
                    </div> 
                        <div className="sidebar_search">
                            <div className="sidebar__searchContainer">
                                <SearchOutlined />
                                <input placeholder="search" type='text'></input>
                            
                            </div>
                        </div>
                                <div className="sidebar_Chat">
                                    <SidebarChat />
                                    <SidebarChat />
                                    <SidebarChat />
                                </div>

        </div>
    )
}

export default Sidebar
