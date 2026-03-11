import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { colors } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg backdrop-blur-md' : ''
                }`}
            style={{
                backgroundColor: scrolled ? `${colors.background.primary}CC` : 'transparent',
                borderBottom: scrolled ? `1px solid ${colors.border.primary}` : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="theme-transition font-medium hover:scale-105 transition-transform duration-200"
                                style={{
                                    color: colors.text.secondary,
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = colors.text.primary;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = colors.text.secondary;
                                }}
                            >
                                {item.name}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            <Icon
                                icon={isMenuOpen ? "fe:x" : "fe:menu"}
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className="md:hidden rounded-lg mt-2 p-4 shadow-lg backdrop-blur-md theme-transition"
                        style={{
                            backgroundColor: `${colors.background.card}CC`,
                            border: `1px solid ${colors.border.primary}`,
                        }}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="theme-transition font-medium text-left py-2 hover:scale-105 transition-transform duration-200"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                    }}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
