import React from 'react';
import { education, academicAchievements } from '../config/portfolioData';
import { Icon } from '@iconify/react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
    const { colors } = useTheme();
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section
            id="education"
            ref={ref}
            className={`py-20 theme-transition ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
            style={{ backgroundColor: colors.background.primary }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl font-bold mb-4 theme-transition"
                        style={{ color: colors.text.primary }}
                    >
                        Education & Achievements
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        My academic journey and notable achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Section */}
                    <div>
                        <h3
                            className="text-2xl font-bold mb-8 flex items-center theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            <Icon icon="fe:graduation-cap" className="w-8 h-8 mr-3" style={{ color: colors.text.accent }} />
                            Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={edu.id}
                                    className="rounded-xl p-6 card-hover theme-transition"
                                    style={{
                                        backgroundColor: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                    }}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                        <div>
                                            <h4
                                                className="text-xl font-bold mb-2 theme-transition"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {edu.degree}
                                            </h4>
                                            <h5
                                                className="text-lg font-semibold mb-2 theme-transition"
                                                style={{ color: colors.text.accent }}
                                            >
                                                {edu.institution}
                                            </h5>
                                            <div
                                                className="flex items-center mb-2 theme-transition"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                <Icon icon="fe:map-pin" className="w-4 h-4 mr-2" style={{ color: colors.text.accent }} />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <div
                                                className="w-fit px-4 py-2 rounded-full font-semibold mb-2 theme-transition"
                                                style={{
                                                    backgroundColor: colors.text.accent,
                                                    color: '#ffffff',
                                                }}
                                            >
                                                {edu.year}
                                            </div>
                                            <div
                                                className="font-medium theme-transition"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                {edu.grade}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Academic Achievements Section */}
                    <div>
                        <h3
                            className="text-2xl font-bold mb-8 flex items-center theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            <Icon icon="fe:award" className="w-8 h-8 mr-3" style={{ color: colors.text.accent }} />
                            Academic Achievements
                        </h3>

                        <div className="space-y-6">
                            {academicAchievements.map((achievement, index) => (
                                <div
                                    key={achievement.id}
                                    className="rounded-xl p-6 card-hover theme-transition"
                                    style={{
                                        backgroundColor: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                    }}
                                >
                                    <div className="flex items-start">
                                        <div
                                            className="rounded-full p-2 mr-4 flex-shrink-0 theme-transition"
                                            style={{ backgroundColor: colors.text.accent }}
                                        >
                                            <Icon icon="fe:star" className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4
                                                className="text-lg font-bold mb-2 theme-transition"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {achievement.title}
                                            </h4>
                                            <p
                                                className="font-semibold mb-2 theme-transition"
                                                style={{ color: colors.text.accent }}
                                            >
                                                {achievement.description}
                                            </p>
                                            <p
                                                className="text-sm mb-3 theme-transition"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                {achievement.details}
                                            </p>
                                            {achievement.url && (
                                                <a
                                                    href={achievement.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-medium theme-transition hover:scale-105 transition-transform duration-200"
                                                    style={{ color: colors.text.accent }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.color = colors.secondary;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.color = colors.text.accent;
                                                    }}
                                                >
                                                    <Icon icon="fe:external-link" className="w-4 h-4 mr-2" />
                                                    View Publication
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div
                        className="rounded-xl p-8 max-w-2xl mx-auto theme-transition"
                        style={{
                            backgroundColor: colors.background.card,
                            border: `1px solid ${colors.border.primary}`,
                        }}
                    >
                        <h3
                            className="text-2xl font-bold mb-4 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Ready to Make an Impact
                        </h3>
                        <p
                            className="mb-6 theme-transition"
                            style={{ color: colors.text.secondary }}
                        >
                            With a strong academic foundation and practical experience, I'm ready to contribute to innovative projects.
                        </p>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block hover-lift"
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
                            Let's Discuss Opportunities
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
