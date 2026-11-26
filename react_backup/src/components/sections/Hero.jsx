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
            {/* Dynamic Background Slides with reduced fade effect */}
            <div className="hero-bg-slider-container">
                {HERO_SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`hero-bg-slide ${currentSlide === idx ? 'slide-active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        aria-hidden={currentSlide !== idx}
                    />
                ))}
                {/* Clean, Lightened Overlay so background images are clearly visible */}
                <div className="hero-dark-overlay"></div>
                <div className="hero-mesh-accent"></div>
            </div>

            <div className="container position-relative z-2 py-2 py-md-3">
                <div className="row align-items-center gy-4 pt-2">
                    {/* Left Column: Vision & Identity */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <div className="hero-content pe-lg-3" data-aos="fade-right">
                            {/* Top Badge */}
                            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill hero-top-badge mb-2 shadow-sm">
                                <span className="badge-glow-dot"></span>
                                <span className="small fw-bold text-uppercase tracking-wider">
                                    {HERO_SLIDES[currentSlide].tag}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="fw-extra-bold hero-main-title mb-2 tracking-tight">
                                Samastha Kerala <br />
                                <span className="hero-gradient-text">Sunni Bala Vedi</span>
                            </h1>

                            {/* Malayalam Subtitle Pill */}
                            <div className="mb-2 d-inline-block">
                                <span className="hero-malayalam-badge px-3 py-1 rounded-pill">
                                    സമസ്ത കേരള സുന്നീ ബാല വേദി (സംസ്ഥാന കമ്മറ്റി)
                                </span>
                            </div>

                            {/* Mission Narrative */}
                            <p className="hero-lead-text text-white mb-3 mx-auto mx-lg-0">
                                The premier student wing under the aegis of the Samastha Kerala Islam Matha Vidyabhyasa Board and Jem-Iyyathul Mu'allimeen. Nurturing Islamic character, moral discipline, and intellectual leadership across thousands of madrassas.
                            </p>

                            {/* Action Buttons */}
                            <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-center justify-content-lg-start align-items-center mb-3">
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
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mt-2">
                                <div className="slide-counter-box px-3 py-1 rounded-pill bg-white-10 backdrop-blur d-inline-flex align-items-center gap-2">
                                    <span className="small text-white-75">Scene</span>
                                    <span className="fw-bold text-white">0{currentSlide + 1}</span>
                                    <span className="text-white-50">/</span>
                                    <span className="small text-white-75">0{HERO_SLIDES.length}</span>
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

                    {/* Right Column: Glassmorphic Highlights Hub (Tighter & Compact) */}
                    <div className="col-lg-5" data-aos="fade-left">
                        <div className="hero-glass-hub p-3 p-md-4 rounded-4 shadow-2xl position-relative overflow-hidden">
                            <div className="hub-top-accent"></div>

                            {/* Hub Header */}
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="hub-pulse-dot"></span>
                                    <h4 className="h6 mb-0 text-white fw-bold text-uppercase tracking-wider" style={{ fontSize: '13px' }}>
                                        State Highlights
                                    </h4>
                                </div>
                                <span className="badge px-2 py-1 rounded-pill bg-primary" style={{ fontSize: '10px' }}>
                                    Active 2026
                                </span>
                            </div>

                            {/* Inspiring Quote */}
                            <div className="hub-quote-card p-2 px-3 rounded-3 mb-3">
                                <i className="bi bi-quote text-primary fs-4 mb-0 d-block lh-1"></i>
                                <p className="small fst-italic text-white mb-1" style={{ lineHeight: '1.5', fontSize: '13px' }}>
                                    “Show mercy to those on the earth, and the One in the heavens will show mercy to you.”
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="quote-bar"></div>
                                    <span className="text-white-75" style={{ fontSize: '11px', fontWeight: '600' }}>
                                        Prophet Muhammad ﷺ
                                    </span>
                                </div>
                            </div>

                            {/* 3 Pillar Feature Bullets */}
                            <div className="hub-feature-list d-flex flex-column gap-2 mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="feature-icon-pill bg-primary-subtle text-primary">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold" style={{ fontSize: '13px' }}>Moral Discipline & Values</div>
                                        <div className="text-white-75" style={{ fontSize: '11px' }}>Safeguarding faith & respectful student bonds</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <div className="feature-icon-pill bg-success-subtle text-success">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold" style={{ fontSize: '13px' }}>Tech Admins & Cyber Ethics</div>
                                        <div className="text-white-75" style={{ fontSize: '11px' }}>Guiding youth toward responsible digital conduct</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <div className="feature-icon-pill bg-warning-subtle text-warning">
                                        <i className="bi bi-trophy"></i>
                                    </div>
                                    <div>
                                        <div className="text-white fw-bold" style={{ fontSize: '13px' }}>Arts & Leadership Festivals</div>
                                        <div className="text-white-75" style={{ fontSize: '11px' }}>State Sahithyotsav & enrichment camps</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <div className="pt-2 border-top border-white-10 text-center text-sm-start">
                                <Link to="/featured-events" className="text-white small fw-bold text-decoration-none d-inline-flex align-items-center gap-2 hover-arrow" style={{ fontSize: '12.5px' }}>
                                    <span>Submit your unit program report</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stat Counters Row (Compact) */}
                <div className="row g-2 g-md-3 mt-2 mt-md-3 pt-1" data-aos="fade-up" data-aos-delay="150">
                    {[
                        { icon: "bi-calendar-check-fill", val: "1993", label: "Established Year", color: "#38bdf8" },
                        { icon: "bi-journal-bookmark-fill", val: "10,000+", label: "Active Units", color: "#34d399" },
                        { icon: "bi-people-fill", val: "Millions", label: "Students Guided", color: "#fbbf24" },
                        { icon: "bi-geo-alt-fill", val: "14 Districts", label: "Statewide Network", color: "#f87171" }
                    ].map((stat, idx) => (
                        <div className="col-6 col-lg-3 col-md-6" key={idx}>
                            <div className="hero-stat-card p-2 px-3 p-md-3 rounded-3 h-100 transition-all hover-lift">
                                <div className="d-flex align-items-center gap-2 gap-md-3">
                                    <div 
                                        className="stat-icon-wrap rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ background: `${stat.color}25`, color: stat.color }}
                                    >
                                        <i className={`bi ${stat.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 className="stat-val mb-0 fw-bold text-white">{stat.val}</h3>
                                        <p className="stat-label mb-0 text-white-75 small">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero-modern-section {
                    min-height: auto;
                    display: flex;
                    align-items: center;
                    padding: 95px 0 35px;
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
                    transform: scale(1.02);
                    transition: opacity 1.2s ease-in-out, transform 8s ease-out;
                    filter: brightness(1) contrast(1.04);
                }

                .hero-bg-slide.slide-active {
                    opacity: 1;
                    transform: scale(1);
                }

                /* Reduced & Transparent Overlay so Photos are Clearly Visible */
                .hero-dark-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg, 
                        rgba(2, 9, 21, 0.58) 0%, 
                        rgba(3, 12, 28, 0.42) 50%, 
                        rgba(2, 8, 18, 0.65) 100%
                    );
                }

                .hero-mesh-accent {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(at 0% 0%, rgba(13, 131, 253, 0.12) 0px, transparent 55%),
                        radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.10) 0px, transparent 50%);
                    pointer-events: none;
                }

                /* Typography with subtle text shadows for clear readability */
                .hero-main-title {
                    font-size: clamp(2rem, 4.2vw, 3.2rem);
                    line-height: 1.15;
                    color: #ffffff;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
                }

                .hero-gradient-text {
                    background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #34d399 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-top-badge {
                    background: rgba(3, 15, 34, 0.65);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(56, 189, 248, 0.4);
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
                    background: rgba(3, 15, 34, 0.6);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #f1f5f9;
                    font-size: 12px;
                    letter-spacing: 0.5px;
                }

                .hero-lead-text {
                    font-size: clamp(0.9rem, 1vw + 0.35rem, 1.05rem);
                    line-height: 1.6;
                    max-width: 580px;
                    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);
                }

                .text-white-75 {
                    color: rgba(255, 255, 255, 0.82) !important;
                }

                /* Action Buttons */
                .btn-hero-primary {
                    background: linear-gradient(135deg, #0d83fd 0%, #0284c7 100%);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 10px 24px;
                    border-radius: 50px;
                    border: none;
                    transition: all 0.25s ease;
                    font-size: 14px;
                }
                .btn-hero-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 22px rgba(13, 131, 253, 0.45);
                    color: #ffffff !important;
                }

                .btn-hero-outline {
                    border: 1.5px solid rgba(255, 255, 255, 0.4);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 9px 20px;
                    border-radius: 50px;
                    background: rgba(3, 15, 34, 0.45);
                    backdrop-filter: blur(6px);
                    transition: all 0.25s ease;
                    font-size: 14px;
                }
                .btn-hero-outline:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: #ffffff;
                    transform: translateY(-2px);
                }

                .btn-hero-glass {
                    border: 1.5px solid rgba(56, 189, 248, 0.4);
                    color: #38bdf8 !important;
                    font-weight: 600;
                    padding: 9px 18px;
                    border-radius: 50px;
                    background: rgba(3, 15, 34, 0.45);
                    backdrop-filter: blur(6px);
                    transition: all 0.25s ease;
                    font-size: 14px;
                }
                .btn-hero-glass:hover {
                    background: #38bdf8;
                    color: #030b18 !important;
                    transform: translateY(-2px);
                }

                /* Slide Switchers */
                .slide-counter-box {
                    font-size: 12px;
                    background: rgba(3, 15, 34, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .btn-slide-arrow {
                    width: 28px;
                    height: 28px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(3, 15, 34, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                    font-size: 12px;
                    transition: all 0.2s ease;
                }
                .btn-slide-arrow:hover {
                    background: #0d83fd;
                    border-color: #0d83fd;
                    color: #ffffff;
                }

                .slide-indicator-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.4);
                    transition: all 0.3s ease;
                    padding: 0;
                }
                .slide-indicator-dot.dot-active {
                    width: 18px;
                    border-radius: 8px;
                    background: #38bdf8;
                }

                /* Right Column Glass Hub */
                .hero-glass-hub {
                    background: rgba(3, 15, 34, 0.55);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.5);
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
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #34d399;
                    box-shadow: 0 0 8px #34d399;
                }

                .hub-quote-card {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .quote-bar {
                    width: 14px;
                    height: 2px;
                    background: #0d83fd;
                }

                .feature-icon-pill {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    flex-shrink: 0;
                }
                .bg-primary-subtle { background: rgba(13, 131, 253, 0.25) !important; color: #38bdf8 !important; }
                .bg-success-subtle { background: rgba(16, 185, 129, 0.25) !important; color: #34d399 !important; }
                .bg-warning-subtle { background: rgba(245, 158, 11, 0.25) !important; color: #fbbf24 !important; }

                .border-white-10 {
                    border-color: rgba(255, 255, 255, 0.12) !important;
                }

                .hover-arrow:hover i {
                    transform: translateX(4px);
                    transition: transform 0.2s ease;
                }

                /* Bottom Stat Cards */
                .hero-stat-card {
                    background: rgba(3, 15, 34, 0.52);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .hero-stat-card:hover {
                    background: rgba(3, 15, 34, 0.7);
                    border-color: rgba(56, 189, 248, 0.4);
                }

                .stat-icon-wrap {
                    width: 38px;
                    height: 38px;
                    font-size: 18px;
                }

                .stat-val {
                    font-size: clamp(1.1rem, 1.8vw + 0.3rem, 1.35rem);
                }

                @media (max-width: 768px) {
                    .hero-modern-section {
                        padding: 85px 0 30px;
                    }
                    .hero-main-title {
                        font-size: clamp(1.8rem, 6.5vw, 2.3rem);
                    }
                    .stat-icon-wrap {
                        width: 32px;
                        height: 32px;
                        font-size: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-modern-section {
                        padding: 78px 0 25px;
                    }
                    .btn-hero-primary, .btn-hero-outline, .btn-hero-glass {
                        width: 100%;
                        justify-content: center;
                    }
                    .hero-stat-card .d-flex {
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 6px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
