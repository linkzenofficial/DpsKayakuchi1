import { useState } from 'react';

const Course = () => {
    const [showAcademic, setShowAcademic] = useState(false);
    const [showNonAcademic, setShowNonAcademic] = useState(false);

    const academicClasses = ['LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'];
    const nonAcademicClasses = ['Computer', 'Robotics', 'Abacus', 'Vedic Maths', 'Karate', 'Music', 'Physical Training', 'Soft Skill'];

    return (
        <section id="course" className="section creative-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
            <div className="bg-blob-1" style={{ top: '30%', left: '-10%', width: '400px', height: '400px' }}></div>
            <div className="bg-blob-2" style={{ bottom: '20%', right: '-5%', width: '300px', height: '300px' }}></div>
            
            <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    
                    {/* Academic Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Academic Box */}
                        <div 
                            className="creative-card"
                            data-aos="fade-right"
                            style={{ 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', 
                                background: showAcademic ? 'linear-gradient(135deg, var(--clr-primary-400), var(--clr-primary-500))' : 'rgba(255, 255, 255, 0.7)',
                                color: showAcademic ? 'white' : 'var(--clr-primary-500)',
                                transform: showAcademic ? 'scale(1.02)' : 'scale(1)'
                            }} 
                            onClick={() => setShowAcademic(!showAcademic)}
                        >
                            <h2 className="section-title" style={{ margin: 0, color: 'inherit', pointerEvents: 'none', fontSize: '2rem' }}>ACADEMIC</h2>
                        </div>
                        
                        {/* Hidden Academic List */}
                        {showAcademic && (
                            <div id="academic-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                                {academicClasses.map((cls, idx) => (
                                    <div 
                                        key={idx} 
                                        className="grade-box animate-slide-up" 
                                        style={{ 
                                            padding: '1.2rem', 
                                            border: '1px solid rgba(255,255,255,0.8)', 
                                            borderRadius: '1rem', 
                                            background: 'rgba(255,255,255,0.7)', 
                                            backdropFilter: 'blur(10px)',
                                            fontWeight: '700', 
                                            color: 'var(--clr-neutral-800)', 
                                            cursor: 'default', 
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                            animationDelay: `${idx * 0.05}s`
                                        }} 
                                    >
                                        {cls}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Non-Academic Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Non-Academic Box */}
                        <div 
                            className="creative-card"
                            data-aos="fade-left"
                            style={{ 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', 
                                background: showNonAcademic ? 'linear-gradient(135deg, var(--clr-secondary-400), hsl(330, 80%, 50%))' : 'rgba(255, 255, 255, 0.7)',
                                color: showNonAcademic ? 'white' : 'var(--clr-secondary-400)',
                                transform: showNonAcademic ? 'scale(1.02)' : 'scale(1)'
                            }} 
                            onClick={() => setShowNonAcademic(!showNonAcademic)}
                        >
                            <h2 className="section-title" style={{ margin: 0, color: 'inherit', pointerEvents: 'none', fontSize: '2rem' }}>NON - ACADEMIC</h2>
                        </div>
                        
                        {/* Hidden Non-Academic List */}
                        {showNonAcademic && (
                            <div id="nonacademic-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                                {nonAcademicClasses.map((cls, idx) => (
                                    <div 
                                        key={idx} 
                                        className="grade-box animate-slide-up" 
                                        style={{ 
                                            padding: '1.2rem', 
                                            border: '1px solid rgba(255,255,255,0.8)', 
                                            borderRadius: '1rem', 
                                            background: 'rgba(255,255,255,0.7)', 
                                            backdropFilter: 'blur(10px)',
                                            fontWeight: '700', 
                                            color: 'var(--clr-neutral-800)', 
                                            cursor: 'default', 
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                            animationDelay: `${idx * 0.05}s`
                                        }} 
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
