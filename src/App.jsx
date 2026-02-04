import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white relative overflow-hidden">
       {/* Background gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 flex flex-col gap-20">
        <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <Hero />
        </section>
        
        <section id="skills" className="min-h-screen py-20">
             <Skills />
        </section>

        <section id="experience" className="min-h-screen py-20">
             <Experience />
        </section>

        <section id="projects" className="min-h-screen py-20">
             <Projects />
        </section>

        <section id="education" className="min-h-screen py-20">
             <Education />
        </section>

        <section id="contact" className="min-h-[50vh] py-20">
             <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
