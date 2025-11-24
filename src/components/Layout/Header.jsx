import React from 'react';
import GoogleGeminiLogo from '../UI/GoogleGeminiLogo';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-border">
            <div className="max-w-[900px] mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 backdrop-blur-sm shrink-0">
                        <GoogleGeminiLogo size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-base sm:text-xl font-bold text-text-primary truncate">
                            Ganesh Prasad Panda
                        </h1>
                        <p className="text-[10px] sm:text-xs text-text-muted truncate">
                            Powered by Google Gemini 2.0 Flash
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
