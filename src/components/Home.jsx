const Home = () => {
    return (
        <section id="home">
            {/* Vision & Mission Section */}
            <div className="section" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--clr-neutral-100)', overflow: 'hidden' }}>
                
                {/* Decorative background blobs */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))', borderRadius: '50%', filter: 'blur(60px)', zIndex: -1 }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(79, 70, 229, 0.15))', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="vision-mission-grid">
                        
                        {/* Our Vision Box */}
                        <div className="creative-card vision-card">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">👁️</span>
                            </div>
                            <h2 className="section-title creative-title">Our Vision</h2>
                            <p className="creative-text">
                                Our vision at DPS Kayakuchi is to set for education in the twenty-first century. DPS Kayakuchi is an amazing school where you can excel in academics and also build friendships that will last a lifetime. DPS Kayakuchi is the only academic and non-academic School in our area. This drives us even more to begin with the end in mind, and prepare students for life-long success and careers of impact.
                            </p>
                        </div>

                        {/* Our Mission Box */}
                        <div className="creative-card mission-card">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">🚀</span>
                            </div>
                            <h2 className="section-title creative-title">Our Mission</h2>
                            <p className="creative-text">
                                The Mission of DPS Kayakuchi is to develop intellectually curious and capable young people who are selfless contributors to both local and global communities, and who aspire to be ethical and compassionate leaders. Through a rigorous and innovative academic program in math, science, and technology, in combination with the liberal arts, DPS Kayakuchi affords its diverse student population those experiences, skills, and values that will prepare them for purposeful contributions in higher education and STEM-related fields.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
