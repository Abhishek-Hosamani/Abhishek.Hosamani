import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Update document class for smooth transitions
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(isDarkMode ? 'dark' : 'light');

        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.content = isDarkMode ? '#111827' : '#ffffff';
        }
    }, [isDarkMode]);

    const theme = {
        isDarkMode,
        toggleTheme,
        colors: {
            primary: isDarkMode ? '#f97316' : '#ea580c',
            secondary: isDarkMode ? '#ea580c' : '#f97316',
            background: {
                primary: isDarkMode ? '#111827' : '#ffffff',
                secondary: isDarkMode ? '#1f2937' : '#f9fafb',
                tertiary: isDarkMode ? '#374151' : '#e5e7eb',
                card: isDarkMode ? '#1f2937' : '#ffffff',
                cardHover: isDarkMode ? '#374151' : '#f3f4f6',
            },
            text: {
                primary: isDarkMode ? '#ffffff' : '#111827',
                secondary: isDarkMode ? '#d1d5db' : '#6b7280',
                tertiary: isDarkMode ? '#9ca3af' : '#9ca3af',
                accent: isDarkMode ? '#f97316' : '#ea580c',
            },
            border: {
                primary: isDarkMode ? '#374151' : '#e5e7eb',
                secondary: isDarkMode ? '#4b5563' : '#d1d5db',
                accent: isDarkMode ? '#f97316' : '#ea580c',
            },
            shadow: {
                primary: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                secondary: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
            }
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
