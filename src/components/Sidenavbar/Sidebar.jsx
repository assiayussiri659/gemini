import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

function Sidebar() {
    const [extended, setExtended] = useState(true); // Sidebar starts extended by default
    const { onSent, prevPrompts, setRecentPrompt, newchat } = useContext(Context);

    // Function to remove duplicate entries
    const uniquePrompts = Array.from(new Set(prevPrompts));

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`sidebar ${extended ? 'extended' : 'collapsed'}`}>
            <div className="top">
                <img
                    className="menu"
                    onClick={() => setExtended((prev) => !prev)} // Toggles the sidebar
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />
                {extended && (
                    <div onClick={() => newchat()} className="newchat">
                        <img src={assets.plus_icon} alt="Plus Icon" />
                        <p>New Chat</p>
                    </div>
                )}
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {uniquePrompts.map((item, index) => (
                            <div
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                                key={index}
                            >
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {extended && (
                <div className="button">
                    <div className="button-item">
                        <img src={assets.question_icon} alt="Question Icon" />
                        <p>Help</p>
                    </div>
                    <div className="button-item">
                        <img src={assets.history_icon} alt="History Icon" />
                        <p>Activity</p>
                    </div>
                    <div className="button-item">
                        <img src={assets.setting_icon} alt="Setting Icon" />
                        <p>Settings</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
