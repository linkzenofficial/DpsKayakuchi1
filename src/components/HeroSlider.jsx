import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
    const notices = [
        { date: '15 Jul', text: 'Admissions open for the academic year 2026-27. Apply now!' },
        { date: '12 Jul', text: 'Parent-Teacher Meeting scheduled for next Saturday.' },
        { date: '10 Jul', text: 'Annual Sports Day results announced on notice board.' },
        { date: '05 Jul', text: 'School closed on Monday due to local festival.' },
        { date: '01 Jul', text: 'New extracurricular activities starting this month.' },
    ];

    return (
        <div id="home" className="hero-split-layout">
            
            {/* Left Side: Main Slider */}
            <div className="hero-slider-wrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="hero-swiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg" style={{ backgroundImage: `url('./assets/hero1.png')` }}></div>
                        <div className="slide-overlay"></div>
                        <div className="slide-text container">
                            <span className="badge">Welcome to DPS Kayakuchi</span>
                            <h1 className="hero-title text-white">Empowering Minds,<br /> <span className="text-gradient">Shaping the Future</span></h1>
                            <p className="hero-subtitle text-white-50">Providing world-class education with a perfect blend of academics, sports, and co-curricular activities.</p>
                            <div className="hero-cta">
                                <a href="#admission" className="btn btn-primary">Apply Now</a>
                                <a href="#about" className="btn btn-secondary text-white" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>Discover More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg" style={{ backgroundImage: `url('./assets/hero2.png')` }}></div>
                        <div className="slide-overlay"></div>
                        <div className="slide-text container">
                            <span className="badge">Excellence in Learning</span>
                            <h1 className="hero-title text-white">Interactive & Modern<br /> <span className="text-gradient">Classrooms</span></h1>
                            <p className="hero-subtitle text-white-50">Fostering creativity and innovation in an environment built for modern learning.</p>
                            <div className="hero-cta">
                                <a href="#course" className="btn btn-primary">Our Courses</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg" style={{ backgroundImage: `url('./assets/hero3.png')` }}></div>
                        <div className="slide-overlay"></div>
                        <div className="slide-text container">
                            <span className="badge">Beyond Academics</span>
                            <h1 className="hero-title text-white">Sports & Physical<br /> <span className="text-gradient">Development</span></h1>
                            <p className="hero-subtitle text-white-50">Ensuring all-round growth with top-tier sports facilities and extracurricular activities.</p>
                            <div className="hero-cta">
                                <a href="#gallery" className="btn btn-primary">View Gallery</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>

            
            {/* Right Side: Notice Board */}
            <div className="hero-notice-board">
                <div className="notice-header">
                    <h3>🔔 Latest Updates</h3>
                </div>
                <div className="notice-body">
                    <div className="notice-scroll-container">
                        {[...notices, ...notices].map((notice, index) => (
                            <div key={index} className="notice-item">
                                <span className="notice-date">{notice.date}</span>
                                <p className="notice-text">{notice.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
