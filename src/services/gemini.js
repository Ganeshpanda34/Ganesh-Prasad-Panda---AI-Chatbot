import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

export const initializeGemini = (apiKey) => {
    if (!apiKey && !API_KEY) {
        throw new Error("API Key is required");
    }
    genAI = new GoogleGenerativeAI(apiKey || API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
};

export const validateApiKey = async (apiKey) => {
    try {
        const tempGenAI = new GoogleGenerativeAI(apiKey);
        const tempModel = tempGenAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await tempModel.generateContent("Test");
        const response = await result.response;
        return !!response.text();
    } catch (error) {
        console.error("API Key Validation Error:", error);
        throw error;
    }
};

export const getAvailableModels = async (apiKey) => {
    // This is a workaround since the SDK might not expose listModels easily in browser
    // We will try to fetch from the REST API directly to see what models are available
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Failed to list models: ${response.statusText}`);
        }
        const data = await response.json();
        return data.models || [];
    } catch (error) {
        console.error("Failed to fetch models:", error);
        return [];
    }
};

export const sendMessageToGemini = async (message, history = []) => {
    if (!model) {
        // Try to initialize with env var if available
        try {
            initializeGemini();
        } catch (e) {
            throw new Error("Gemini API not initialized. Please provide an API Key.");
        }
    }

    try {
        const chat = model.startChat({
            history: history.map(msg => ({
                role: msg.role === 'ai' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            })),
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        throw error;
    }
};
