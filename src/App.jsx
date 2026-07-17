import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Home from './components/Home';
import About from './components/About';
import Facilities from './components/Facilities';
import Course from './components/Course';
import Teachers from './components/Teachers';
import Admission from './components/Admission';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'facilities', 'course', 'teachers', 'admission', 'gallery', 'contact'].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && (
          <>
            <HeroSlider />
            <Home />
          </>
        )}
        {activeSection === 'about' && <About />}
        {activeSection === 'facilities' && <Facilities />}
        {activeSection === 'course' && <Course />}
        {activeSection === 'teachers' && <Teachers />}
        {activeSection === 'admission' && <Admission />}
        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </>
  );
}

export default App;
