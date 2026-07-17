const Footer = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--clr-neutral-200)', color: 'white', paddingTop: '4rem' }}>
            <div className="container">
                <div className="footer-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    
                    {/* Brand Column */}
                    <div>
                        <a href="#home" className="footer-logo" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', display: 'block' }}>
                            <span style={{ color: 'var(--clr-primary-400)' }}>DPS</span> Kayakuchi
                        </a>
                        <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Providing quality education and fostering holistic development to shape the leaders of tomorrow.
                        </p>
                        <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" aria-label="Facebook" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>F</a>
                            <a href="#" aria-label="Twitter" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>T</a>
                            <a href="#" aria-label="Instagram" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>I</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                            <li><a href="#about" style={{ opacity: 0.7 }}>About Us</a></li>
                            <li><a href="#facilities" style={{ opacity: 0.7 }}>Facilities</a></li>
                            <li><a href="#course" style={{ opacity: 0.7 }}>Our Courses</a></li>
                            <li><a href="#admission" style={{ opacity: 0.7 }}>Admission</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-links">
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                            <li style={{ opacity: 0.7, display: 'flex', gap: '10px' }}>
                                <span>📍</span> DPS Kayakuchi Campus, Assam
                            </li>
                            <li style={{ opacity: 0.7, display: 'flex', gap: '10px' }}>
                                <span>📞</span> +91 9876543210
                            </li>
                            <li style={{ opacity: 0.7, display: 'flex', gap: '10px' }}>
                                <span>✉️</span> info@dpskayakuchi.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Newsletter</h4>
                        <p style={{ opacity: 0.7, marginBottom: '1rem' }}>Subscribe to get latest updates and news from the school.</p>
                        <form className="newsletter-form" style={{ display: 'flex' }} onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                style={{ padding: '0.8rem', border: 'none', borderRadius: '4px 0 0 4px', width: '100%', outline: 'none' }}
                            />
                            <button type="submit" style={{ padding: '0.8rem 1.2rem', background: 'var(--clr-primary-400)', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontWeight: 'bold' }}>
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            {/* Copyright */}
            <div className="footer-bottom" style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem 0', textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} DPS Kayakuchi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
