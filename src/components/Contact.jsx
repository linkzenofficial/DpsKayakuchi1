const Contact = () => {
    return (
        <section id="contact" className="section creative-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
            <div className="bg-blob-2" style={{ top: '10%', left: '10%', width: '300px', height: '300px' }}></div>
            <div className="bg-blob-1" style={{ bottom: '10%', right: '10%', width: '400px', height: '400px' }}></div>
            
            <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                <div className="glass-testimonial" style={{ padding: '5rem 3rem', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, var(--clr-primary-400), var(--clr-secondary-400))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                        📍
                    </div>
                    <h2 className="section-title" style={{ margin: '0', color: 'var(--clr-primary-500)', fontSize: '2.5rem' }}>Contact Us</h2>
                    <p style={{ fontSize: 'var(--fs-600)', color: 'var(--clr-neutral-800)', margin: '0', lineHeight: '1.6' }}>
                        We'd love to hear from you. Find us at:
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.5)', padding: '1.5rem 3rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.8)' }}>
                        <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--clr-neutral-900)', margin: '0', letterSpacing: '2px' }}>KAYAKUCHI</p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--clr-primary-500)', margin: '0', fontWeight: '600', letterSpacing: '5px' }}>781352</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
