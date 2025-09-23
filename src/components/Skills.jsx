import React from 'react';
import { skills } from '../config/portfolioData';
import { Icon } from '@iconify/react';
import { useTheme } from '../contexts/ThemeContext';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
    const { colors } = useTheme();

    // Individual skill icons mapping
    const skillIcons = {
        // Languages
        'C': 'simple-icons:c',
        'C++': 'simple-icons:cplusplus',
        'Python': 'simple-icons:python',
        'JavaScript': 'simple-icons:javascript',
        'HTML5': 'simple-icons:html5',
        'CSS': 'simple-icons:css3',
        'SQL': 'simple-icons:mysql',

        // Frontend
        'ReactJs': 'simple-icons:react',
        'Redux': 'simple-icons:redux',
        'Bootstrap': 'simple-icons:bootstrap',
        'Tailwindcss': 'simple-icons:tailwindcss',

        // Backend
        'Nodejs': 'simple-icons:nodedotjs',
        'Flask': 'simple-icons:flask',
        'Express': 'simple-icons:express',
        'REST API': 'simple-icons:rest',

        // Databases
        'MongoDB': 'simple-icons:mongodb',
        'Microsoft SQL Server': 'simple-icons:microsoftsqlserver',

        // Others
        'Deep Learning': 'simple-icons:tensorflow',
        'AI/ML': 'simple-icons:opencv',
        'OOPs': 'simple-icons:java',
        'Data Structures and Algorithms': 'simple-icons:leetcode',
        'Github': 'simple-icons:github'
    };

    const skillCategories = [
        { title: 'Languages', skills: skills.languages, icon: 'simple-icons:c', color: 'from-blue-500 to-blue-600' },
        { title: 'Frontend', skills: skills.frontend, icon: 'simple-icons:react', color: 'from-green-500 to-green-600' },
        { title: 'Backend', skills: skills.backend, icon: 'simple-icons:nodedotjs', color: 'from-purple-500 to-purple-600' },
        { title: 'Databases', skills: skills.databases, icon: 'simple-icons:mongodb', color: 'from-red-500 to-red-600' },
        { title: 'Others', skills: skills.others, icon: 'simple-icons:github', color: 'from-orange-500 to-orange-600' }
    ];

    const [ref, visibleItems] = useStaggeredAnimation(skillCategories, 150);

    return (
        <section
            id="skills"
            className="py-20 theme-transition"
            style={{ backgroundColor: colors.background.primary }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl font-bold mb-4 theme-transition"
                        style={{ color: colors.text.primary }}
                    >
                        Skills & Technologies
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        A comprehensive overview of the technologies and tools I work with
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-6 card-hover theme-transition ${visibleItems.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
                                }`}
                            style={{
                                backgroundColor: colors.background.card,
                                border: `1px solid ${colors.border.primary}`,
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}>
                                    <Icon icon={category.icon} className="w-6 h-6 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-semibold theme-transition"
                                    style={{ color: colors.text.primary }}
                                >
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-2 rounded-full text-sm font-medium skill-hover hover-lift theme-transition flex items-center gap-2"
                                        style={{
                                            backgroundColor: colors.background.tertiary,
                                            color: colors.text.secondary,
                                            border: `1px solid ${colors.border.secondary}`,
                                        }}
                                    >
                                        {skillIcons[skill] && (
                                            <Icon
                                                icon={skillIcons[skill]}
                                                className="w-4 h-4"
                                            />
                                        )}
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
