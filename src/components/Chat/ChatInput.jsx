import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image as ImageIcon, Mic } from 'lucide-react';

const ChatInput = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [input]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSend = () => {
        if (input.trim() && !isLoading) {
            onSendMessage(input);
            setInput('');
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 bg-gradient-to-t from-bg-primary via-bg-primary/95 to-transparent flex justify-center">
            <div className="w-full max-w-[800px] bg-bg-secondary rounded-[20px] sm:rounded-[28px] p-2 sm:p-3 px-3 sm:px-4 flex items-end gap-1 sm:gap-2 border border-border transition-colors focus-within:border-accent-primary focus-within:bg-bg-secondary shadow-lg">
                <div className="hidden sm:flex gap-1">
                    <button className="p-2 rounded-full text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary">
                        <Paperclip size={20} />
                    </button>
                    <button className="p-2 rounded-full text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary">
                        <ImageIcon size={20} />
                    </button>
                </div>

                <textarea
                    ref={textareaRef}
                    className="flex-1 max-h-[200px] min-h-[24px] py-2 resize-none text-sm sm:text-base bg-transparent border-none outline-none placeholder-text-muted text-text-primary"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    disabled={isLoading}
                />

                <div className="flex gap-1">
                    {input.trim() ? (
                        <button
                            className="p-2 rounded-full bg-text-primary text-bg-primary transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handleSend}
                            disabled={isLoading}
                        >
                            <Send size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    ) : (
                        <button className="p-2 rounded-full text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary">
                            <Mic size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
