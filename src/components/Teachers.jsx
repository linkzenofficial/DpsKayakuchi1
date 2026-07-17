const Teachers = () => {
    const teachersList = [
        { name: 'Dr. Sarah Johnson', designation: 'Principal', subject: 'Administration', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Mr. David Smith', designation: 'Head of Science', subject: 'Physics', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Mrs. Emily Davis', designation: 'Senior Coordinator', subject: 'Mathematics', image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { name: 'Mr. Robert Wilson', designation: 'Sports Director', subject: 'Physical Education', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    ];

    return (
        <section id="teachers" className="section" style={{ backgroundColor: 'var(--clr-neutral-200)', paddingTop: '100px' }}>
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>Our Faculty</span>
                    <h2 className="section-title">Meet Our Exceptional Teachers</h2>
                    <p className="section-description" style={{ maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
                        Our educators are highly qualified, passionate, and dedicated to shaping the future of our students. They are mentors who inspire excellence every day.
                    </p>
                </div>

                <div className="teachers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {teachersList.map((teacher, index) => (
                        <div key={index} className="teacher-card glass-panel" style={{ borderRadius: '1rem', overflow: 'hidden', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                            <div className="teacher-img-wrapper" style={{ height: '280px', overflow: 'hidden' }}>
                                <img src={teacher.image} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="teacher-img" />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--clr-neutral-900)' }}>{teacher.name}</h3>
                                <p style={{ margin: '0 0 0.2rem 0', fontWeight: 'bold', color: 'var(--clr-primary-500)', fontSize: '0.9rem' }}>{teacher.designation}</p>
                                <p style={{ margin: '0', color: 'var(--clr-neutral-800)', fontSize: '0.9rem' }}>{teacher.subject}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style>{`
                .teacher-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-lg);
                }
                .teacher-card:hover .teacher-img {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default Teachers;
