import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
    const [extended, setExtended] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newchat } = useContext(Context);
    const messages = useSelector((state) => state.chat.messages);
    const uniquePrompts = Array.from(new Set(prevPrompts));

    const loadPrompt = async (prompt) => {
        console.log(messages)
        // setRecentPrompt(prompt);
        // // await onSent(prompt);
        // if (window.innerWidth <= 600) setIsMobileOpen(false);
    };

    const handleNewChat = () => {
        newchat();  // Clears chat or resets chat state
        setRecentPrompt("");  // Clear the recent prompt if needed
        // Any additional actions for the new chat can be added here, like resetting other states
        if (window.innerWidth <= 600) setIsMobileOpen(false);
    };

    return (
        <>
            <div className="mobile-menu-btn" onClick={() => setIsMobileOpen((prev) => !prev)}>
                <img src={assets.menu_icon} alt="Menu Icon" />
            </div>

            <div className={`sidebar ${extended ? "extended" : "collapsed"} ${isMobileOpen ? "mobile-open" : ""}`}>
                <div className="top">
                    <img
                        className="menu"
                        onClick={() => setExtended((prev) => !prev)}
                        src={assets.menu_icon}
                        alt="Menu Icon"
                    />
                    {extended && (
                        <div onClick={handleNewChat} className="newchat">
                            <img src={assets.plus_icon} alt="Plus Icon" />
                            <p>New Chat</p>
                        </div>
                    )}
                    {extended && (
                        <div className="recent">
                            <p className="recent-title">Recent</p>
                            {uniquePrompts.map((item, index) => (
                                <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
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
        </>
    );
}

export default Sidebar;
