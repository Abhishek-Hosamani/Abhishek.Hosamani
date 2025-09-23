import React, { useState } from 'react';
import { projects } from '../config/portfolioData';
import { Icon } from '@iconify/react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
    const { colors } = useTheme();
    const [activeFilter, setActiveFilter] = useState('all');
    const [ref, isVisible] = useScrollAnimation();

    const featuredProjects = projects.filter(project => project.featured);
    const allProjects = projects;

    const filterCategories = ['all', 'featured', 'web', 'ai-ml', 'mobile'];

    const getFilteredProjects = () => {
        switch (activeFilter) {
            case 'featured':
                return featuredProjects;
            case 'web':
                return allProjects.filter(project =>
                    project.techStack.some(tech =>
                        ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'TailwindCSS'].includes(tech)
                    )
                );
            case 'ai-ml':
                return allProjects.filter(project =>
                    project.techStack.some(tech =>
                        ['Python', 'PyTorch', 'Deep Learning', 'ML', 'AI'].includes(tech)
                    )
                );
            default:
                return allProjects;
        }
    };

    return (
        <section
            id="projects"
            ref={ref}
            className={`py-20 theme-transition ${isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
            style={{ backgroundColor: colors.background.secondary }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl font-bold mb-4 theme-transition"
                        style={{ color: colors.text.primary }}
                    >
                        Featured Projects
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        A showcase of my recent work and projects that demonstrate my skills and expertise
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filterCategories.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover-lift ${activeFilter === filter
                                ? ''
                                : 'hover:scale-105'
                                }`}
                            style={{
                                backgroundColor: activeFilter === filter
                                    ? colors.text.accent
                                    : colors.background.tertiary,
                                color: activeFilter === filter
                                    ? '#ffffff'
                                    : colors.text.secondary,
                                border: `1px solid ${colors.border.secondary}`,
                            }}
                            onMouseEnter={(e) => {
                                if (activeFilter !== filter) {
                                    e.target.style.backgroundColor = colors.background.cardHover;
                                    e.target.style.color = colors.text.primary;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeFilter !== filter) {
                                    e.target.style.backgroundColor = colors.background.tertiary;
                                    e.target.style.color = colors.text.secondary;
                                }
                            }}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getFilteredProjects().map((project) => (
                        <div
                            key={project.id}
                            className="rounded-xl overflow-hidden shadow-xl card-hover theme-transition"
                            style={{
                                backgroundColor: colors.background.card,
                                border: `1px solid ${colors.border.primary}`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                                <div
                                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                    style={{ backgroundColor: `${colors.background.primary}CC` }}
                                >
                                    <div className="flex space-x-4">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full hover-lift transition-all duration-300"
                                                style={{
                                                    backgroundColor: colors.background.card,
                                                    color: colors.text.primary,
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = colors.text.accent;
                                                    e.target.style.color = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = colors.background.card;
                                                    e.target.style.color = colors.text.primary;
                                                }}
                                            >
                                                <Icon icon="fe:github" className="w-6 h-6" />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full hover-lift transition-all duration-300"
                                                style={{
                                                    backgroundColor: colors.background.card,
                                                    color: colors.text.primary,
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = colors.text.accent;
                                                    e.target.style.color = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = colors.background.card;
                                                    e.target.style.color = colors.text.primary;
                                                }}
                                            >
                                                <Icon icon="fe:external-link" className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3
                                    className="text-xl font-bold mb-3 theme-transition"
                                    style={{ color: colors.text.primary }}
                                >
                                    {project.name}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-4 line-clamp-3 theme-transition"
                                    style={{ color: colors.text.secondary }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.slice(0, 4).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 rounded text-xs font-medium theme-transition"
                                            style={{
                                                backgroundColor: colors.background.tertiary,
                                                color: colors.text.secondary,
                                                border: `1px solid ${colors.border.secondary}`,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span
                                            className="px-2 py-1 rounded text-xs font-medium theme-transition"
                                            style={{
                                                backgroundColor: colors.background.tertiary,
                                                color: colors.text.secondary,
                                                border: `1px solid ${colors.border.secondary}`,
                                            }}
                                        >
                                            +{project.techStack.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover-lift"
                                            style={{
                                                backgroundColor: colors.background.tertiary,
                                                color: colors.text.primary,
                                                border: `1px solid ${colors.border.secondary}`,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = colors.background.cardHover;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = colors.background.tertiary;
                                            }}
                                        >
                                            <Icon icon="fe:github" className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover-lift"
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
                                            <Icon icon="fe:external-link" className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Projects */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Abhishek-Hosamani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center hover-lift"
                        style={{
                            backgroundColor: colors.background.card,
                            color: colors.text.primary,
                            border: `1px solid ${colors.border.primary}`,
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = colors.background.cardHover;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = colors.background.card;
                        }}
                    >
                        <Icon icon="fe:github" className="w-5 h-5 mr-2" />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
