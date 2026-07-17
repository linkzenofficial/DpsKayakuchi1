const About = () => {
    return (
        <section id="about" className="section creative-section">
            <div className="bg-blob-1" style={{ top: '10%', left: '-5%', width: '300px', height: '300px' }}></div>
            <div className="bg-blob-2" style={{ bottom: '10%', right: '-5%', width: '400px', height: '400px' }}></div>
            
            <div className="container">
                <div className="section-header text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 className="section-title">About Us</h2>
                    <h3 style={{ color: 'var(--clr-neutral-900)', marginTop: '1rem', fontSize: '1.5rem' }}>Where Quality Education Meets Boundless Potential!</h3>
                    <p className="section-description" style={{ maxWidth: '800px', margin: '1rem auto' }}>
                        At DPS Kayakuchi, we believe that education is the key to unlocking the limitless potential within every individual. Established with a vision to provide unparalleled quality education, our institute stands as a beacon of excellence in nurturing young minds and preparing them for a dynamic future.
                    </p>
                </div>

                <div className="vision-mission-grid" style={{ marginBottom: 'var(--space-xxl)', gap: '4rem' }}>
                    {/* Card 1: Our Approach */}
                    <div className="creative-card vision-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🧭</span>
                        </div>
                        <h3 className="creative-title">Our Approach</h3>
                        <p className="creative-text">
                            We understand that each student is unique. We take a personalized approach through small class sizes, interactive teaching methods, and differentiated instruction to create a supportive learning environment where students thrive.
                        </p>
                    </div>

                    {/* Card 2: Our Curriculum */}
                    <div className="creative-card mission-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">📖</span>
                        </div>
                        <h3 className="creative-title">Our Curriculum</h3>
                        <p className="creative-text">
                            Crafted to align with the latest educational standards while incorporating innovative teaching methodologies. From core academic subjects to specialized enrichment courses, we provide a well-rounded education.
                        </p>
                    </div>

                    {/* Card 3: Our Faculty */}
                    <div className="creative-card vision-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">👩‍🏫</span>
                        </div>
                        <h3 className="creative-title">Our Faculty</h3>
                        <p className="creative-text">
                            A team of dedicated and experienced educators who are passionate about teaching. With their expertise and enthusiasm, our faculty inspire students to push boundaries and achieve their full potential.
                        </p>
                    </div>

                    {/* Card 4: Our Values */}
                    <div className="creative-card mission-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">⚖️</span>
                        </div>
                        <h3 className="creative-title">Our Values</h3>
                        <p className="creative-text">
                            Integrity, respect, excellence, and inclusivity guide everything we do. We foster a culture of mutual respect and open-mindedness, where diversity is celebrated and all students feel valued.
                        </p>
                    </div>
                </div>

                <div className="glass-testimonial" style={{ background: 'linear-gradient(135deg, var(--clr-primary-400), var(--clr-primary-500))', color: 'white', textAlign: 'center' }}>
                    <div className="bg-blob-1" style={{ top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)', filter: 'blur(30px)', borderRadius: '2rem' }}></div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white', position: 'relative', zIndex: 2 }}>Our Promise</h3>
                    <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 1.5rem auto', lineHeight: '1.8', position: 'relative', zIndex: 2 }}>
                        We are dedicated to providing a nurturing and stimulating learning environment. Whether your goal is academic achievement, personal growth, or preparing for future success, we are here to support you every step of the way.
                    </p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0', position: 'relative', zIndex: 2 }}>
                        Join us on a journey of discovery, exploration, and transformation to shape a brighter future for all.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
