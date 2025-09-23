import React from 'react';
import { personalInfo, socialLinks } from '../config/portfolioData';
import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Header = () => {
    const { colors } = useTheme();
    const [ref, isVisible] = useScrollAnimation();

    return (
        <header
            ref={ref}
            className={`min-h-screen flex items-center justify-center theme-transition ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
            style={{
                background: `linear-gradient(135deg, ${colors.background.primary}, ${colors.background.secondary}, ${colors.background.primary})`
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image and Basic Info */}
                    <div className="text-center lg:text-left">
                        <div className="mb-8">
                            <img
                                src={personalInfo.profileImage}
                                alt={personalInfo.name}
                                className={`w-48 h-48 rounded-full mx-auto lg:mx-0 border-4 shadow-2xl hover-lift transition-all duration-500 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'
                                    }`}
                                style={{ borderColor: colors.text.accent }}
                            />
                        </div>
                        <h1
                            className={`text-5xl lg:text-6xl font-bold mb-4 theme-transition ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'
                                }`}
                            style={{ color: colors.text.primary }}
                        >
                            {personalInfo.name}
                        </h1>
                        <h2
                            className={`text-2xl lg:text-3xl mb-6 font-semibold theme-transition ${isVisible ? 'animate-fadeInUp animate-delay-300' : 'opacity-0'
                                }`}
                            style={{ color: colors.text.accent }}
                        >
                            {personalInfo.title}
                        </h2>
                        <div
                            className={`text-lg mb-8 max-w-md mx-auto lg:mx-0 theme-transition ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'
                                }`}
                            style={{ color: colors.text.secondary }}
                        >
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2000,
                                    "Software Engineer at SproutsAi",
                                    2000,
                                    "Building the future one line of code at a time",
                                    2000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="font-medium"
                            />
                        </div>

                        {/* Social Links */}
                        <div
                            className={`flex justify-center lg:justify-start space-x-6 mb-8 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'
                                }`}
                        >
                            {socialLinks.github && (
                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-lift p-2 rounded-lg theme-transition"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                        e.target.style.transform = 'translateY(-2px) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    <Icon icon="fe:github" className="w-8 h-8" />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-lift p-2 rounded-lg theme-transition"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                        e.target.style.transform = 'translateY(-2px) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    <Icon icon="ant-design:linkedin-filled" className="w-8 h-8" />
                                </a>
                            )}
                            {socialLinks.email && (
                                <a
                                    href={`mailto:${socialLinks.email}`}
                                    className="hover-lift p-2 rounded-lg theme-transition"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                        e.target.style.transform = 'translateY(-2px) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    <Icon icon="clarity:email-solid" className="w-8 h-8" />
                                </a>
                            )}
                            {socialLinks.phone && (
                                <a
                                    href={`tel:${socialLinks.phone}`}
                                    className="hover-lift p-2 rounded-lg theme-transition"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                        e.target.style.transform = 'translateY(-2px) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    <Icon icon="fe:phone" className="w-8 h-8" />
                                </a>
                            )}
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'
                                }`}
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center hover-lift"
                                style={{
                                    backgroundColor: colors.text.accent,
                                    color: '#ffffff',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = colors.secondary;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = colors.text.accent;
                                }}
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center hover-lift"
                                style={{
                                    border: `2px solid ${colors.text.accent}`,
                                    color: colors.text.accent,
                                    backgroundColor: 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = colors.text.accent;
                                    e.target.style.color = '#ffffff';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = colors.text.accent;
                                }}
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div
                        className={`rounded-2xl p-8 shadow-2xl hover-lift theme-transition ${isVisible ? 'animate-fadeInRight animate-delay-300' : 'opacity-0'
                            }`}
                        style={{
                            backgroundColor: colors.background.card,
                            border: `1px solid ${colors.border.primary}`,
                        }}
                    >
                        <h3
                            className="text-2xl font-bold mb-6 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            About Me
                        </h3>
                        <p
                            className="text-lg leading-relaxed mb-6 theme-transition"
                            style={{ color: colors.text.secondary }}
                        >
                            {personalInfo.bio}
                        </p>
                        <div className="space-y-4">
                            <div
                                className="flex items-center theme-transition"
                                style={{ color: colors.text.secondary }}
                            >
                                <Icon icon="fe:map-pin" className="w-5 h-5 mr-3" style={{ color: colors.text.accent }} />
                                <span>{personalInfo.location}</span>
                            </div>
                            <div
                                className="flex items-center theme-transition"
                                style={{ color: colors.text.secondary }}
                            >
                                <Icon icon="fe:briefcase" className="w-5 h-5 mr-3" style={{ color: colors.text.accent }} />
                                <span>Currently at SproutsAi</span>
                            </div>
                            <div
                                className="flex items-center theme-transition"
                                style={{ color: colors.text.secondary }}
                            >
                                <Icon icon="fe:graduation-cap" className="w-5 h-5 mr-3" style={{ color: colors.text.accent }} />
                                <span>B.E Computer Science Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
