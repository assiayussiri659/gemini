import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

function Sidebar() {

    const [extended, setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" />
                <div className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-tittle">
                            Recent
                        </p>
                        <div className="recent-entery">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="button">
                <div className="button-item recent-entery">
                    <img src={assets.question_icon} alt="" />
                    {extended? <p>Help</p>:null }
                </div>
                <div className="button-item recent-entery">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="button-item recent-entery">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar