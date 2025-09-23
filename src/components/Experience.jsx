import React from 'react';
import { experience } from '../config/portfolioData';
import { Icon } from '@iconify/react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
    const { colors } = useTheme();
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section
            id="experience"
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
                        Professional Experience
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        My journey in software development and engineering
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className="absolute left-8 top-0 bottom-0 w-0.5 hidden lg:block theme-transition"
                        style={{ backgroundColor: colors.text.accent }}
                    ></div>

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <div key={job.id} className="relative flex items-start">
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-6 w-4 h-4 rounded-full border-4 z-10 hidden lg:block theme-transition"
                                    style={{
                                        backgroundColor: colors.text.accent,
                                        borderColor: colors.background.primary,
                                    }}
                                ></div>

                                <div
                                    className="ml-0 lg:ml-16 rounded-xl p-8 shadow-xl card-hover theme-transition w-full"
                                    style={{
                                        backgroundColor: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                    }}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div>
                                            <h3
                                                className="text-2xl font-bold mb-2 theme-transition"
                                                style={{ color: colors.text.primary }}
                                            >
                                                {job.title}
                                            </h3>
                                            <h4
                                                className="text-xl font-semibold mb-2 theme-transition"
                                                style={{ color: colors.text.accent }}
                                            >
                                                {job.company}
                                            </h4>
                                            <div
                                                className="flex items-center mb-2 theme-transition"
                                                style={{ color: colors.text.secondary }}
                                            >
                                                <Icon icon="fe:map-pin" className="w-4 h-4 mr-2" style={{ color: colors.text.accent }} />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                                className="px-4 py-2 rounded-full font-semibold theme-transition"
                                                style={{
                                                    backgroundColor: colors.text.accent,
                                                    color: '#ffffff',
                                                }}
                                            >
                                                {job.period}
                                            </span>
                                            {job.current && (
                                                <span
                                                    className="ml-3 px-3 py-1 rounded-full text-sm font-medium theme-transition"
                                                    style={{
                                                        backgroundColor: '#10b981',
                                                        color: '#ffffff',
                                                    }}
                                                >
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {job.description.map((desc, descIndex) => (
                                            <div key={descIndex} className="flex items-start">
                                                <Icon
                                                    icon="fe:check"
                                                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0 theme-transition"
                                                    style={{ color: colors.text.accent }}
                                                />
                                                <p
                                                    className="leading-relaxed theme-transition"
                                                    style={{ color: colors.text.secondary }}
                                                >
                                                    {desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Skills tags */}
                                    <div
                                        className="mt-6 pt-6 theme-transition"
                                        style={{ borderTop: `1px solid ${colors.border.primary}` }}
                                    >
                                        <div className="flex flex-wrap gap-2">
                                            {job.description[job.description.length - 1].includes('Skills:') &&
                                                job.description[job.description.length - 1]
                                                    .split('Skills:')[1]
                                                    .split(',')
                                                    .map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="px-3 py-1 rounded-full text-sm font-medium theme-transition"
                                                            style={{
                                                                backgroundColor: colors.background.tertiary,
                                                                color: colors.text.secondary,
                                                                border: `1px solid ${colors.border.secondary}`,
                                                            }}
                                                        >
                                                            {skill.trim()}
                                                        </span>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Experience;
