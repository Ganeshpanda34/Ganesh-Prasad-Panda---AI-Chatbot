import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import SettingsModal from '../UI/SettingsModal';
import Header from './Header';

const MainLayout = ({ children }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="flex h-screen w-full bg-bg-primary text-text-primary overflow-hidden">
            <main className="flex-1 flex flex-col h-full relative">
                <Header />

                {/* Settings Button - Top Right */}
                <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 rounded-full bg-bg-secondary text-text-secondary hover:bg-accent-secondary hover:text-text-primary transition-colors shadow-lg"
                    aria-label="Settings"
                >
                    <Settings size={20} className="sm:w-6 sm:h-6" />
                </button>

                {children}
            </main>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </div>
    );
};

export default MainLayout;
