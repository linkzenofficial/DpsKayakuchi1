const About = () => {
    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">About Us</h2>
                    <h3 style={{ color: 'var(--clr-neutral-900)', marginTop: '1rem', fontSize: '1.5rem' }}>Where Quality Education Meets Boundless Potential!</h3>
                    <p className="section-description" style={{ maxWidth: '800px', margin: '1rem auto' }}>
                        At Thymos Science Academy, we believe that education is the key to unlocking the limitless potential within every individual. Established with a vision to provide unparalleled quality education, our institute stands as a beacon of excellence in nurturing young minds and preparing them for a dynamic future.
                    </p>
                </div>

                <div className="service-grid" style={{ marginBottom: 'var(--space-xxl)' }}>
                    {/* Card 1: Our Approach */}
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="service-icon" style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--clr-primary-500)' }}>🧭</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Our Approach</h3>
                        <p style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', lineHeight: '1.7', flexGrow: 1 }}>
                            We understand that each student is unique. We take a personalized approach through small class sizes, interactive teaching methods, and differentiated instruction to create a supportive learning environment where students thrive.
                        </p>
                    </div>

                    {/* Card 2: Our Curriculum */}
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="service-icon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'hsl(330, 80%, 50%)' }}>📖</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Our Curriculum</h3>
                        <p style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', lineHeight: '1.7', flexGrow: 1 }}>
                            Crafted to align with the latest educational standards while incorporating innovative teaching methodologies. From core academic subjects to specialized enrichment courses, we provide a well-rounded education.
                        </p>
                    </div>

                    {/* Card 3: Our Faculty */}
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="service-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'hsl(160, 80%, 40%)' }}>👩‍🏫</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Our Faculty</h3>
                        <p style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', lineHeight: '1.7', flexGrow: 1 }}>
                            A team of dedicated and experienced educators who are passionate about teaching. With their expertise and enthusiasm, our faculty inspire students to push boundaries and achieve their full potential.
                        </p>
                    </div>

                    {/* Card 4: Our Values */}
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="service-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'hsl(35, 90%, 50%)' }}>⚖️</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Our Values</h3>
                        <p style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', lineHeight: '1.7', flexGrow: 1 }}>
                            Integrity, respect, excellence, and inclusivity guide everything we do. We foster a culture of mutual respect and open-mindedness, where diversity is celebrated and all students feel valued.
                        </p>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, var(--clr-primary-400), var(--clr-primary-500))', color: 'white', padding: '3rem', borderRadius: 'var(--border-radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>Our Promise</h3>
                    <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 1.5rem auto', lineHeight: '1.8' }}>
                        We are dedicated to providing a nurturing and stimulating learning environment. Whether your goal is academic achievement, personal growth, or preparing for future success, we are here to support you every step of the way.
                    </p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>
                        Join us on a journey of discovery, exploration, and transformation to shape a brighter future for all.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
