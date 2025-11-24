import React, { useState, useEffect } from 'react';
import { X, Key, Save, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { validateApiKey } from '../../services/gemini';

const SettingsModal = ({ isOpen, onClose }) => {
    const [apiKey, setApiKey] = useState('');
    const [showKey, setShowKey] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isTesting, setIsTesting] = useState(false);

    useEffect(() => {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) setApiKey(storedKey);
        setStatus({ type: '', message: '' });
    }, [isOpen]);

    const handleTest = async () => {
        if (!apiKey.trim()) {
            setStatus({ type: 'error', message: 'Please enter an API key' });
            return;
        }

        setIsTesting(true);
        setStatus({ type: '', message: '' });

        try {
            await validateApiKey(apiKey.trim());
            setStatus({ type: 'success', message: 'Connection successful!' });
        } catch (error) {
            // If validation fails, try to list models to help debug
            let errorMsg = `Failed: ${error.message}`;
            if (error.message.includes('404') || error.message.includes('not found')) {
                errorMsg = "Model not found. Checking available models...";
                setStatus({ type: 'error', message: errorMsg });

                // Try to fetch available models
                try {
                    const { getAvailableModels } = await import('../../services/gemini');
                    const models = await getAvailableModels(apiKey.trim());
                    if (models.length > 0) {
                        const modelNames = models.map(m => m.name.replace('models/', '')).join(', ');
                        errorMsg = `Model 'gemini-pro' not found. Available: ${modelNames}`;
                    } else {
                        errorMsg = "Model not found and could not list available models.";
                    }
                } catch (err) {
                    console.error("Could not list models", err);
                }
            }
            setStatus({ type: 'error', message: errorMsg });
        } finally {
            setIsTesting(false);
        }
    };

    const handleSave = () => {
        if (!apiKey.trim()) {
            setStatus({ type: 'error', message: 'Please enter an API key' });
            return;
        }
        localStorage.setItem('gemini_api_key', apiKey.trim());
        window.location.reload();
        onClose();
    };

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-bg-secondary rounded-2xl w-full max-w-md border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-5 border-b border-border">
                    <h2 className="text-xl font-semibold text-text-primary">Settings</h2>
                    <button className="p-2 rounded-full text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-colors" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <label className="flex items-center gap-2 text-text-primary font-medium">
                            <Key size={18} className="text-accent-primary" />
                            <span>Gemini API Key</span>
                        </label>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Enter your Google Gemini API key to enable the chatbot.
                            You can get one for free at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-accent-primary hover:underline">Google AI Studio</a>.
                        </p>
                        <div className="relative">
                            <input
                                type={showKey ? "text" : "password"}
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                placeholder="Paste your API key here..."
                                className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 pr-16 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                            />
                            <button
                                onClick={() => setShowKey(!showKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary hover:text-text-primary font-medium"
                            >
                                {showKey ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {status.message && (
                            <div className={`flex items-center gap-2 text-sm p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                <span>{status.message}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-5 border-t border-border flex justify-end gap-3 bg-bg-secondary">
                    <button
                        className="px-5 py-2.5 rounded-full border border-border text-text-primary hover:bg-bg-tertiary transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
                        onClick={handleTest}
                        disabled={isTesting}
                    >
                        {isTesting && <Loader size={16} className="animate-spin" />}
                        <span>Test Connection</span>
                    </button>
                    <button className="px-5 py-2.5 rounded-full bg-text-primary text-bg-primary hover:bg-white transition-colors flex items-center gap-2 font-medium" onClick={handleSave}>
                        <Save size={18} />
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
