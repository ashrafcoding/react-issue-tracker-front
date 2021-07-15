import React from 'react'
import "./topbar.css"
import {NotificationsNoneOutlined, Language, Settings} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topwrapper">
                <div className="topleft">
                    <span className="logo">Issue Tracker</span>
                </div>
                <div className="topright">
                    <div className="topicons">
                        <NotificationsNoneOutlined/>
                        <span className="topiconpag">2</span>
                    </div>
                    <div className="topicons">
                        <Language/>
                    </div>
                    <div className="topicons">
                        <Settings/>
                    </div>
                    <img src="./assets/marc.jpg" alt="avatar" className="topavatar"/>
                </div>
            </div>
        </div>
    )
}
