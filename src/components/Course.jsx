import { useState } from 'react';

const Course = () => {
    const [showAcademic, setShowAcademic] = useState(false);
    const [showNonAcademic, setShowNonAcademic] = useState(false);

    const academicClasses = ['LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'];
    const nonAcademicClasses = ['Computer', 'Robotics', 'Abacus', 'Vedic Maths', 'Karate', 'Music', 'Physical Training', 'Soft Skill'];

    return (
        <section id="course" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--clr-neutral-100)', paddingTop: '80px' }}>
            <div className="container text-center">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    
                    {/* Academic Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Academic Box */}
                        <div 
                            className="service-card"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', border: showAcademic ? '2px solid var(--clr-primary-400)' : '1px solid rgba(0,0,0,0.05)' }} 
                            onClick={() => setShowAcademic(!showAcademic)}
                        >
                            <h2 className="section-title" style={{ margin: 0, color: 'var(--clr-primary-500)', pointerEvents: 'none', fontSize: '1.8rem' }}>ACADEMIC</h2>
                        </div>
                        
                        {/* Hidden Academic List */}
                        {showAcademic && (
                            <div id="academic-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {academicClasses.map((cls, idx) => (
                                    <div 
                                        key={idx} 
                                        className="grade-box" 
                                        style={{ padding: '1rem', border: '1px solid var(--clr-neutral-300)', borderRadius: 'var(--border-radius-sm)', background: 'white', fontWeight: '600', color: 'var(--clr-neutral-800)', cursor: 'pointer', transition: 'background 0.2s' }} 
                                        onMouseOver={(e) => e.currentTarget.style.background = 'var(--clr-neutral-200)'} 
                                        onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                                    >
                                        {cls}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Non-Academic Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Non-Academic Box */}
                        <div 
                            className="service-card"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', border: showNonAcademic ? '2px solid var(--clr-primary-400)' : '1px solid rgba(0,0,0,0.05)' }} 
                            onClick={() => setShowNonAcademic(!showNonAcademic)}
                        >
                            <h2 className="section-title" style={{ margin: 0, color: 'var(--clr-primary-500)', pointerEvents: 'none', fontSize: '1.8rem' }}>NON - ACADEMIC</h2>
                        </div>
                        
                        {/* Hidden Non-Academic List */}
                        {showNonAcademic && (
                            <div id="nonacademic-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {nonAcademicClasses.map((cls, idx) => (
                                    <div 
                                        key={idx} 
                                        className="grade-box" 
                                        style={{ padding: '1rem', border: '1px solid var(--clr-neutral-300)', borderRadius: 'var(--border-radius-sm)', background: 'white', fontWeight: '600', color: 'var(--clr-neutral-800)', cursor: 'pointer', transition: 'background 0.2s' }} 
                                        onMouseOver={(e) => e.currentTarget.style.background = 'var(--clr-neutral-200)'} 
                                        onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                                    >
                                        {cls}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Course;
