const Facilities = () => {
    return (
        <section id="facilities" className="section creative-section">
            <div className="bg-blob-2" style={{ top: '20%', right: '-10%', width: '400px', height: '400px' }}></div>
            <div className="bg-blob-1" style={{ bottom: '10%', left: '-5%', width: '300px', height: '300px' }}></div>
            
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header text-center">
                    <h2 className="section-title">World-Class Facilities</h2>
                    <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '1rem' }}>
                        Our campus is equipped with state-of-the-art infrastructure to provide an optimal learning environment. We believe in providing resources that empower students to explore, innovate, and excel.
                    </p>
                </div>

                <div className="vision-mission-grid" style={{ marginBottom: 'var(--space-xxl)', gap: '4rem' }}>
                    
                    {/* Facility 1 */}
                    <div className="creative-card vision-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">📚</span>
                        </div>
                        <h3 className="creative-title">Digital Library</h3>
                        <p className="creative-text">
                            A vast collection of books, journals, and digital resources in a quiet, air-conditioned environment designed for deep focus and research.
                        </p>
                    </div>

                    {/* Facility 2 */}
                    <div className="creative-card mission-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🔬</span>
                        </div>
                        <h3 className="creative-title">Science Laboratories</h3>
                        <p className="creative-text">
                            Fully equipped Physics, Chemistry, and Biology labs that encourage hands-on experiments and practical application of theoretical concepts.
                        </p>
                    </div>

                    {/* Facility 3 */}
                    <div className="creative-card vision-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">💻</span>
                        </div>
                        <h3 className="creative-title">Computer Center</h3>
                        <p className="creative-text">
                            High-speed internet, modern workstations, and the latest software to ensure our students are at the forefront of digital literacy and coding.
                        </p>
                    </div>

                    {/* Facility 4 */}
                    <div className="creative-card mission-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">⚽</span>
                        </div>
                        <h3 className="creative-title">Sports Complex</h3>
                        <p className="creative-text">
                            Expansive playgrounds for football, cricket, and athletics, alongside indoor facilities for badminton and table tennis.
                        </p>
                    </div>

                    {/* Facility 5 */}
                    <div className="creative-card vision-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🎨</span>
                        </div>
                        <h3 className="creative-title">Art & Music Studios</h3>
                        <p className="creative-text">
                            Dedicated spaces for creative expression, equipped with musical instruments, art supplies, and guided by expert instructors.
                        </p>
                    </div>

                    {/* Facility 6 */}
                    <div className="creative-card mission-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🚌</span>
                        </div>
                        <h3 className="creative-title">Transport Services</h3>
                        <p className="creative-text">
                            Safe and reliable fleet of buses covering extensive routes, ensuring comfortable transit for students across the region.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
