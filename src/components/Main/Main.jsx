import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
    const { onSent, showResult, loading, resultData, setInput, input } = useContext(Context);
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    const chatContainerRef = useRef(null);
    const [displayedText, setDisplayedText] = useState('');
    const [hasAddedResult, setHasAddedResult] = useState(false);
    const typingInterval = useRef(null);

    // Scroll to the latest message
   // Typing Effect for Bot Response (updated)
useEffect(() => {
    if (showResult && resultData && !hasAddedResult) {
        // Clear any existing interval immediately
        if (typingInterval.current) {
            clearInterval(typingInterval.current);
            typingInterval.current = null;
        }

        setDisplayedText('');
        let index = 0;
        
        typingInterval.current = setInterval(() => {
            if (index < resultData.length) {
                setDisplayedText(prev => prev + resultData[index]);
                index++;
            } else {
                // Clean up before finalizing
                clearInterval(typingInterval.current);
                typingInterval.current = null;
                setHasAddedResult(true);
                
                // Ensure we're adding the exact resultData
                // dispatch(addMessage({ 
                //     role: 'assistant', 
                //     content: resultData 
                // }));
            }
        }, 30);

        // Cleanup on unmount or dependency change
        return () => {
            if (typingInterval.current) {
                clearInterval(typingInterval.current);
                typingInterval.current = null;
            }
        };
    }
}, [showResult, resultData, hasAddedResult, dispatch]);

// Add this cleanup when new responses start
const handleSend = () => {
    if (input.trim() && !loading) { // Add loading check
        console.log("User sent message:", input);
        // Clear previous typing state
        setDisplayedText('');
        setHasAddedResult(false);
        if (typingInterval.current) clearInterval(typingInterval.current);
        
        // Remove the dispatch for user message here
        // Let onSent handle adding messages through the Context
        onSent(); // This should trigger message handling
        setInput(''); // Clear input after sending
    }
};

    return (
        <div className='main'>
            {/* <div className='nav'>
                <p className='nav-title'>Setting up your account</p>
                <img src={assets.gemini_icon} alt='Gemini Icon' />
            </div> */}
            <div className='main-container'>
                <div className='header-text'>
                    <h1>Solar energy assistant agent</h1>
                </div>
                <div className='chat-container' ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${
                                message.role === 'user' ? 'user-message' : 'bot-message'
                            }`}
                        >
                            {message.role === 'assistant' && (
                                <img
                                    src={assets.gemini_icon}
                                    alt='Bot Avatar'
                                    className='avatar'
                                />
                            )}
                            <div className='message-content'>
                                <ReactMarkdown className='message-text'>
                                    {message.content}
                                </ReactMarkdown>
                            </div>
                            {message.role === 'user' && (
                                <img
                                    src={assets.user_icon}
                                    alt='User Avatar'
                                    className='avatar'
                                />
                            )}
                        </div>
                    ))}

                    {/* Typing Effect Display */}
                    {/* {showResult && !hasAddedResult && (
                        <div className='message bot-message'>
                            <img src={assets.gemini_icon} alt='Bot Avatar' className='avatar' />
                            <div className='message-content'>
                                <p className='message-text'>{displayedText}</p>
                            </div>
                        </div>
                    )} */}
                </div>

                <div className='main-bottom'>
                    <div className='input-area'>
                        {/* <div className='input-buttons'>
                            <button className='input-button'>YES</button>
                            <button className='input-button'>NOT YET</button>
                        </div> */}
                        <div className='search-box'>
                            <input
                                type='text'
                                placeholder='Ask about solar energy'
                                value={input || ""}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <img
                                src={assets.send_icon}
                                alt='Send Icon'
                                onClick={handleSend}
                            />
                        </div>
                    </div>
                    <div className='bottom-icons'>
                        <img src={assets.setting_icon} alt='Setting Icon' />
                        <img src={assets.gallery_icon2} alt='Gallery Icon' />
                        <img src={assets.plus_icon} alt='Plus Icon' />
                        <img src={assets.youtube_icon} alt='Youtube Icon' />
                        <img src={assets.history_icon} alt='History Icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;