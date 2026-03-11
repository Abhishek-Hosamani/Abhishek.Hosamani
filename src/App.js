import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [headerRef] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();

  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Navigation />

        <main>
          <section id="home" ref={headerRef}>
            <Header />
          </section>

          <section id="about" ref={aboutRef}>
            <div
              className={`py-20 theme-transition ${aboutVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h2
                  className="text-4xl font-bold mb-8 theme-transition"
                  style={{ color: 'var(--text-primary)' }}
                >
                  About Me
                </h2>
                <p
                  className="text-lg max-w-3xl mx-auto leading-relaxed theme-transition"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I'm a passionate Software Engineer with expertise in Full Stack Development and AI/ML.
                  Currently working at SproutsAi on autonomous interview scheduling and AI-assisted tools.
                  I love building innovative solutions and contributing to the tech community through research and development.
                </p>
              </div>
            </div>
          </section>

          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

