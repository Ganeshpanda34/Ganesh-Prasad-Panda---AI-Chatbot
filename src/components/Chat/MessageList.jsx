import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

const MessageList = ({ messages, isLoading }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 pb-[120px]">
            {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg} />
            ))}
            {isLoading && (
                <div className="flex gap-4 max-w-full animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-accent-gradient text-white flex items-center justify-center shrink-0">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[80%]">
                        <div className="flex gap-1 p-2 px-3 bg-bg-tertiary rounded-xl w-fit">
                            <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce-slow [animation-delay:-0.32s]"></span>
                            <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce-slow [animation-delay:-0.16s]"></span>
                            <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce-slow"></span>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;
