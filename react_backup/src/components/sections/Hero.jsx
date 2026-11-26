import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
    {
        image: '/assets/img/home/hero-section-image-1.jpeg',
        tag: 'State Conference & Student Gatherings',
        title: 'Empowering the New Generation with Faith & Character'
    },
    {
        image: '/assets/img/home/hero-section-image-2.jpeg',
        tag: 'Decades of Moral & Academic Leadership',
        title: 'Inspiring Millions Across 10,000+ Units Statewide'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto rotate background every 6.5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6500);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    return (
        <section id="hero" className="hero-modern-section position-relative overflow-hidden text-white">
            {/* Dynamic Background Slides with Ken Burns transition */}
            <div className="hero-bg-slider-container">
                {HERO_SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`hero-bg-slide ${currentSlide === idx ? 'slide-active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        aria-hidden={currentSlide !== idx}
                    />
                ))}
                {/* Premium Dark Gradient & Color Tint Overlay */}
                <div className="hero-dark-overlay"></div>
                <div className="hero-mesh-accent"></div>
                <div className="hero-bottom-fade"></div>
            </div>

            <div className="container position-relative z-2 py-4 py-md-5">
                <div className="row align-items-center gy-5 min-vh-70 pt-3 pt-md-4">
                    {/* Left Column: Vision & Identity */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <div className="hero-content pe-lg-4" data-aos="fade-right">
                            {/* Top Badge */}
                            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill hero-top-badge mb-3 shadow-sm">
                                <span className="badge-glow-dot"></span>
                                <span className="small fw-bold text-uppercase tracking-wider">
                                    {HERO_SLIDES[currentSlide].tag}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="fw-extra-bold hero-main-title mb-3 tracking-tight">
                                Samastha Kerala <br />
                                <span className="hero-gradient-text">Sunni Bala Vedi</span>
                            </h1>

                            {/* Malayalam Subtitle Pill */}
                            <div className="mb-3 d-inline-block">
                                <span className="hero-malayalam-badge px-3 py-1 rounded-pill">
                                    സമസ്ത കേരള സുന്നീ ബാല വേദി (സംസ്ഥാന കമ്മറ്റി)
                                </span>
                            </div>

                            {/* Mission Narrative */}
                            <p className="hero-lead-text text-white-75 mb-4 mx-auto mx-lg-0">
                                The premier student wing under the aegis of the Samastha Kerala Islam Matha Vidyabhyasa Board and Jem-Iyyathul Mu'allimeen. Nurturing Islamic character, moral discipline, and intellectual leadership across thousands of madrassas.
                            </p>

                            {/* Action Buttons */}
                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center mb-4">
                                <Link to="/wings" className="btn btn-hero-primary shadow-lg d-inline-flex align-items-center gap-2">
                                    <span>Explore Our Wings</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                                <Link to="/featured-events" className="btn btn-hero-outline d-inline-flex align-items-center gap-2">
                                    <i className="bi bi-plus-circle"></i>
                                    <span>Add Unit Activity</span>
                                </Link>

                                <Link to="/gallery" className="btn btn-hero-glass d-inline-flex align-items-center gap-2">
                                    <i className="bi bi-images"></i>
                                    <span>Gallery</span>
                                </Link>
                            </div>

                            {/* Scene Controls */}
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mt-4">
                                <div className="slide-counter-box px-3 py-1 rounded-pill bg-white-10 backdrop-blur d-inline-flex align-items-center gap-2">
                                    <span className="small text-white-50">Scene</span>
                                    <span className="fw-bold text-white">0{currentSlide + 1}</span>
                                    <span className="text-white-50">/</span>
                                    <span className="small text-white-50">0{HERO_SLIDES.length}</span>
                                </div>

                                <div className="d-flex align-items-center gap-1">
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-slide-arrow rounded-circle p-0" 
                                        onClick={prevSlide}
                                        aria-label="Previous background scene"
                                    >
                                        <i className="bi bi-chevron-left"></i>
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-slide-arrow rounded-circle p-0" 
                                        onClick={nextSlide}
                                        aria-label="Next background scene"
                                    >
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </div>

                                <div className="d-flex gap-2 ms-2">
                                    {HERO_SLIDES.map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className={`slide-indicator-dot ${currentSlide === i ? 'dot-active' : ''}`}
                                            onClick={() => setCurrentSlide(i)}
                                            aria-label={`Go to scene ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Glassmorphic Highlights Hub */}
                    <div className="col-lg-5" data-aos="fade-left">
                        <div className="hero-glass-hub p-4 p-md-5 rounded-5 shadow-2xl position-relative overflow-hidden">
                            <div className="hub-top-accent"></div>

                            {/* Hub Header */}
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="hub-pulse-dot"></span>
                                    <h4 className="h6 mb-0 text-white fw-bold text-uppercase tracking-wider">
                                        State Highlights
                                    </h4>
                                </div>
                                <span className="badge px-2 py-1 rounded-pill bg-primary" style={{ fontSize: '10px' }}>
                                    Active 2026
                                </span>
                            </div>

                            {/* Inspiring Quote */}
                            <div className="hub-quote-card p-3 rounded-4 mb-4">
                                <i className="bi bi-quote text-primary fs-3 mb-1 d-block"></i>
                                <p className="small fst-italic text-white mb-2" style={{ lineHeight: '1.6' }}>
                                    “Show mercy to those on the earth, and the One in the heavens will show mercy to you.”
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="quote-bar"></div>
                                    <span className="text-white-50" style={{ fontSize: '11px', fontWeight: '600' }}>
                                        Prophet Muhammad ﷺ
                                    </span>
                                </div>
                            </div>

                            {/* 3 Pillar Feature Bullets */}
                            <div className="hub-feature-list d-flex flex-column gap-3 mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="feature-icon-pill bg-primary-subtle text-primary">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold small">Moral Discipline & Values</div>
                                        <div className="text-white-50" style={{ fontSize: '11.5px' }}>Safeguarding faith & respectful teacher-student camaraderie</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <div className="feature-icon-pill bg-success-subtle text-success">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold small">Tech Admins & Cyber Ethics</div>
                                        <div className="text-white-50" style={{ fontSize: '11.5px' }}>Guiding youth toward responsible, beneficial digital conduct</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <div className="feature-icon-pill bg-warning-subtle text-warning">
                                        <i className="bi bi-trophy"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold small">Arts & Leadership Festivals</div>
                                        <div className="text-white-50" style={{ fontSize: '11.5px' }}>State Sahithyotsav & student enrichment camps</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <div className="pt-2 border-top border-white-10 text-center text-sm-start">
                                <Link to="/featured-events" className="text-white small fw-bold text-decoration-none d-inline-flex align-items-center gap-2 hover-arrow">
                                    <span>Submit your unit program report</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stat Counters Row */}
                <div className="row g-3 g-md-4 mt-4 mt-lg-5 pt-2" data-aos="fade-up" data-aos-delay="200">
                    {[
                        { icon: "bi-calendar-check-fill", val: "1993", label: "Established Year", color: "#38bdf8" },
                        { icon: "bi-journal-bookmark-fill", val: "10,000+", label: "Active Units", color: "#34d399" },
                        { icon: "bi-people-fill", val: "Millions", label: "Students Guided", color: "#fbbf24" },
                        { icon: "bi-geo-alt-fill", val: "14 Districts", label: "Statewide Network", color: "#f87171" }
                    ].map((stat, idx) => (
                        <div className="col-6 col-lg-3 col-md-6" key={idx}>
                            <div className="hero-stat-card p-3 p-md-4 rounded-4 h-100 transition-all hover-lift">
                                <div className="d-flex align-items-center gap-2 gap-md-3">
                                    <div 
                                        className="stat-icon-wrap rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ background: `${stat.color}20`, color: stat.color }}
                                    >
                                        <i className={`bi ${stat.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 className="stat-val mb-0 fw-bold text-white">{stat.val}</h3>
                                        <p className="stat-label mb-0 text-white-50 small">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero-modern-section {
                    min-height: 92vh;
                    display: flex;
                    align-items: center;
                    padding: 120px 0 70px;
                    background-color: #030b18;
                }

                /* Background Slider Layers */
                .hero-bg-slider-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                }

                .hero-bg-slide {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center center;
                    opacity: 0;
                    transform: scale(1.04);
                    transition: opacity 1.4s ease-in-out, transform 7s ease-out;
                    filter: brightness(0.9);
                }

                .hero-bg-slide.slide-active {
                    opacity: 1;
                    transform: scale(1);
                }

                /* Dark Gradient & Mesh Accent Overlay */
                .hero-dark-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg, 
                        rgba(2, 9, 21, 0.92) 0%, 
                        rgba(5, 20, 46, 0.82) 45%, 
                        rgba(2, 8, 18, 0.94) 100%
                    );
                    backdrop-filter: blur(2px);
                    -webkit-backdrop-filter: blur(2px);
                }

                .hero-mesh-accent {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(at 0% 0%, rgba(13, 131, 253, 0.25) 0px, transparent 55%),
                        radial-gradient(at 100% 50%, rgba(16, 185, 129, 0.18) 0px, transparent 50%),
                        radial-gradient(at 50% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 60%);
                    pointer-events: none;
                }

                .hero-bottom-fade {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(to top, #ffffff, transparent);
                    opacity: 0.05;
                }

                /* Typography & Badges */
                .hero-main-title {
                    font-size: clamp(2.1rem, 5vw + 0.5rem, 3.8rem);
                    line-height: 1.15;
                    color: #ffffff;
                }

                .hero-gradient-text {
                    background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #34d399 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-top-badge {
                    background: rgba(56, 189, 248, 0.12);
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    color: #38bdf8;
                }

                .badge-glow-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #38bdf8;
                    box-shadow: 0 0 8px #38bdf8;
                }

                .hero-malayalam-badge {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: #e2e8f0;
                    font-size: 12.5px;
                    letter-spacing: 0.5px;
                }

                .hero-lead-text {
                    font-size: clamp(0.95rem, 1.2vw + 0.4rem, 1.12rem);
                    line-height: 1.7;
                    max-width: 600px;
                }

                .text-white-75 {
                    color: rgba(255, 255, 255, 0.78) !important;
                }

                /* Action Buttons */
                .btn-hero-primary {
                    background: linear-gradient(135deg, #0d83fd 0%, #0284c7 100%);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 12px 28px;
                    border-radius: 50px;
                    border: none;
                    transition: all 0.3s ease;
                }
                .btn-hero-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(13, 131, 253, 0.45);
                    color: #ffffff !important;
                }

                .btn-hero-outline {
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 11px 24px;
                    border-radius: 50px;
                    background: rgba(255, 255, 255, 0.06);
                    backdrop-filter: blur(6px);
                    transition: all 0.3s ease;
                }
                .btn-hero-outline:hover {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: #ffffff;
                    transform: translateY(-2px);
                }

                .btn-hero-glass {
                    border: 1.5px solid rgba(56, 189, 248, 0.3);
                    color: #38bdf8 !important;
                    font-weight: 600;
                    padding: 11px 22px;
                    border-radius: 50px;
                    background: rgba(56, 189, 248, 0.08);
                    transition: all 0.3s ease;
                }
                .btn-hero-glass:hover {
                    background: #38bdf8;
                    color: #030b18 !important;
                    transform: translateY(-2px);
                }

                /* Slide Switchers */
                .slide-counter-box {
                    font-size: 13px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .btn-slide-arrow {
                    width: 32px;
                    height: 32px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: #ffffff;
                    transition: all 0.2s ease;
                }
                .btn-slide-arrow:hover {
                    background: #0d83fd;
                    border-color: #0d83fd;
                    color: #ffffff;
                }

                .slide-indicator-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.3);
                    transition: all 0.3s ease;
                    padding: 0;
                }
                .slide-indicator-dot.dot-active {
                    width: 22px;
                    border-radius: 10px;
                    background: #38bdf8;
                }

                /* Right Column Glass Hub */
                .hero-glass-hub {
                    background: rgba(255, 255, 255, 0.06);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }

                .hub-top-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #0d83fd, #38bdf8, #34d399);
                }

                .hub-pulse-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #34d399;
                    box-shadow: 0 0 10px #34d399;
                }

                .hub-quote-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .quote-bar {
                    width: 16px;
                    height: 2px;
                    background: #0d83fd;
                }

                .feature-icon-pill {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                .bg-primary-subtle { background: rgba(13, 131, 253, 0.2) !important; color: #38bdf8 !important; }
                .bg-success-subtle { background: rgba(16, 185, 129, 0.2) !important; color: #34d399 !important; }
                .bg-warning-subtle { background: rgba(245, 158, 11, 0.2) !important; color: #fbbf24 !important; }

                .border-white-10 {
                    border-color: rgba(255, 255, 255, 0.1) !important;
                }

                .hover-arrow:hover i {
                    transform: translateX(4px);
                    transition: transform 0.2s ease;
                }

                /* Bottom Stat Cards */
                .hero-stat-card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .hero-stat-card:hover {
                    background: rgba(255, 255, 255, 0.09);
                    border-color: rgba(56, 189, 248, 0.3);
                }

                .stat-icon-wrap {
                    width: 44px;
                    height: 44px;
                    font-size: 20px;
                }

                .stat-val {
                    font-size: clamp(1.15rem, 2vw + 0.4rem, 1.5rem);
                }

                @media (max-width: 768px) {
                    .hero-modern-section {
                        padding: 100px 0 50px;
                    }
                    .hero-main-title {
                        font-size: clamp(1.9rem, 7vw, 2.5rem);
                    }
                    .hero-stat-card {
                        padding: 12px !important;
                    }
                    .stat-icon-wrap {
                        width: 36px;
                        height: 36px;
                        font-size: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-modern-section {
                        padding: 90px 0 40px;
                    }
                    .btn-hero-primary, .btn-hero-outline, .btn-hero-glass {
                        width: 100%;
                        justify-content: center;
                    }
                    .hero-stat-card .d-flex {
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 8px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
