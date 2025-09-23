import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../config/portfolioData';
import { EMAILJS_CONFIG, validateEmailConfig } from '../config/emailConfig';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
    const { colors } = useTheme();
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'rate-limited'

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;

    // Auto-dismiss messages after 5 seconds
    useEffect(() => {
        if (submitStatus === 'success' || submitStatus === 'error' || submitStatus === 'rate-limited') {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    // Check if user has already submitted (IP-based rate limiting using localStorage)
    const hasAlreadySubmitted = () => {
        const lastSubmission = localStorage.getItem('contactFormSubmission');
        if (!lastSubmission) return false;

        const submissionTime = new Date(lastSubmission);
        const now = new Date();
        const hoursSinceSubmission = (now - submissionTime) / (1000 * 60 * 60);

        // Allow one submission per 24 hours
        return hoursSinceSubmission < 24;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate EmailJS configuration
        if (!validateEmailConfig()) {
            setSubmitStatus('error');
            return;
        }

        // Check rate limiting
        if (hasAlreadySubmitted()) {
            setSubmitStatus('rate-limited');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: personalInfo.email
                },
                EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Record submission time for rate limiting
                localStorage.setItem('contactFormSubmission', new Date().toISOString());
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
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
                        Get In Touch
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto theme-transition"
                        style={{ color: colors.text.secondary }}
                    >
                        I'm always interested in new opportunities and exciting projects. Let's connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3
                            className="text-2xl font-bold mb-8 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Let's Connect
                        </h3>

                        <div className="space-y-6">
                            {personalInfo.email && (
                                <div className="flex items-center">
                                    <div
                                        className="rounded-full p-3 mr-4 theme-transition"
                                        style={{ backgroundColor: colors.text.accent }}
                                    >
                                        <Icon icon="clarity:email-solid" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4
                                            className="text-lg font-semibold theme-transition"
                                            style={{ color: colors.text.primary }}
                                        >
                                            Email
                                        </h4>
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="theme-transition hover:scale-105 transition-transform duration-200"
                                            style={{ color: colors.text.secondary }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = colors.text.accent;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = colors.text.secondary;
                                            }}
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {personalInfo.phone && (
                                <div className="flex items-center">
                                    <div
                                        className="rounded-full p-3 mr-4 theme-transition"
                                        style={{ backgroundColor: colors.text.accent }}
                                    >
                                        <Icon icon="fe:phone" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4
                                            className="text-lg font-semibold theme-transition"
                                            style={{ color: colors.text.primary }}
                                        >
                                            Phone
                                        </h4>
                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="theme-transition hover:scale-105 transition-transform duration-200"
                                            style={{ color: colors.text.secondary }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = colors.text.accent;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = colors.text.secondary;
                                            }}
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {personalInfo.location && (
                                <div className="flex items-center">
                                    <div
                                        className="rounded-full p-3 mr-4 theme-transition"
                                        style={{ backgroundColor: colors.text.accent }}
                                    >
                                        <Icon icon="mingcute:location-line" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4
                                            className="text-lg font-semibold theme-transition"
                                            style={{ color: colors.text.primary }}
                                        >
                                            Location
                                        </h4>
                                        <p
                                            className="theme-transition"
                                            style={{ color: colors.text.secondary }}
                                        >
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center">
                                <div
                                    className="rounded-full p-3 mr-4 theme-transition"
                                    style={{ backgroundColor: colors.text.accent }}
                                >
                                    <Icon icon="mingcute:briefcase-line" className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4
                                        className="text-lg font-semibold theme-transition"
                                        style={{ color: colors.text.primary }}
                                    >
                                        Current Role
                                    </h4>
                                    <p
                                        className="theme-transition"
                                        style={{ color: colors.text.secondary }}
                                    >
                                        Software Engineer at SproutsAi
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4
                                className="text-lg font-semibold mb-4 theme-transition"
                                style={{ color: colors.text.primary }}
                            >
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.github && (
                                    <a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full card-hover theme-transition"
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
                                        <Icon icon="fe:github" className="w-6 h-6" />
                                    </a>
                                )}
                                {socialLinks.linkedin && (
                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full card-hover theme-transition"
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
                                        <Icon icon="ant-design:linkedin-filled" className="w-6 h-6" />
                                    </a>
                                )}
                                {socialLinks.email && (
                                    <a
                                        href={`mailto:${socialLinks.email}`}
                                        className="p-3 rounded-full card-hover theme-transition"
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
                                        <Icon icon="clarity:email-solid" className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3
                            className="text-2xl font-bold mb-8 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div
                                    className="p-4 rounded-lg flex items-center justify-between animate-fadeInUp"
                                    style={{ backgroundColor: '#10b981', color: '#ffffff' }}
                                >
                                    <div className="flex items-center">
                                        <Icon icon="fe:check-circle" className="w-5 h-5 mr-2" />
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="ml-4 hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <Icon icon="fe:x" className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div
                                    className="p-4 rounded-lg flex items-center justify-between animate-fadeInUp"
                                    style={{ backgroundColor: '#ef4444', color: '#ffffff' }}
                                >
                                    <div className="flex items-center">
                                        <Icon icon="fe:x-circle" className="w-5 h-5 mr-2" />
                                        Failed to send message. Please try again later.
                                    </div>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="ml-4 hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <Icon icon="fe:x" className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {submitStatus === 'rate-limited' && (
                                <div
                                    className="p-4 rounded-lg flex items-center justify-between animate-fadeInUp"
                                    style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                                >
                                    <div className="flex items-center">
                                        <Icon icon="fe:clock" className="w-5 h-5 mr-2" />
                                        You can only send one message per 24 hours. Please try again later.
                                    </div>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="ml-4 hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <Icon icon="fe:x" className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold mb-2 theme-transition"
                                        style={{ color: colors.text.primary }}
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 focus:outline-none"
                                        style={{
                                            backgroundColor: colors.background.card,
                                            border: `1px solid ${colors.border.primary}`,
                                            color: colors.text.primary,
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = colors.text.accent;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = colors.border.primary;
                                        }}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold mb-2 theme-transition"
                                        style={{ color: colors.text.primary }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 focus:outline-none"
                                        style={{
                                            backgroundColor: colors.background.card,
                                            border: `1px solid ${colors.border.primary}`,
                                            color: colors.text.primary,
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = colors.text.accent;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = colors.border.primary;
                                        }}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold mb-2 theme-transition"
                                    style={{ color: colors.text.primary }}
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 focus:outline-none"
                                    style={{
                                        backgroundColor: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                        color: colors.text.primary,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = colors.text.accent;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = colors.border.primary;
                                    }}
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold mb-2 theme-transition"
                                    style={{ color: colors.text.primary }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none disabled:opacity-50 focus:outline-none"
                                    style={{
                                        backgroundColor: colors.background.card,
                                        border: `1px solid ${colors.border.primary}`,
                                        color: colors.text.primary,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = colors.text.accent;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = colors.border.primary;
                                    }}
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover-lift disabled:cursor-not-allowed"
                                style={{
                                    backgroundColor: isSubmitting ? colors.background.tertiary : colors.text.accent,
                                    color: '#ffffff',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.target.style.backgroundColor = colors.secondary;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSubmitting) {
                                        e.target.style.backgroundColor = colors.text.accent;
                                    }
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Icon icon="fe:loader" className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Icon icon="fe:send" className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div
                        className="rounded-xl p-8 max-w-4xl mx-auto theme-transition"
                        style={{
                            backgroundColor: colors.background.card,
                            border: `1px solid ${colors.border.primary}`,
                        }}
                    >
                        <h3
                            className="text-2xl font-bold mb-4 theme-transition"
                            style={{ color: colors.text.primary }}
                        >
                            Let's Build Something Amazing Together
                        </h3>
                        <p
                            className="mb-6 theme-transition"
                            style={{ color: colors.text.secondary }}
                        >
                            Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
                            I'd love to hear from you. I'm always excited to work on new challenges and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
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
                                Send Email
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
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
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
