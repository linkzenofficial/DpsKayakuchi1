const Home = () => {
    return (
        <section id="home">
            {/* Vision & Mission Section */}
            <div className="section bg-light" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', paddingTop: '80px' }}>
                        
                        {/* Our Vision Box */}
                        <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--clr-primary-500)', fontSize: 'var(--fs-600)' }}>Our Vision</h2>
                            <p style={{ fontSize: 'var(--fs-400)', color: 'var(--clr-neutral-800)', flexGrow: 1 }}>
                                Our vision at Thymos Science Academy is to set for education in the twenty-first century. Thymos Science Academy is an amazing school where you can excel in academics and also build friendships that will last a lifetime. Thymos Science Academy is the only academic and non-academic School in our area. This drives us even more to begin with the end in mind, and prepare students for life-long success and careers of impact.
                            </p>
                        </div>

                        {/* Our Mission Box */}
                        <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--clr-primary-500)', fontSize: 'var(--fs-600)' }}>Our Mission</h2>
                            <p style={{ fontSize: 'var(--fs-400)', color: 'var(--clr-neutral-800)', flexGrow: 1 }}>
                                The Mission of Thymos Science Academy is to develop intellectually curious and capable young people who are selfless contributors to both local and global communities, and who aspire to be ethical and compassionate leaders. Through a rigorous and innovative academic program in math, science, and technology, in combination with the liberal arts, Thymos Science Academy affords its diverse student population those experiences, skills, and values that will prepare them for purposeful contributions in higher education and STEM-related fields.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
