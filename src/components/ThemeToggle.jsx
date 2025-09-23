import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Icon } from '@iconify/react';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            style={{
                backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.3)'}`,
            }}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className="relative w-6 h-6">
                <Icon
                    icon={isDarkMode ? "mingcute:sun-line" : "mingcute:moon-line"}
                    className="w-6 h-6 transition-all duration-500 ease-in-out"
                    style={{
                        color: isDarkMode ? '#fbbf24' : '#1e40af',
                        transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)',
                    }}
                />
            </div>

            {/* Ripple effect */}
            <div
                className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
                style={{
                    background: isDarkMode
                        ? 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                }}
            />
        </button>
    );
};

export default ThemeToggle;
