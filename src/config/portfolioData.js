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
    bio: "Backend-focused Software Engineer with 1+ year of experience building scalable, production-grade systems. Currently at SproutsAI working on AI-powered interview autoscheduling, analytics chatbot integrations, and automation workflows at scale.",
    profileImage: require('../assets/NewImage.jpg')
};

export const skills = {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS", "SQL"],
    frontend: ["ReactJs", "Redux", "Bootstrap", "Tailwindcss"],
    backend: ["Java Spring Boot", "Nodejs", "Flask", "Express", "REST API", "Webhooks"],
    databases: ["MongoDB", "Microsoft SQL Server", "Redis"],
    others: ["Deep Learning", "AI/ML", "OOPs", "Data Structures and Algorithms", "Microservices", "System Design", "RabbitMQ", "CI/CD", "Postman", "Jira", "Figma", "Github"]
};

export const experience = [
    {
        id: 1,
        title: "Software Engineer",
        company: "SproutsAi",
        location: "California, USA (Remote)",
        period: "12/2024 - Present",
        description: [
            "Owned and delivered an AI-powered interview autoscheduling system end-to-end, automating interview booking, rescheduling, and cancellations similar to Calendly, reducing manual recruiter coordination by 70%.",
            "Designed and implemented bulk interview scheduling, enabling 1000+ interviews supported in a single flow using free/busy window computation and validating feasibility for scheduling while preventing overlapping meetings.",
            "Implemented rate-limiting and fault-tolerant API handling for Google Calendar integrations using Redis, eliminating HTTP 429 errors during peak usage.",
            "Built interviewer availability templatization with timezone normalization and slot-locking, reducing repeated availability setup by 60%.",
            "Implemented scheduling sequence configuration allowing recruiters to attach custom email workflows with 100% fallback reliability to default templates.",
            "Designed and integrated a universal analytics chatbot service, cutting future chatbot integration effort by 50%.",
            "Skills: Java, Spring Boot, ReactJs, Nodejs, Tailwindcss, Express, Redux, MongoDb, Redis, Google Calendar API, Webhooks, Gen-AI"
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
            "Built production UI modules including Interview Feedback, Candidate Review, Pipeline View, and Candidate Details.",
            "Implemented availability synchronization workflows, saving 60-70% operational effort.",
            "Integrated candidate and interviewer services via REST APIs.",
            "Skills: Java, Spring Boot, ReactJs, Nodejs, Tailwindcss, Express, Redux, MongoDb, Figma"
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
            "Built an AI-assisted web editor for writing software test specifications.",
            "Migrated a monolithic system to microservices architecture, improving system performance by 30% and 2x increase in throughput of test specification generation.",
            "Skills: Java, Spring Boot, ReactJs, Redux, Tailwindcss, Flask, SQL, Microsoft SQL Server"
        ],
        current: false
    }
];

export const projects = [
    {
        id: 1,
        name: "Hybrid Quantization Tool",
        description: "A tool to optimize Deep Neural Networks (DNNs) using low-bit quantization techniques. Reduced DNN model size by 75% with under 6% accuracy loss, making them efficient for deployment on resource-constrained edge and mobile devices.",
        techStack: ["Python", "PyTorch", "Quantization", "Deep Learning", "ML", "Computer Vision"],
        image: require('../assets/quantization.jpg'),
        githubLink: null,
        liveLink: null,
        featured: true
    },
    {
        id: 2,
        name: "Sree Dhaneshwari Automobiles",
        description: "Full-stack e-commerce platform for an automobile spare parts retail shop. Implemented role-based authentication, scalable REST APIs, and product management features. Increased store order rate by 50%.",
        techStack: ["ReactJS", "NodeJs", "Express", "MongoDb", "Firebase", "TailwindCSS"],
        image: require('../assets/sda.png'),
        githubLink: "https://github.com/Abhishek-Hosamani/SreeDaneshwariAutomobiles",
        liveLink: null,
        featured: true
    },
    {
        id: 3,
        name: "InsightKLETech",
        description: "Centralized web platform for KLE Tech students to explore college clubs, research labs, and events. Designed and implemented backend REST APIs to manage users, clubs, notifications, and research listings. Improved discoverability by consolidating fragmented college information into a single system.",
        techStack: ["ReactJS", "NodeJs", "MongoDb", "TailwindCSS", "MaterialUI", "REST API"],
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
    keywords: ["Software Engineer", "Full Stack Developer", "Backend Engineer", "Java", "Spring Boot", "React", "Node.js", "AI/ML", "Deep Learning", "Microservices"],
    author: "Abhishek Hosamani",
    theme: {
        primaryColor: "#3a3942",
        secondaryColor: "#252529",
        accentColor: "#fca311",
        textColor: "#ffffff"
    }
};
