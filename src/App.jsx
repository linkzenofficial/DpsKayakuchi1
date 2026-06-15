import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Course from './components/Course';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'service', 'enquiry', 'course', 'admission', 'gallery', 'contact'].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'service' && <Service />}
        {activeSection === 'course' && <Course />}
        {activeSection === 'contact' && <Contact />}
        
        {/* Render placeholders for missing sections to keep UI consistent */}
        {activeSection === 'enquiry' && (
          <section id="enquiry" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-neutral-100)', paddingTop: '80px' }}>
            <h2>Enquiry section coming soon...</h2>
          </section>
        )}
        {activeSection === 'admission' && (
          <section id="admission" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-neutral-100)', paddingTop: '80px' }}>
            <h2>Admission section coming soon...</h2>
          </section>
        )}
        {activeSection === 'gallery' && (
          <section id="gallery" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-neutral-100)', paddingTop: '80px' }}>
            <h2>Gallery section coming soon...</h2>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
