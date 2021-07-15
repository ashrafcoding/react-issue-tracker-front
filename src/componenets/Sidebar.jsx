import React from 'react'
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <i className="sidebarlistitem active">
                            <LineStyle className="sidebaricon"/>
                            Home
                        </i>
                        <i className="sidebarlistitem">
                            <Timeline className="sidebaricon"/>
                            Analytics
                        </i>
                        <i className="sidebarlistitem">
                            <TrendingUp className="sidebaricon"/>
                            Sales
                        </i>
                    </ul>
                </div>
            </div>
        </div>
    )
}
