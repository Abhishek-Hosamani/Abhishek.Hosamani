
// EmailJS Configuration from Environment Variables
// Make sure to set these in your .env file

export const EMAILJS_CONFIG = {
    // Get from environment variables
    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,

    TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,

    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Validation function to check if all required environment variables are set
export const validateEmailConfig = () => {
    const missingVars = [];

    if (!EMAILJS_CONFIG.SERVICE_ID) missingVars.push('REACT_APP_EMAILJS_SERVICE_ID');
    if (!EMAILJS_CONFIG.TEMPLATE_ID) missingVars.push('REACT_APP_EMAILJS_TEMPLATE_ID');
    if (!EMAILJS_CONFIG.PUBLIC_KEY) missingVars.push('REACT_APP_EMAILJS_PUBLIC_KEY');

    if (missingVars.length > 0) {
        console.error('Missing EmailJS environment variables:', missingVars);
        console.error('Please create a .env file with the required variables.');
        return false;
    }

    return true;
};


