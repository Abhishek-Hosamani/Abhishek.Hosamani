const sda = require('../assets/sda.png')
const iuceeImg = require('../assets/IUCEE.png')
const quant = require('../assets/quantization.jpg')
const kala = require('../assets/Kala.jpg')
const otp = require('../assets/otp.png')
export const Projects = [
    {
        ProjectName: "Sree Daneshwari automobiles",
        TechStack: "ReactJS,NodeJs ,MongoDb, Firebase,TailwindCSS",
        CoverImage: sda,
        repolink: `https://github.com/Abhishek-Hosamani/SreeDaneshwariAutomobiles`
    },
    {
        ProjectName: "IUCEE Student Chapter",
        TechStack: "ReactJS, NodeJs, MongoDb, TailwindCSS, MaterialUI",
        CoverImage: iuceeImg,
        repolink: `https://github.com/Abhishek-Hosamani/IUCEE-Front-End-dev`
    },
    {
        ProjectName: "OTP Captcha Authentication",
        TechStack: "NodeJS, express, REST, TwiloAPI",
        CoverImage: otp,
        repolink: `https://github.com/Abhishek-Hosamani/OtpCaptchaAuthentication`
    },
    // {
    //     ProjectName: "Hybrid Quantization Tool",
    //     TechStack: "Python, Pytorch, Quantization, ML",
    //     CoverImage: quant
    // },
    {
        ProjectName: "Kala Bazaar",
        TechStack: "C++, OOPS, Problem Solving, Designing, Simulation",
        CoverImage: kala
    }

]


const details = {
    work: "Currently working as Intern at BGSW"
}

export const skillset = [
    {
        type: 'Languages',
        skills: ['C', 'C++', 'Python', 'SQL']
    },
    {
        type: 'Frontend',
        skills: ['ReactJS', 'Bootstrap', 'Tailwindcss']
    },
    {
        type: 'Backend and Database',
        skills: ['ExpressJS', 'NodeJS', 'MongoDB']
    }
]
export default details;