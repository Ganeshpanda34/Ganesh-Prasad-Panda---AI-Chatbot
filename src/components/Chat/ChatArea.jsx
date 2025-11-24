import React, { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { sendMessageToGemini, initializeGemini } from '../../services/gemini';

const ChatArea = () => {
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Hello! I\'m **Ganesh Prasad Panda\'s AI Assistant**. To get started, please set your API key in the Settings (⚙️ top-right).\n\n_Powered by Google Gemini 2.0 Flash_' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const apiKey = localStorage.getItem('gemini_api_key')?.trim();
        if (apiKey) {
            try {
                initializeGemini(apiKey);
                setMessages([
                    { role: 'ai', content: 'Hello! I\'m **Ganesh Prasad Panda\'s AI Assistant**. How can I help you today?\n\n_Powered by Google Gemini 2.0 Flash_' }
                ]);
            } catch (error) {
                console.error("Failed to initialize:", error);
            }
        }
    }, []);

    const handleSendMessage = async (text) => {
        const apiKey = localStorage.getItem('gemini_api_key')?.trim();
        if (!apiKey) {
            setMessages(prev => [...prev, { role: 'user', content: text }, { role: 'ai', content: 'Please set your API Key in Settings to use the chatbot.' }]);
            return;
        }

        // Add user message
        const userMessage = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Initialize with key just in case (service handles check)
            initializeGemini(apiKey);

            // Send to API
            // Filter out the initial AI greeting and ensure history starts with user
            const historyForApi = messages.filter(m => m.role !== 'system' && !m.content.includes('Ganesh Prasad Panda\'s AI Assistant'));

            const responseText = await sendMessageToGemini(text, historyForApi);

            const aiMessage = { role: 'ai', content: responseText };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("API Error:", error);
            setMessages(prev => [...prev, { role: 'ai', content: `Error: ${error.message || 'Something went wrong.'}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full max-w-[900px] mx-auto w-full relative pt-16 sm:pt-20">
            <MessageList messages={messages} isLoading={isLoading} />
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default ChatArea;
