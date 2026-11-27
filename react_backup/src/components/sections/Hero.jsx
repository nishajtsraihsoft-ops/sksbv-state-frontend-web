import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
    {
        image: '/assets/img/home/hero-section-image-1.jpeg',
        tag: 'Visionary Leadership • Moral Excellence'
    },
    {
        image: '/assets/img/home/hero-section-image-2.jpeg',
        tag: 'Empowering Students Across Kerala'
    },
    {
        image: '/assets/img/home/hero-section-image-3.jpeg',
        tag: '30+ Years of Educational Guidance'
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

    return (
        <section id="hero" className="hero-modern-section position-relative overflow-hidden text-white">
            {/* Dynamic Background Slides */}
            <div className="hero-bg-slider-container">
                {HERO_SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`hero-bg-slide ${currentSlide === idx ? 'slide-active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        aria-hidden={currentSlide !== idx}
                    />
                ))}
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
                                <span className="hero-highlight-text">Sunni Bala Vedi</span>
                            </h1>

                            {/* Malayalam Subtitle Pill (Hidden on mobile screens) */}
                            <div className="mb-3 d-none d-md-inline-block">
                                <span className="hero-malayalam-badge px-3 py-1 rounded-pill">
                                    സമസ്ത കേരള സുന്നീ ബാല വേദി (സംസ്ഥാന കമ്മറ്റി)
                                </span>
                            </div>

                            {/* Mission Narrative (Hidden on mobile screens) */}
                            <p className="hero-lead-text text-white mb-2 mb-md-4 mx-auto mx-lg-0 d-none d-md-block">
                                The premier student wing under the aegis of the Samastha Kerala Islam Matha Vidyabhyasa Board and Jem-Iyyathul Mu'allimeen. Nurturing Islamic character, moral discipline, and intellectual leadership across thousands of madrassas.
                            </p>

                            {/* Essential CTA Buttons (Hidden on mobile screens) */}
                            <div className="d-none d-md-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
                                <Link to="/about" className="btn btn-hero-primary shadow-lg d-inline-flex align-items-center gap-2">
                                    <span>Our Mission</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                                <Link to="/contact" className="btn btn-hero-outline d-inline-flex align-items-center gap-2">
                                    <i className="bi bi-envelope"></i>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Minimal Quote & Identity Card (Hidden on mobile screens) */}
                    <div className="col-lg-5 d-none d-md-block" data-aos="fade-left">
                        <div className="hero-quote-glass p-4 rounded-4 shadow-lg position-relative overflow-hidden">
                            <div className="quote-top-line"></div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="quote-icon-circle flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle">
                                    <i className="bi bi-quote fs-4"></i>
                                </div>
                                <div>
                                    <p className="fst-italic text-white mb-2" style={{ fontSize: '0.96rem', lineHeight: '1.65' }}>
                                        “Show mercy to those on the earth, and the One in the heavens will show mercy to you.”
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="quote-author-line"></span>
                                        <span className="text-warning fw-semibold" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                                            Prophet Muhammad ﷺ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stat Counters Row */}
                <div className="row g-2 g-md-3 mt-3 mt-md-4 pt-1" data-aos="fade-up" data-aos-delay="150">
                    {[
                        { icon: "bi-calendar-check-fill", val: "1993", label: "Established Year", color: "#fbbf24" },
                        { icon: "bi-journal-bookmark-fill", val: "10,000+", label: "Active Units", color: "#34d399" },
                        { icon: "bi-people-fill", val: "Millions", label: "Students Guided", color: "#38bdf8" },
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
                    padding: 115px 0 35px;
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

                /* Lightened Overlay so background images stay clear */
                .hero-dark-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(2, 9, 21, 0.56) 0%,
                        rgba(3, 12, 28, 0.42) 50%,
                        rgba(2, 8, 18, 0.65) 100%
                    );
                }

                .hero-mesh-accent {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(at 0% 0%, rgba(13, 131, 253, 0.12) 0px, transparent 55%),
                        radial-gradient(at 100% 100%, rgba(251, 191, 36, 0.08) 0px, transparent 50%);
                    pointer-events: none;
                }

                /* Typography */
                .hero-main-title {
                    font-size: clamp(2rem, 4.2vw, 3.2rem);
                    line-height: 1.15;
                    color: #ffffff;
                    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
                }

                .hero-highlight-text {
                    background: linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 50%, #38bdf8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
                }

                .hero-top-badge {
                    background: rgba(3, 15, 34, 0.65);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(251, 191, 36, 0.45);
                    color: #fde68a;
                }

                .badge-glow-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #fbbf24;
                    box-shadow: 0 0 8px #fbbf24;
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
                    padding: 10px 26px;
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
                    border: 1.5px solid rgba(255, 255, 255, 0.45);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 9px 22px;
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

                /* Minimal Quote Glass Card */
                .hero-quote-glass {
                    background: rgba(3, 15, 34, 0.58);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.45);
                }

                .quote-top-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #fbbf24, #0d83fd);
                }

                .quote-icon-circle {
                    width: 42px;
                    height: 42px;
                    background: rgba(251, 191, 36, 0.18);
                    color: #fbbf24;
                    border: 1px solid rgba(251, 191, 36, 0.35);
                }

                .quote-author-line {
                    width: 18px;
                    height: 2px;
                    background: #fbbf24;
                    display: inline-block;
                }

                /* Bottom Stat Cards */
                .hero-stat-card {
                    background: rgba(3, 15, 34, 0.52);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .hero-stat-card:hover {
                    background: rgba(3, 15, 34, 0.72);
                    border-color: rgba(251, 191, 36, 0.4);
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
                        padding: 95px 0 30px;
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
                        padding: 90px 0 25px;
                    }
                    .btn-hero-primary, .btn-hero-outline {
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
