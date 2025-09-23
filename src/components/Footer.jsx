import React from 'react';
import { Icon } from '@iconify/react';
import { personalInfo, socialLinks } from '../config/portfolioData';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { colors } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="theme-transition"
            style={{
                backgroundColor: colors.background.secondary,
                borderTop: `1px solid ${colors.border.primary}`,
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Abhishek Hosamani
                        </h3>
                        <p
                            className="mb-4 theme-transition"
                            style={{ color: colors.text.secondary }}
                        >
                            Software Engineer passionate about building innovative solutions and contributing to the tech community.
                        </p>
                        <div className="flex space-x-4">
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
                                    <Icon icon="fe:github" className="w-6 h-6" />
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
                                    <Icon icon="ant-design:linkedin-filled" className="w-6 h-6" />
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
                                    <Icon icon="clarity:email-solid" className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="theme-transition hover:scale-105 transition-transform duration-200"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="theme-transition hover:scale-105 transition-transform duration-200"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="theme-transition hover:scale-105 transition-transform duration-200"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="theme-transition hover:scale-105 transition-transform duration-200"
                                    style={{ color: colors.text.secondary }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = colors.text.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = colors.text.secondary;
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Get In Touch
                        </h3>
                        <div className="space-y-2">
                            {socialLinks.email && (
                                <div className="flex items-center theme-transition" style={{ color: colors.text.secondary }}>
                                    <Icon icon="clarity:email-solid" className="w-4 h-4 mr-2" style={{ color: colors.text.accent }} />
                                    <span>{socialLinks.email}</span>
                                </div>
                            )}
                            {socialLinks.phone && (
                                <div className="flex items-center theme-transition" style={{ color: colors.text.secondary }}>
                                    <Icon icon="fe:phone" className="w-4 h-4 mr-2" style={{ color: colors.text.accent }} />
                                    <span>{socialLinks.phone}</span>
                                </div>
                            )}
                            {personalInfo.location && (
                                <div className="flex items-center theme-transition" style={{ color: colors.text.secondary }}>
                                    <Icon icon="fe:map-pin" className="w-4 h-4 mr-2" style={{ color: colors.text.accent }} />
                                    <span>{personalInfo.location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center theme-transition"
                    style={{ borderTop: `1px solid ${colors.border.primary}` }}
                >
                    <p
                        className="text-sm theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        © {currentYear} Abhishek Hosamani. All rights reserved.
                    </p>
                    <p
                        className="text-sm mt-2 md:mt-0 theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
