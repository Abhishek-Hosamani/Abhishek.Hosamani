// Portfolio Configuration File
// This file contains all the data for your portfolio website
// Update this file whenever you want to add new information

export const personalInfo = {
    name: "Abhishek Hosamani",
    title: "Software Engineer",
    email: "abhihosamani17@gmail.com",
    // phone: "6362197359",
    linkedin: "https://www.linkedin.com/in/abhishekhosamani04",
    github: "https://github.com/Abhishek-Hosamani",
    location: "Banglore, India",
    bio: "Currently working as Software Engineer at SproutsAi and working on autonomous interview scheduling, AI-assisted tools in sprouts platform.",
    profileImage: require('../assets/NewImage.jpg')
};

export const skills = {
    languages: ["C", "C++", "Python", "JavaScript", "HTML5", "CSS", "SQL"],
    frontend: ["ReactJs", "Redux", "Bootstrap", "Tailwindcss"],
    backend: ["Nodejs", "Flask", "Express", "REST API"],
    databases: ["MongoDB", "Microsoft SQL Server"],
    others: ["Deep Learning", "AI/ML", "OOPs", "Data Structures and Algorithms", "Github"]
};

export const experience = [
    {
        id: 1,
        title: "Software Engineer",
        company: "SproutsAi",
        location: "California, USA (Remote)",
        period: "12/2024 - Present",
        description: [
            "Majorly working on autonomous interview scheduling, AI assisted Interview agent tool, candidate reachout through whatsapp on sprouts platform.",
            "Skills: ReactJs, Nodejs, Tailwindcss, Express, Redux, MongoDb, Webhooks, Gen-AI"
        ],
        current: true
    },
    {
        id: 2,
        title: "SWE Intern",
        company: "SproutsAi",
        location: "California, USA (Remote)",
        period: "06/2024 - 11/2024",
        description: [
            "Implemented user interfaces and APIs for modules such as Interview Feedback, Review Candidates, Pipeline View, and Candidate Details in main product.",
            "Developed a workflow to synchronize availabilities and schedule interviews between candidates and interviewers and save time by 60%-70%.",
            "Skills: Reactjs, Nodejs, Tailwindcss, Express, Redux, MongoDb, Figma"
        ],
        current: false
    },
    {
        id: 3,
        title: "Student Intern",
        company: "Bosch Global Software Technologies",
        location: "Hyderabad, India",
        period: "01/2024 - 05/2024",
        description: [
            "Worked primarily on AI-Assisted Web Text Editor for writing test specifications.",
            "Designed and developed Microservices architecture for existing system, improved the system performance by 30% and 2x increase in the throughput of test specification generation.",
            "Skills: ReactJs, Redux, Tailwindcss, Flask, SQL, Microsoft SQL Server, Full stack development"
        ],
        current: false
    }
];

export const projects = [
    {
        id: 1,
        name: "Hybrid Quantization Tool",
        description: "A tool to optimize Deep Neural Networks (DNNs) using low-bit quantization techniques to compress and optimize DNN models by approximately 1/4th of original size with insignificant accuracy drops around ~5-6%, making them efficient and deploying them on resource-constrained devices like mobile phones.",
        techStack: ["Python", "PyTorch", "Quantization", "Deep Learning", "ML"],
        image: require('../assets/quantization.jpg'),
        githubLink: null,
        liveLink: null,
        featured: true
    },
    {
        id: 2,
        name: "Sree Dhaneshwari Automobiles",
        description: "An ecommerce platform for retail shop for automobiles spare parts. Developed a web based platform for quick ordering of spare parts, features like adding, updating and deleting products. Solution increased the order rates by approximately 50%.",
        techStack: ["ReactJS", "NodeJs", "MongoDb", "Firebase", "TailwindCSS"],
        image: require('../assets/sda.png'),
        githubLink: "https://github.com/Abhishek-Hosamani/SreeDaneshwariAutomobiles",
        liveLink: null,
        featured: true
    },
    {
        id: 3,
        name: "InsightKLETech",
        description: "Website for KLE Tech students to connect and explore all the college activities. Created a student platform for managing and notifying college club and research activities, community for like minded talents, one stop place to explore the research works of faculty and join different specialized laboratories.",
        techStack: ["ReactJS", "NodeJs", "MongoDb", "TailwindCSS", "MaterialUI"],
        image: require('../assets/IUCEE.png'),
        githubLink: "https://github.com/Abhishek-Hosamani/IUCEE-Front-End-dev",
        liveLink: null,
        featured: true
    },
    {
        id: 4,
        name: "OTP Captcha Authentication",
        description: "Secure authentication system using OTP verification with Twilio API integration.",
        techStack: ["NodeJS", "Express", "REST", "TwilioAPI"],
        image: require('../assets/otp.png'),
        githubLink: "https://github.com/Abhishek-Hosamani/OtpCaptchaAuthentication",
        liveLink: null,
        featured: false
    },
    {
        id: 5,
        name: "Kala Bazaar",
        description: "A simulation-based marketplace application built with C++ focusing on object-oriented programming principles.",
        techStack: ["C++", "OOPs", "Problem Solving", "Designing", "Simulation"],
        image: require('../assets/Kala.jpg'),
        githubLink: null,
        liveLink: null,
        featured: false
    }
];

export const education = [
    {
        id: 1,
        degree: "B.E Computer Science Engineering",
        institution: "KLE Technological University",
        location: "Hubli, India",
        year: "2024",
        grade: "CGPA: 9.3",
        current: false
    },
    {
        id: 2,
        degree: "Pre-University",
        institution: "Vidyaniketan PU Science College",
        location: "Hubli, India",
        year: "2020",
        grade: "Percentage: 94.67%",
        current: false
    },
    {
        id: 3,
        degree: "High School",
        institution: "Smt. Nirmala Thakkar High School",
        location: "Hubli, India",
        year: "2018",
        grade: "Percentage: 97.28%",
        current: false
    }
];

export const academicAchievements = [
    {
        id: 1,
        title: "Club Membership",
        description: "Member of Bits-N-Bytes Club",
        details: "Conducted Academic activities through club",
        url: null
    },
    {
        id: 2,
        title: "Published Paper on Quantization",
        description: "A Survey on Quantization Methods for Optimization of Deep Neural Networks",
        details: "Research paper published on quantization techniques for neural network optimization",
        url: "https://ieeexplore.ieee.org/abstract/document/10028742/"
    },
    {
        id: 3,
        title: "Published Paper on Distance Detection",
        description: "Optimal Solution for Distance Detection using Deep Learning Techniques on Embedded devices",
        details: "Research paper on distance detection using YOLO embedded on edge devices",
        url: "https://link.springer.com/chapter/10.1007/978-981-99-7633-1_28"
    }
];

export const socialLinks = {
    github: "https://github.com/Abhishek-Hosamani",
    linkedin: "https://www.linkedin.com/in/abhishekhosamani04",
    email: "abhihosamani17@gmail.com",
    // phone: "6362197359"
};

// Configuration for the website
export const siteConfig = {
    title: "Abhishek Hosamani - Software Engineer",
    description: "Portfolio of Abhishek Hosamani - Full Stack Developer, AI/ML Engineer",
    keywords: ["Software Engineer", "Full Stack Developer", "React", "Node.js", "AI/ML", "Deep Learning"],
    author: "Abhishek Hosamani",
    theme: {
        primaryColor: "#3a3942",
        secondaryColor: "#252529",
        accentColor: "#fca311",
        textColor: "#ffffff"
    }
};
