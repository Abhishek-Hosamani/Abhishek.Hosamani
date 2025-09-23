# Professional Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience, projects, and skills.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Configurable**: Easy-to-update configuration file for all content
- **Performance**: Optimized for fast loading and smooth user experience

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Hero section with profile and intro
│   ├── Navigation.jsx      # Fixed navigation bar
│   ├── Skills.jsx          # Skills and technologies section
│   ├── Experience.jsx      # Professional experience timeline
│   ├── Projects.jsx        # Featured projects showcase
│   ├── Education.jsx       # Education and academic achievements
│   ├── Contact.jsx         # Contact form and information
│   └── Footer.jsx          # Footer with links and info
├── config/
│   └── portfolioData.js   # Centralized data configuration
├── assets/                 # Images and static assets
├── App.js                  # Main application component
└── index.css              # Global styles and animations
```

## ⚙️ Configuration

All portfolio data is centralized in `src/config/portfolioData.js`. This makes it easy to update your information without touching the component code.

### Available Configuration Sections:

#### Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "your-phone-number",
  linkedin: "your-linkedin-url",
  github: "your-github-url",
  location: "Your Location",
  bio: "Your bio description",
  profileImage: "/path/to/profile-image.jpg"
};
```

#### Skills
```javascript
export const skills = {
  languages: ["JavaScript", "Python", "Java"],
  frontend: ["React", "Vue", "Angular"],
  backend: ["Node.js", "Express", "Django"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  others: ["Git", "Docker", "AWS"]
};
```

#### Experience
```javascript
export const experience = [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    period: "Start Date - End Date",
    description: [
      "Achievement 1",
      "Achievement 2",
      "Skills: Technology1, Technology2"
    ],
    current: true // or false
  }
];
```

#### Projects
```javascript
export const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "Project description",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "/path/to/project-image.jpg",
    githubLink: "https://github.com/username/repo",
    liveLink: "https://project-demo.com",
    featured: true // or false
  }
];
```

#### Education
```javascript
export const education = [
  {
    id: 1,
    degree: "Degree Name",
    institution: "Institution Name",
    location: "Location",
    year: "Year",
    grade: "Grade/GPA",
    current: false
  }
];
```

#### Academic Achievements
```javascript
export const academicAchievements = [
  {
    id: 1,
    title: "Achievement Title",
    description: "Achievement Description",
    details: "Additional details"
  }
];
```

## 🎨 Customization

### Colors and Theme
The website uses a dark theme with orange accents. You can customize colors by modifying the Tailwind classes in the components or updating the theme configuration in `portfolioData.js`.

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Add corresponding data to `portfolioData.js`
4. Update the navigation in `Navigation.jsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations and effects are defined in the CSS file

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Getting Started

1. **Update Configuration**: Edit `src/config/portfolioData.js` with your information
2. **Add Images**: Place your profile image and project images in the `src/assets/` folder
3. **Customize**: Modify colors, fonts, or layout as needed
4. **Deploy**: Build and deploy to your preferred hosting platform

## 📝 Adding New Content

### Adding a New Project
1. Add project data to the `projects` array in `portfolioData.js`
2. Place project image in `src/assets/`
3. Update the image path in the project object

### Adding New Experience
1. Add experience data to the `experience` array in `portfolioData.js`
2. Include achievements and skills used

### Adding New Skills
1. Add skills to the appropriate category in the `skills` object
2. Skills will automatically appear in the skills section

## 🔧 Dependencies

- React
- Tailwind CSS
- @iconify/react (for icons)
- react-type-animation (for typing animation)

## 📄 License

This project is open source and available under the MIT License.

---

**Location**: The config file is located at `src/config/portfolioData.js`

**Note**: Always update the config file when you want to add or modify content. This keeps your portfolio maintainable and easy to update.