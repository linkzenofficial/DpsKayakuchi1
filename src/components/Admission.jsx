const Admission = () => {
    const steps = [
        { number: '01', title: 'Submit Enquiry', desc: 'Fill out our online enquiry form or visit the school campus to get detailed information.' },
        { number: '02', title: 'Campus Tour', desc: 'Schedule a visit to explore our state-of-the-art facilities and meet our academic coordinators.' },
        { number: '03', title: 'Interaction', desc: 'An informal interaction session for the student and parents with the Principal or Head.' },
        { number: '04', title: 'Registration', desc: 'Complete the final registration by submitting required documents and admission fees.' }
    ];

    return (
        <section id="admission" className="section" style={{ backgroundColor: 'var(--clr-neutral-100)', paddingTop: '100px' }}>
            <div className="container">
                <div className="section-header text-center" data-aos="fade-up">
                    <span className="badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>Join Us</span>
                    <h2 className="section-title">Admission Process</h2>
                    <p className="section-description" style={{ maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
                        We follow a simple, transparent, and parent-friendly admission process. Begin your child's journey to excellence today.
                    </p>
                </div>

                <div className="admission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'flex-start' }}>
                    
                    {/* Process Steps */}
                    <div data-aos="fade-right" data-aos-delay="100">
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: 'var(--clr-neutral-900)' }}>Steps to Apply</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {steps.map((step, index) => (
                                <div key={index} data-aos="fade-up" data-aos-delay={index * 150} style={{ display: 'flex', gap: '1.5rem', background: 'var(--clr-bg-glass)', padding: '1.5rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--clr-primary-500)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.2rem', fontWeight: 'bold', flexShrink: 0 }}>
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: 'var(--clr-neutral-900)' }}>{step.title}</h4>
                                        <p style={{ margin: 0, color: 'var(--clr-neutral-800)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Enquiry Form */}
                    <div className="glass-panel" data-aos="fade-left" data-aos-delay="200" style={{ padding: '2.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, var(--clr-neutral-900), var(--clr-primary-500))', color: 'white' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Quick Enquiry</h3>
                        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Have questions? Leave your details and our admission counselor will call you back.</p>
                        
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>Parent's Name</label>
                                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: 'none', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>Phone Number</label>
                                <input type="tel" placeholder="Enter mobile number" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: 'none', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>Grade Applying For</label>
                                <select style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: 'none', outline: 'none' }}>
                                    <option value="">Select Grade</option>
                                    <option value="lkg">LKG / UKG</option>
                                    <option value="primary">Primary (Class 1-5)</option>
                                    <option value="middle">Middle (Class 6-8)</option>
                                    <option value="high">High (Class 9-10)</option>
                                    <option value="senior">Senior Secondary (Class 11-12)</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-secondary" style={{ marginTop: '1rem', backgroundColor: 'var(--clr-neutral-100)', color: 'white', border: 'none' }}>
                                Submit Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            <style>{`
                @media (max-width: 900px) {
                    .admission-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Admission;
