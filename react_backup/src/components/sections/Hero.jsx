import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="hero section position-relative overflow-hidden">
            {/* Advanced Background Layering */}
            <div className="hero-bg-canvas">
                <div className="mesh-gradient"></div>
                <div className="dot-grid"></div>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center min-vh-80">
                    <div className="col-lg-6">
                        <div className="hero-content text-center text-lg-start" data-aos="fade-right" data-aos-delay="200">
                            <div className="premium-badge mb-3 mb-md-4">
                                <span className="badge-dot pulse"></span>
                                <span className="badge-text">Visionary Leadership • Ethical Excellence</span>
                            </div>

                            <h1 className="mb-3 mb-md-4 display-3 fw-extra-bold tracking-tight">
                                Samastha Kerala <br className="d-none d-md-block" />
                                <span className="gradient-text-shimmer">Sunni Bala Vedi</span> <br />
                                <span className="accent-text-glow">SKSBV State</span>
                            </h1>

                            <p className="mb-4 mb-md-5 fs-5 text-muted-premium">
                                A premier platform for students, fostering high religious ideals,
                                <span className="text-accent-shimmer fw-semibold"> discipline</span>, and <span className="text-success-shimmer fw-semibold">communal amity</span>.
                                <span className="d-block mt-3 fw-medium text-dark-soft">Under the aegis of Jem-lyyathul Mu'allimeen Central Council.</span>
                            </p>

                            <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start align-items-center">
                                <Link to="/about" className="btn btn-premium-primary group">
                                    <span>Our Mission</span>
                                    <i className="bi bi-arrow-right ms-2 transition-transform group-hover-translate-x"></i>
                                </Link>
                                <Link to="/contact" className="btn btn-premium-outline">
                                    <i className="bi bi-person-badge me-2"></i>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-image-wrapper mt-4 mt-lg-0 text-center" data-aos="fade-left" data-aos-delay="300">
                            <div className="image-glow-ring"></div>
                            <img src={`${import.meta.env.BASE_URL}assets/img/home/heroimage.png`} alt="Hero Image" className="img-fluid floating-img-refined shadow-3xl mx-auto" />

                            <div className="advanced-glass-card shadow-2xl p-3 p-md-4">
                                <div className="card-top-accent"></div>
                                <i className="bi bi-quote quote-icon mb-2"></i>
                                <p className="mb-0 italic-style text-dark fw-semibold leading-relaxed">
                                    “Show mercy to those on the earth, and the One in the heavens will show mercy to you.”
                                </p>
                                <div className="author-wrapper mt-2 mt-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
                                    <div className="author-line"></div>
                                    <span className="quote-author">Muhammad ﷺ ibn Abdullah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-2 g-sm-3 g-md-4 mt-4 mt-md-5 pt-lg-4" data-aos="fade-up" data-aos-delay="400">
                    {[
                        { icon: "bi-calendar-check", val: "1993", label: "Established", color: "#0d83fd" },
                        { icon: "bi-journal-text", val: "10,000+", label: "Active Units", color: "#10b981" },
                        { icon: "bi-people", val: "Millions", label: "Students", color: "#f59e0b" },
                        { icon: "bi-award", val: "30+ Years", label: "Excellence", color: "#ef4444" }
                    ].map((stat, idx) => (
                        <div className="col-6 col-md-3" key={idx}>
                            <div className="compact-stat-box" style={{ '--card-accent': stat.color }}>
                                <div className="stat-box-inner">
                                    <div className="stat-box-icon">
                                        <i className={`bi ${stat.icon}`}></i>
                                    </div>
                                    <div className="stat-box-data">
                                        <h4 className="stat-box-val">{stat.val}</h4>
                                        <p className="stat-box-lbl">{stat.label}</p>
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
                    min-height: 95vh;
                    display: flex;
                    align-items: center;
                    padding: 130px 0 90px;
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
                        radial-gradient(at 0% 0%, rgba(13, 131, 253, 0.05) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.05) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.05) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, rgba(239, 68, 68, 0.05) 0px, transparent 50%);
                    opacity: 0.8;
                }
                .dot-grid {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
                    background-size: 30px 30px;
                    opacity: 0.2;
                    mask-image: linear-gradient(to bottom, transparent, black, transparent);
                }
                .shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.15;
                    animation: float-bg-complex 25s infinite alternate ease-in-out;
                }
                .shape-1 { width: 500px; height: 500px; background: #0d83fd; top: -15%; right: -5%; }
                .shape-2 { width: 400px; height: 400px; background: #10b981; bottom: 5%; left: -10%; animation-delay: -7s; }
                .shape-3 { width: 300px; height: 300px; background: #f59e0b; top: 40%; left: 35%; animation-delay: -12s; }

                @keyframes float-bg-complex {
                    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                    100% { transform: translate(60px, 80px) scale(1.15) rotate(15deg); }
                }

                .fw-extra-bold { font-weight: 800; }
                .tracking-tight { letter-spacing: -0.025em; }
                .tracking-widest { letter-spacing: 0.1em; }

                .gradient-text-shimmer {
                    background: linear-gradient(135deg, #0d83fd 0%, #10b981 50%, #0d83fd 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer-text 5s linear infinite;
                }
                @keyframes shimmer-text {
                    to { background-position: 200% center; }
                }
                .accent-text-glow {
                    color: #1e293b;
                    text-shadow: 0 0 30px rgba(13, 131, 253, 0.15);
                }
                .text-muted-premium { color: #64748b; line-height: 1.8; max-width: 540px; }
                .text-dark-soft { color: #334155; }
                .text-accent-shimmer { color: #0d83fd; }

                .premium-badge {
                    display: inline-flex;
                    align-items: center;
                    background: rgba(13, 131, 253, 0.05);
                    padding: 8px 18px;
                    border-radius: 100px;
                    border: 1px solid rgba(13, 131, 253, 0.1);
                    backdrop-filter: blur(5px);
                }
                .badge-text { font-size: 11px; font-weight: 700; color: #0d83fd; text-transform: uppercase; letter-spacing: 1.2px; }

                .btn-premium-primary {
                    background: linear-gradient(135deg, #0d83fd 0%, #2563eb 100%);
                    color: white;
                    padding: 14px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
                    box-shadow: 0 10px 25px rgba(13, 131, 253, 0.25);
                }
                .group-hover-translate-x { transition: transform 0.3s; }
                .btn-premium-primary:hover .group-hover-translate-x { transform: translateX(5px); }
                .btn-premium-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 35px rgba(13, 131, 253, 0.35);
                    color: white;
                }

                .btn-premium-outline {
                    background: white;
                    color: #1e293b;
                    padding: 14px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    border: 1.5px solid #e2e8f0;
                }
                .btn-premium-outline:hover {
                    border-color: #0d83fd;
                    color: #0d83fd;
                    transform: translateY(-4px);
                    background: #f8fbff;
                }

                .hero-image-wrapper { position: relative; z-index: 1; padding: 15px; }
                .image-glow-ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 40px;
                    background: radial-gradient(circle, rgba(13, 131, 253, 0.15) 0%, transparent 70%);
                    animation: pulse-glow 8s infinite alternate;
                }
                @keyframes pulse-glow {
                    0% { opacity: 0.5; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1.1); }
                }
                .floating-img-refined { 
                    animation: float-refined 7s infinite ease-in-out; 
                    border-radius: 40px;
                    position: relative;
                    z-index: 2;
                    max-height: 480px;
                }
                @keyframes float-refined {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-18px) rotate(1deg); }
                }

                .advanced-glass-card {
                    position: absolute;
                    bottom: -15px;
                    right: -10px;
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 20px;
                    max-width: 360px;
                    z-index: 3;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12);
                }
                .card-top-accent {
                    position: absolute;
                    top: 0; left: 24px; right: 24px; height: 3px;
                    background: linear-gradient(90deg, transparent, #0d83fd, transparent);
                    opacity: 0.5;
                }
                .author-wrapper { gap: 10px; }
                .author-line { width: 30px; height: 1.5px; background: #e2e8f0; }
                .quote-author { font-size: 10px; color: #94a3b8; letter-spacing: 2px; font-weight: 800; text-transform: uppercase; }

                /* Compact "Small Box" Stats */
                .compact-stat-box {
                    position: relative;
                    padding: 22px 18px;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(15px) saturate(160%);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 20px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
                    overflow: hidden;
                    height: 100%;
                }
                .compact-stat-box:hover {
                    background: #ffffff;
                    transform: translateY(-6px);
                    box-shadow: 0 20px 45px -10px rgba(0,0,0,0.08);
                    border-color: var(--card-accent);
                }
                .stat-box-inner {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .stat-box-icon {
                    width: 42px;
                    height: 42px;
                    background: color-mix(in srgb, var(--card-accent) 10%, #fff);
                    color: var(--card-accent);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    margin-bottom: 10px;
                    transition: all 0.3s ease;
                }
                .compact-stat-box:hover .stat-box-icon {
                    background: var(--card-accent);
                    color: white;
                    transform: scale(1.08);
                }
                .stat-box-val {
                    font-size: 1.45rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 2px;
                    letter-spacing: -0.5px;
                }
                .stat-box-lbl {
                    font-size: 10px;
                    font-weight: 700;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    margin-bottom: 0;
                }
                .stat-box-glow {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(circle, color-mix(in srgb, var(--card-accent) 15%, transparent) 0%, transparent 70%);
                    opacity: 0;
                    transition: 0.5s;
                }
                .compact-stat-box:hover .stat-box-glow {
                    opacity: 1;
                }

                @media (max-width: 991px) {
                    .hero { text-align: center; padding-top: 100px; min-height: auto; }
                    .hero-buttons { justify-content: center !important; }
                    .advanced-glass-card {
                        position: relative;
                        bottom: auto; right: auto;
                        margin: -35px auto 30px;
                        max-width: 95%;
                    }
                    .text-muted-premium { margin: 0 auto 30px; }
                    .display-3 { font-size: 2.75rem; }
                }
                @media (max-width: 575px) {
                    .hero { padding: 90px 0 50px !important; }
                    .display-3 { font-size: 2rem !important; line-height: 1.2 !important; }
                    .hero-buttons { flex-direction: column !important; width: 100%; gap: 10px !important; }
                    .btn-premium-primary, .btn-premium-outline { width: 100% !important; justify-content: center !important; padding: 13px 20px !important; }
                    .compact-stat-box { padding: 14px 8px !important; border-radius: 16px !important; }
                    .stat-box-icon { width: 34px !important; height: 34px !important; font-size: 15px !important; margin-bottom: 6px !important; }
                    .stat-box-val { font-size: 1.2rem !important; }
                    .stat-box-lbl { font-size: 8.5px !important; letter-spacing: 0.5px !important; }
                    .advanced-glass-card { padding: 14px 16px !important; margin: -25px 8px 20px !important; }
                    .advanced-glass-card p { font-size: 13.5px !important; }
                    .badge-text { font-size: 10px !important; letter-spacing: 0.8px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
