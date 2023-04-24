import React, { useState } from 'react';
import "./tabManager.css"
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";
import { RiPlayListAddFill, RiContactsBook2Fill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md"; 
import { IoSettingsSharp } from "react-icons/io5";

import Calendar from "./calendar.jsx";
import ContactPage from './contactPage';
import Dashboard from './dashboard';
import Settings from './settings';
import TaskView from './taskView';

function TabManager(props){

    // Available tabs: home, task, dashboard, calendar, contacts, settings
    let [tab, setTab] = useState("dashboard");
    let email = "test@gmail.com";

    return (
        <div id="wholeSite">
            <div className="navbar">
                <div id="navbar-logo">
                    <h4>ToDo-Today</h4>
                </div>
                <div id="tabSelection">
                    <div onClick={() => setTab("dashboard")}>
                        {tab === "dashboard" ? <MdDashboard className="selectedTab selectorIcons"/> : <MdDashboard  className="selectorIcons" />}
                    </div>

                    <div onClick={() => setTab("task")}>
                        {tab === "task" ? <RiPlayListAddFill className="selectedTab selectorIcons"/> : <RiPlayListAddFill  className="selectorIcons" />}
                    </div>

                    <div onClick={() => setTab("calendar")}>
                        {tab === "calendar" ? <AiFillCalendar className="selectedTab selectorIcons"/> : <AiFillCalendar  className="selectorIcons" />}
                    </div>

                    <div onClick={() => setTab("contacts")}>
                        {tab === "contacts" ? <RiContactsBook2Fill className="selectedTab selectorIcons"/> : <RiContactsBook2Fill  className="selectorIcons" />}
                    </div>

                    <div onClick={() => setTab("settings")}>
                        {tab === "settings" ? <IoSettingsSharp className="selectedTab selectorIcons"/> : <IoSettingsSharp  className="selectorIcons" />}
                    </div>
                </div>
                <div id="searchBarHolder">
                    
                    <AiOutlineSearch id="searchBarSubIcon"/>

                    <input
                    id="searchBar"
                    type="text"
                    placeholder="" />
                </div>
                <div id="userIconHolder">
                    <div className="userIcon">User X</div>
                </div>
            </div>
            <hr id="navbarSeparatorLine" />
            <div className="siteContent">
                
                {tab === "calendar" ? <Calendar /> : tab === "contacts" ? <ContactPage /> : tab === "dashboard" ? <Dashboard email={email} /> : tab==="settings" ? <Settings currTheme = {props.currTheme} onClickDec = {props.onClickDec} onClickInc = {props.onClickInc}/> : <TaskView email={email}/>}

   
            </div>
        </div>
    )
}

export default TabManager;
