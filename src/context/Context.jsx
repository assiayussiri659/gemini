import { createContext, useState, useContext } from 'react';
import run from '../config/gemini';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 70 * index);
    };

    const newchat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        let response;
        let userMessage = prompt ? prompt : input;
        dispatch(addMessage({ role: 'user', content: userMessage }));

        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        dispatch(addMessage({ role: 'assistant', content: response }));

        let responseArray = response.split('**');
        let newResponse = '';

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += '<b>' + responseArray[i] + '</b>';
            }
        }

        let newResponse2 = newResponse.split('*').join('<br>');
        let newResponseArray = newResponse2.split('');
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + '');
        }
        setLoading(false);
        setInput('');
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newchat,
        messages,
    };

    
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
