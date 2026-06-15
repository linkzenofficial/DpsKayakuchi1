const Contact = () => {
    return (
        <section id="contact" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-neutral-100)', paddingTop: '80px' }}>
            <div className="container text-center">
                <div style={{ padding: '4rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)', background: 'white', border: '1px solid var(--clr-neutral-300)', maxWidth: '600px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem', color: 'var(--clr-primary-500)' }}>Contact Us</h2>
                    <p style={{ fontSize: 'var(--fs-700)', fontWeight: '700', color: 'var(--clr-neutral-900)', margin: '0' }}>Kayakuchi , 781352</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
