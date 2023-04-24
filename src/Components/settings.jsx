import React from 'react';
import "./settings.css"

import { VscAccount } from "react-icons/vsc"; 
import { BiPalette } from "react-icons/bi"; 
import { TbLogout } from "react-icons/tb"; 


function Settings(props){
    
    let [currentTab, setTab] = React.useState("Appearance")

    let tabs = ["Appearance", "Account Settings", "Log Out"];
    let icons = [VscAccount, VscAccount, VscAccount];

    return (
        <div id="SettingsContainer">
            <div id="SettingsTab">

                <div id="SettingsContainerNavbar">
                    <h3 id="SettingsContainerTitle">Settings</h3>


                    <ul id="settingsContainerTabSelection">

                        {currentTab == "Account Settings" ? <li id="SettingsContainerHighlightedTab"><VscAccount /> Account Settings</li> : <li onClick={() => setTab("Account Settings")}><VscAccount />  Account Settings</li>}
                        {currentTab == "Appearance" ? <li id="SettingsContainerHighlightedTab"><BiPalette /> Appearance</li> : <li onClick={() => setTab("Appearance")}><BiPalette />  Appearance</li>}
                        {currentTab == "Log Out" ? <li id="SettingsContainerHighlightedTab"><TbLogout /> Log Out</li> : <li onClick={() => setTab("Log Out")}><TbLogout />  Log Out</li>}

                    </ul>
                </div>

                <div id="SettingsContainerLeftContent">

                    <div id="SettingsContainerEmptySpace"></div>

                    <div id="SettingsContainerActualSettings">

                        {currentTab === "Account Settings" ? 

                            <div>
                                <div id = "AccountSettings">
                                    <div id = "nameChangeSettings">Full Name
                                        <div id="nameChangeBarHolder">  
                                        <input
                                        id="nameChangeBar"
                                        type="text"
                                        placeholder="" /></div>
                                    </div>

                                    <div id = "emailChangeSettings">Email
                                            <div id="emailChangeBarHolder">  
                                            <input
                                            id="emailChangeBar"
                                            type="text"
                                            placeholder="" /></div>
                                    </div>

                                    <div id = "passwordChangeSettings">Password
                                        <div id="passwordChangeBarHolder">  
                                            <input
                                            id="passwordChangeBar"
                                            type="text"
                                            placeholder="" /></div>
                                    </div>
                                </div>
                            </div>

                         :
                        
                        currentTab === "Appearance" ?

                            <div>
                            
                                <div id="settingsThemeSetter">
                                    <div id="SettingsThemeName"> Theme: {props.currTheme} </div>

                                    <div>
                                        <button className="settingsTabThemeChangingButton" onClick={() => (props.onClickDec())}> &#8592;D </button>
                                        <button className="settingsTabThemeChangingButton" onClick={() => (props.onClickInc())}> I&#8594; </button>
                                    </div>
                                </div>

                            </div>
                        : 
                        
                            <div>
                            
                            </div>
                        }


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings;
