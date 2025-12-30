// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Yugam Nanda - Full Stack Developer</title>
        <meta name="description" content="Welcome to Yugam Nanda's portfolio website. I'm Yugam Nanda , a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content=" Yugam Nanda ,yugam portfolio, Software Developer" />
        <meta name="author" content="Yugam Nanda" />
        <meta property="og:title" content="Yugam Nanda - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yugamnanda18.github.io/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yugam Nanda - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://app.netlify.com/teams/yugamnanda-work/projects" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yugam Nanda",
            "url": "https://yugamnanda18.github.io/portfolio",
            "sameAs": [
              "https://github.com/yugamnanda18",
              "https://www.linkedin.com/in/yugamnanda/",
              "https://app.netlify.com/teams/yugamnanda-work/projects",
            ],
            "jobTitle": "Full Stack Developer",
            "description": "Portfolio website of Aditya Kumar Srivastava, Software Engineer. Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;