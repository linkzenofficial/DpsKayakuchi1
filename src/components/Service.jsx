const Service = () => {
    return (
        <section id="service" className="section bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '1rem' }}>
                        At Thymos Science Academy, we are committed to providing a comprehensive array of services designed to meet the diverse needs of our students and their families. Our goal is to offer a holistic educational experience that goes beyond traditional academics, empowering students to thrive both inside and outside the classroom.
                    </p>
                </div>

                <div className="service-grid">
                    {/* Card 1: Academic Programs */}
                    <div className="service-card">
                        <div className="service-icon">📚</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Academic Programs</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Core Subjects:</strong> We offer a rigorous curriculum in mathematics, science, language arts, and social studies.</li>
                            <li><strong>Enrichment Courses:</strong> Coding, robotics, creative writing, foreign languages, music, and art.</li>
                            <li><strong>AP Courses:</strong> Advanced Placement courses for college credit.</li>
                        </ul>
                    </div>

                    {/* Card 2: Personalized Learning */}
                    <div className="service-card">
                        <div className="service-icon">🎯</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Personalized Learning</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Small Class Sizes:</strong> Students receive personalized attention from experienced educators.</li>
                            <li><strong>Individualized Instruction:</strong> We tailor instruction to accommodate diverse learning styles.</li>
                        </ul>
                    </div>

                    {/* Card 3: Academic Support Services */}
                    <div className="service-card">
                        <div className="service-icon">🤝</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Academic Support Services</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Tutoring:</strong> Extra support and reinforcement in various subjects.</li>
                            <li><strong>Study Skills Workshops:</strong> Essential strategies for organization, time management, and test-taking.</li>
                        </ul>
                    </div>

                    {/* Card 4: College and Career Preparation */}
                    <div className="service-card">
                        <div className="service-icon">🎓</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>College & Career Prep</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>College Counseling:</strong> Guidance through the application process and financial aid.</li>
                            <li><strong>Career Exploration:</strong> Real-world experience through internships and skill development.</li>
                        </ul>
                    </div>

                    {/* Card 5: Extracurricular Activities */}
                    <div className="service-card">
                        <div className="service-icon">⚽</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Extracurricular Activities</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Sports Teams:</strong> Promoting physical fitness, teamwork, and sportsmanship.</li>
                            <li><strong>Clubs & Organizations:</strong> Pursue interests, develop leadership, and connect with peers.</li>
                        </ul>
                    </div>

                    {/* Card 6: Community Engagement */}
                    <div className="service-card">
                        <div className="service-icon">🌍</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--clr-neutral-900)' }}>Community Engagement</h3>
                        <ul style={{ color: 'var(--clr-neutral-800)', fontSize: 'var(--fs-400)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Service Projects:</strong> Make a positive impact while developing empathy and civic responsibility.</li>
                            <li><strong>Parent Involvement:</strong> Workshops, regular communication, and volunteer opportunities.</li>
                        </ul>
                    </div>
                </div>

                {/* Message from the Director */}
                <div style={{ marginTop: 'var(--space-xxl)', background: 'white', padding: '3rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h2 className="section-title text-center" style={{ marginBottom: '2.5rem', display: 'block' }}>Message from the Director</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p>Dear Parents, Guardians, Teachers, Staff, Students, and Well-wishers,</p>
                        <p>I am delighted to extend my heartfelt greetings to each one of you as we come together on the platform of Thymos Science Academy.</p>
                        <p>As the Director of this esteemed institution, I take immense pride in leading a team of passionate educators and dedicated staff who are committed to providing the best possible educational experience to our students. Our mission is not merely to impart knowledge but to ignite a lifelong love for learning, foster creativity, and develop essential life skills that will empower our students to thrive in an ever-evolving world.</p>
                        <p>At Thymos Science Academy, we firmly believe that every child is unique and possesses untapped potential waiting to be unleashed. As such, we strive to create a nurturing and inclusive environment that encourages curiosity and exploration, allowing each student to discover their strengths and passions. As we embrace the possibilities of technology and innovation, we also cherish the importance of traditional values and human connections. Our classrooms are not just spaces for learning but places where minds are ignited, dreams are nurtured, and lasting memories are formed.</p>
                        <p>I invite all members of our school community and well-wishers to join hands with us as we collectively embark on this quest for knowledge, growth, and progress. Together, let us create a future where our students shine as beacons of hope and knowledge.</p>
                        <p>Thank you for your continued support and trust in Thymos Science Academy.</p>
                        <div style={{ marginTop: '1rem' }}>
                            <p style={{ margin: 0 }}>Best Regards,</p>
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--clr-primary-500)' }}>Er. Zahidul Islam</p>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--clr-neutral-800)' }}>Director</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Service;
