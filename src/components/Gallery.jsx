import { useState } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    const galleryImages = [
        { id: 1, category: 'campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Main Building' },
        { id: 2, category: 'sports', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Annual Sports Day' },
        { id: 3, category: 'events', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Science Exhibition' },
        { id: 4, category: 'campus', url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Library Study Area' },
        { id: 5, category: 'sports', url: 'https://images.unsplash.com/photo-1518605363189-22a84397be98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Football Tournament' },
        { id: 6, category: 'events', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Cultural Festival' },
    ];

    const filteredImages = activeTab === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeTab);

    return (
        <section id="gallery" className="section" style={{ backgroundColor: 'white', paddingTop: '100px' }}>
            <div className="container">
                <div className="section-header text-center" data-aos="fade-up">
                    <span className="badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>Our Memories</span>
                    <h2 className="section-title">School Gallery</h2>
                    <p className="section-description" style={{ maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
                        Take a glimpse into the vibrant life at DPS Kayakuchi through our lens. From academic achievements to cultural extravaganzas.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {['all', 'campus', 'sports', 'events'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '600',
                                textTransform: 'capitalize',
                                transition: 'all 0.3s ease',
                                backgroundColor: activeTab === tab ? 'var(--clr-primary-500)' : 'var(--clr-neutral-200)',
                                color: activeTab === tab ? 'white' : 'var(--clr-neutral-800)',
                                boxShadow: activeTab === tab ? 'var(--shadow-md)' : 'none'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="gallery-masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {filteredImages.map((image, index) => (
                        <div key={image.id} className="gallery-item" data-aos="zoom-in" data-aos-delay={index * 50} style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', height: '250px', cursor: 'pointer' }}>
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                                className="gallery-img"
                            />
                            <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem', opacity: 0, transition: 'opacity 0.3s ease' }}>
                                <h4 style={{ color: 'white', margin: 0, fontSize: '1.2rem', transform: 'translateY(20px)', transition: 'transform 0.3s ease' }} className="gallery-title">{image.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .gallery-item:hover .gallery-img {
                    transform: scale(1.1);
                }
                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-item:hover .gallery-title {
                    transform: translateY(0);
                }
            `}</style>
        </section>
    );
};

export default Gallery;
