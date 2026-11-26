import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="hero section position-relative overflow-hidden">
            {/* Background Layering */}
            <div className="hero-bg-canvas">
                <div className="mesh-gradient"></div>
                <div className="dot-grid"></div>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container position-relative z-1" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center min-vh-75 py-4 py-lg-5">
                    {/* Left Column */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
                            <div className="premium-badge mb-3 mb-md-4 d-inline-flex align-items-center">
                                <span className="badge-dot pulse"></span>
                                <span className="badge-text">Visionary Leadership • Moral Excellence</span>
                            </div>

                            <h1 className="mb-3 mb-md-4 fw-extra-bold tracking-tight hero-heading">
                                Samastha Kerala <br className="d-none d-sm-block" />
                                <span className="gradient-text-shimmer">Sunni Bala Vedi</span> <br />
                                <span className="accent-text-glow">SKSBV State</span>
                            </h1>

                            <p className="mb-4 mb-md-5 fs-6 fs-md-5 text-muted-premium mx-auto mx-lg-0" style={{ maxWidth: '540px' }}>
                                A premier platform for students, fostering high religious ideals,
                                <span className="text-accent-shimmer fw-semibold"> discipline</span>, and <span className="text-success-shimmer fw-semibold">communal amity</span>.
                                <span className="d-block mt-2 fw-medium text-dark-soft small">Under the aegis of Jem-lyyathul Mu'allimeen Central Council.</span>
                            </p>

                            <div className="hero-buttons d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
                                <Link to="/about" className="btn btn-premium-primary group text-decoration-none">
                                    <span>Our Mission</span>
                                    <i className="bi bi-arrow-right ms-2 transition-transform group-hover-translate-x"></i>
                                </Link>
                                <Link to="/contact" className="btn btn-premium-outline text-decoration-none">
                                    <i className="bi bi-envelope me-2"></i>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6">
                        <div className="hero-image-wrapper mt-5 mt-lg-0 text-center position-relative" data-aos="fade-left" data-aos-delay="300">
                            <div className="image-glow-ring"></div>
                            <img 
                                src="/assets/img/home/heroimage.png" 
                                alt="Hero Image" 
                                className="img-fluid floating-img-refined shadow-3xl mx-auto" 
                                style={{ maxHeight: '420px', width: 'auto' }}
                            />

                            <div className="advanced-glass-card shadow-2xl p-3 p-md-4 text-start">
                                <div className="card-top-accent"></div>
                                <i className="bi bi-quote quote-icon mb-1 fs-3 text-primary"></i>
                                <p className="mb-0 italic-style text-dark fw-semibold quote-text">
                                    “Show mercy to those on the earth, and the One in the heavens will show mercy to you.”
                                </p>
                                <div className="author-wrapper mt-2 d-flex align-items-center">
                                    <div className="author-line me-2"></div>
                                    <span className="quote-author small fw-bold text-muted">Muhammad ﷺ ibn Abdullah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat Counters Row */}
                <div className="row g-3 g-md-4 mt-3 mt-md-4 pt-lg-2" data-aos="fade-up" data-aos-delay="400">
                    {[
                        { icon: "bi-calendar-check", val: "1993", label: "Established", color: "#0d83fd" },
                        { icon: "bi-journal-text", val: "10,000+", label: "Active Units", color: "#10b981" },
                        { icon: "bi-people", val: "Millions", label: "Students", color: "#f59e0b" },
                        { icon: "bi-award", val: "30+ Years", label: "Excellence", color: "#ef4444" }
                    ].map((stat, idx) => (
                        <div className="col-6 col-md-3" key={idx}>
                            <div className="compact-stat-box h-100" style={{ '--card-accent': stat.color }}>
                                <div className="stat-box-inner p-3 p-md-4 d-flex align-items-center gap-2 gap-md-3">
                                    <div className="stat-box-icon flex-shrink-0 d-flex align-items-center justify-content-center rounded-3">
                                        <i className={`bi ${stat.icon}`}></i>
                                    </div>
                                    <div className="stat-box-data">
                                        <h4 className="stat-box-val mb-0 fw-bold">{stat.val}</h4>
                                        <p className="stat-box-lbl mb-0 text-muted small">{stat.label}</p>
                                    </div>
                                </div>
                                <div className="stat-box-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero {
                    background: #ffffff;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    padding: 120px 0 70px;
                }
                .hero-heading {
                    font-size: clamp(2rem, 5vw + 0.5rem, 3.6rem);
                    line-height: 1.15;
                    color: var(--heading-color, #2d465e);
                }
                .hero-bg-canvas {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                }
                .mesh-gradient {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(at 0% 0%, rgba(13, 131, 253, 0.06) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.06) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.05) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, rgba(239, 68, 68, 0.04) 0px, transparent 50%);
                    opacity: 0.85;
                }
                .dot-grid {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(13, 131, 253, 0.12) 1px, transparent 1px);
                    background-size: 28px 28px;
                    opacity: 0.5;
                }
                .premium-badge {
                    background: rgba(13, 131, 253, 0.08);
                    border: 1px solid rgba(13, 131, 253, 0.2);
                    padding: 6px 16px;
                    border-radius: 50px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: var(--accent-color, #0d83fd);
                }
                .badge-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: var(--accent-color, #0d83fd);
                    margin-right: 8px;
                }
                .pulse {
                    box-shadow: 0 0 0 rgba(13, 131, 253, 0.4);
                    animation: pulseDot 2s infinite;
                }
                @keyframes pulseDot {
                    0% { box-shadow: 0 0 0 0 rgba(13, 131, 253, 0.6); }
                    70% { box-shadow: 0 0 0 8px rgba(13, 131, 253, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(13, 131, 253, 0); }
                }
                .gradient-text-shimmer {
                    background: linear-gradient(135deg, #0d83fd 0%, #00b4d8 50%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .accent-text-glow {
                    color: #012970;
                }
                .btn-premium-primary {
                    background: linear-gradient(135deg, var(--accent-color, #0d83fd) 0%, #0077b6 100%);
                    color: #ffffff !important;
                    font-weight: 600;
                    padding: 12px 28px;
                    border-radius: 50px;
                    box-shadow: 0 8px 22px rgba(13, 131, 253, 0.25);
                    transition: all 0.3s ease;
                    border: none;
                }
                .btn-premium-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(13, 131, 253, 0.35);
                }
                .btn-premium-outline {
                    border: 2px solid rgba(13, 131, 253, 0.3);
                    color: var(--heading-color, #2d465e);
                    font-weight: 600;
                    padding: 10px 24px;
                    border-radius: 50px;
                    background: rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                }
                .btn-premium-outline:hover {
                    border-color: var(--accent-color, #0d83fd);
                    color: var(--accent-color, #0d83fd);
                    background: #ffffff;
                    transform: translateY(-2px);
                }
                .floating-img-refined {
                    animation: floatHero 6s ease-in-out infinite;
                }
                @keyframes floatHero {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .advanced-glass-card {
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 18px;
                    max-width: 360px;
                    margin: -40px auto 0;
                    position: relative;
                    z-index: 2;
                }
                @media (min-width: 992px) {
                    .advanced-glass-card {
                        position: absolute;
                        bottom: 10px;
                        left: 10px;
                        margin: 0;
                    }
                }
                .quote-text {
                    font-size: 0.9rem;
                    line-height: 1.5;
                }
                .author-line {
                    width: 20px;
                    height: 2px;
                    background: var(--accent-color, #0d83fd);
                }
                .compact-stat-box {
                    background: #ffffff;
                    border-radius: 18px;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .compact-stat-box:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
                    border-color: var(--card-accent, #0d83fd);
                }
                .stat-box-icon {
                    width: 44px;
                    height: 44px;
                    font-size: 20px;
                    color: var(--card-accent, #0d83fd);
                    background: color-mix(in srgb, var(--card-accent, #0d83fd), transparent 90%);
                }
                .stat-box-val {
                    font-size: clamp(1.1rem, 2vw + 0.5rem, 1.45rem);
                    color: var(--heading-color, #2d465e);
                }
                @media (max-width: 768px) {
                    .hero {
                        padding: 100px 0 50px;
                    }
                    .compact-stat-box .stat-box-inner {
                        padding: 12px !important;
                    }
                    .stat-box-icon {
                        width: 36px;
                        height: 36px;
                        font-size: 17px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
