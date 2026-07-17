import { useState, useEffect } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'facilities', label: 'Facilities' },
        { id: 'course', label: 'Our Courses' },
        { id: 'teachers', label: 'Our Teachers' },
        { id: 'admission', label: 'Admission Process' },
        { id: 'gallery', label: 'School Gallery' },
        { id: 'contact', label: 'Contact Us', isButton: true }
    ];

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveSection(id);
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
            {/* Top Header */}
            <div className="top-header">
                <div className="container top-header-container">
                    <div className="contact-info">
                        <span>📞 +91 9876543210</span>
                        <span>✉️ info@dpskayakuchi.com</span>
                    </div>
                    <div className="social-links-top">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Instagram">IG</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container nav-container">
                <div className="logo">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                        <span>DPS</span> Kayakuchi
                    </a>
                </div>
                
                <button 
                    className="mobile-nav-toggle" 
                    aria-controls="primary-navigation" 
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="hamburger"></span>
                </button>

                <nav>
                    <ul 
                        id="primary-navigation" 
                        className="primary-navigation" 
                        data-visible={mobileMenuOpen}
                    >
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    className={`nav-link ${link.isButton ? 'btn-contact' : ''} ${activeSection === link.id && !link.isButton ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
