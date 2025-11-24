import React from 'react';

const GoogleGeminiLogo = ({ size = 24, className = "" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Google Gemini Logo - Stylized Star/Sparkle */}
            <defs>
                <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4285F4', stopOpacity: 1 }} />
                    <stop offset="25%" style={{ stopColor: '#9B72F2', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#D96570', stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: '#F2A25C', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4285F4', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            {/* Main star shape */}
            <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="url(#gemini-gradient)"
            />

            {/* Inner glow */}
            <circle cx="12" cy="12" r="3" fill="white" opacity="0.3" />
        </svg>
    );
};

export default GoogleGeminiLogo;
