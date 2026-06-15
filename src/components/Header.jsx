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
        { id: 'service', label: 'Our Service' },
        { id: 'enquiry', label: 'Enquiry' },
        { id: 'course', label: 'Our Course' },
        { id: 'admission', label: 'Admission' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'contact', label: 'Contact Us', isButton: true }
    ];

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveSection(id);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
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
