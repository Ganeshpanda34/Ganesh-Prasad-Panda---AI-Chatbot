import React from 'react';
import ReactMarkdown from 'react-markdown';
import { User } from 'lucide-react';
import GoogleGeminiLogo from '../UI/GoogleGeminiLogo';

const MessageBubble = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex gap-2 sm:gap-4 max-w-full animate-fade-in px-2 sm:px-0 ${isUser ? 'flex-row-reverse' : ''}`}>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-bg-tertiary text-text-secondary' : 'bg-white/10 backdrop-blur-sm'}`}>
                {isUser ? <User size={16} className="sm:w-5 sm:h-5" /> : <GoogleGeminiLogo size={16} className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
            <div className={`flex flex-col gap-1 max-w-[85%] sm:max-w-[80%] ${isUser ? 'items-end' : ''}`}>
                <div className={`
                    text-sm sm:text-base leading-relaxed
                    ${isUser
                        ? 'p-3 sm:p-4 rounded-[18px] bg-bg-tertiary text-text-primary rounded-br-sm'
                        : 'p-0 pt-1 bg-transparent text-text-primary prose prose-invert max-w-none prose-p:mb-2 prose-p:text-sm sm:prose-p:text-base prose-pre:bg-bg-tertiary prose-pre:p-3 sm:prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-xs sm:prose-pre:text-sm prose-code:bg-bg-tertiary prose-code:px-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm prose-code:before:content-none prose-code:after:content-none'}
                `}>
                    {isUser ? (
                        message.content
                    ) : (
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
