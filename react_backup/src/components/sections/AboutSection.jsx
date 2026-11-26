import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutSection = () => {
    const [activePillar, setActivePillar] = useState(0);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const pillars = [
        {
            title: "Our Mission",
            subtitle: "Moral & Spiritual Foundation",
            icon: "bi-bullseye",
            color: "#0d83fd",
            description: "Rooted in the principles of Samastha, we foster moral discipline, exemplary conduct, and meaningful student-mentor bonds across every madrassa unit.",
            points: ["Character & Adab building", "Strong Ustad-Student camaraderie"]
        },
        {
            title: "Our Vision",
            subtitle: "Future-Ready Leadership",
            icon: "bi-eye-fill",
            color: "#10b981",
            description: "Instilling authentic Islamic values while equipping young students with contemporary leadership, communication, and organizational skills for a brighter tomorrow.",
            points: ["Creative talent empowerment", "Confident community leadership"]
        },
        {
            title: "Core Values",
            subtitle: "Ahlussunnah Principles",
            icon: "bi-shield-heart",
            color: "#f59e0b",
            description: "Upholding Ahlussunnah wal Jama'ah ideals, mutual respect, communal harmony, and unwavering dedication to authentic educational excellence.",
            points: ["Peace & communal amity", "Authentic scholarly guidance"]
        }
    ];

    const currentPillar = pillars[activePillar];

    return (
        <section id="about" className="about-creative-section py-5 position-relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="about-bg-blob blob-1"></div>
            <div className="about-bg-blob blob-2"></div>

            <div className="container position-relative z-1" data-aos="fade-up">
                <div className="row gy-5 align-items-center">
                    {/* Left Column: Layered Visual Collage */}
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="150">
                        <div className="about-collage-wrap position-relative mx-auto px-2 px-sm-0" style={{ maxWidth: '520px' }}>
                            {/* Decorative Dot Grid */}
                            <div className="collage-dot-pattern d-none d-sm-block"></div>

                            {/* Main Image Card */}
                            <div className="main-photo-frame rounded-5 shadow-2xl overflow-hidden position-relative">
                                <img
                                    src="/assets/img/about/about-img.jpeg"
                                    alt="SKSBV Community & Students"
                                    className="img-fluid w-100 object-fit-cover about-main-img"
                                    style={{ minHeight: '320px', maxHeight: '460px' }}
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80';
                                    }}
                                />
                                <div className="photo-gradient-overlay"></div>

                                {/* Bottom Inner Caption Strip */}
                                <div className="photo-inner-caption p-3 p-md-4 text-white">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <span className="caption-dot"></span>
                                        <span className="small fw-bold text-uppercase" style={{ letterSpacing: '1px', fontSize: '11px', color: '#7dd3fc' }}>
                                            Est. December 26, 1993
                                        </span>
                                    </div>
                                    <p className="mb-0 fw-semibold small text-white-90">
                                        Samastha Kerala Sunni Bala Vedi • State Committee
                                    </p>
                                </div>
                            </div>

                            {/* Top-Left Floating Heritage Pill */}
                            <div className="floating-heritage-pill shadow-lg px-3 py-2 rounded-pill bg-white position-absolute d-flex align-items-center gap-2 border">
                                <span className="heritage-icon-circle d-flex align-items-center justify-content-center rounded-circle">
                                    <i className="bi bi-award-fill text-primary"></i>
                                </span>
                                <span className="fw-bold text-dark" style={{ fontSize: '12px' }}>
                                    10,000+ Active Units
                                </span>
                            </div>

                            {/* Bottom-Right Floating 30+ Years Card */}
                            <div className="floating-years-card shadow-lg px-3 py-2 px-md-4 py-md-3 rounded-4 bg-white position-absolute border d-flex align-items-center gap-2 gap-md-3">
                                <div className="years-number fw-extra-bold lh-1">30+</div>
                                <div className="lh-sm">
                                    <div className="text-uppercase fw-bold text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>Years of</div>
                                    <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>Moral Legacy</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative + Interactive Pillars */}
                    <div className="col-lg-6 ps-lg-4 text-center text-lg-start" data-aos="fade-left" data-aos-delay="200">
                        <span className="badge-pill-modern mb-3">
                            <span className="badge-pill-dot"></span>
                            <span>About SKSBV</span>
                        </span>

                        <h2 className="fw-bold mb-3 responsive-h2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                            Shaping Tomorrow with <span className="gradient-text-primary">Faith & Character</span>
                        </h2>

                        <p className="text-muted mb-3" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                            The <strong>Samastha Kerala Sunni Bala Vedi (SKSBV)</strong> is the apex student organization under the aegis of the Samastha Kerala Islam Matha Vidyabhyasa Board. Established in 1993, SKSBV steers millions of young minds toward moral uprightness and intellectual capability.
                        </p>
                        <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                            Guided by the <strong>Jem-Iyyathul Mu'allimeen Central Council</strong>, we safeguard students from moral disorientation while cultivating deep, respectful teacher-student camaraderie.
                        </p>

                        {/* Interactive Pillar Selector Tabs */}
                        <div className="pillar-tabs-bar d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-3">
                            {pillars.map((pillar, idx) => {
                                const isActive = activePillar === idx;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setActivePillar(idx)}
                                        className={`btn pillar-tab-btn rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2 ${isActive ? 'tab-active' : ''}`}
                                        style={{
                                            '--tab-color': pillar.color
                                        }}
                                    >
                                        <i className={`bi ${pillar.icon}`}></i>
                                        <span>{pillar.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Pillar Showcase Card */}
                        <div
                            className="active-pillar-card p-4 rounded-4 bg-white shadow-sm border text-start position-relative overflow-hidden transition-all"
                            style={{ '--active-color': currentPillar.color }}
                        >
                            <div className="pillar-left-bar" style={{ background: currentPillar.color }}></div>

                            <div className="d-flex align-items-start gap-3">
                                <div
                                    className="active-pillar-icon rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{ background: `${currentPillar.color}15`, color: currentPillar.color }}
                                >
                                    <i className={`bi ${currentPillar.icon} fs-4`}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                                        <h4 className="h6 fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>
                                            {currentPillar.title}
                                        </h4>
                                        <span className="small fw-semibold" style={{ color: currentPillar.color, fontSize: '11.5px' }}>
                                            {currentPillar.subtitle}
                                        </span>
                                    </div>

                                    <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.65' }}>
                                        {currentPillar.description}
                                    </p>

                                    <div className="d-flex flex-wrap gap-3">
                                        {currentPillar.points.map((pt, i) => (
                                            <div key={i} className="d-flex align-items-center gap-2 small fw-medium text-dark" style={{ fontSize: '12.5px' }}>
                                                <i className="bi bi-check-circle-fill" style={{ color: currentPillar.color }}></i>
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Link on Home Page */}
                        {isHomePage && (
                            <div className="mt-4">
                                <Link to="/about" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 about-more-btn">
                                    <span>Explore Our Full Journey</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .about-creative-section {
                    background: #ffffff;
                    padding: 80px 0;
                }
                .about-bg-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(85px);
                    opacity: 0.1;
                    z-index: 0;
                    pointer-events: none;
                }
                .blob-1 { width: 380px; height: 380px; background: #0d83fd; top: -5%; left: -5%; }
                .blob-2 { width: 320px; height: 320px; background: #10b981; bottom: 5%; right: -5%; }

                /* Collage Styling */
                .collage-dot-pattern {
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 140px;
                    height: 140px;
                    background-image: radial-gradient(rgba(13, 131, 253, 0.28) 2px, transparent 2px);
                    background-size: 16px 16px;
                    z-index: 0;
                }

                .main-photo-frame {
                    border: 5px solid #ffffff;
                    box-shadow: 0 25px 50px -12px rgba(13, 131, 253, 0.18);
                    z-index: 1;
                }
                .about-main-img {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .main-photo-frame:hover .about-main-img {
                    transform: scale(1.04);
                }
                .photo-gradient-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 45%, rgba(2, 12, 32, 0.82) 100%);
                }
                .photo-inner-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 2;
                }
                .caption-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #38bdf8;
                    box-shadow: 0 0 8px #38bdf8;
                }
                .text-white-90 {
                    color: rgba(255, 255, 255, 0.92);
                }

                .floating-heritage-pill {
                    top: 18px;
                    left: -12px;
                    z-index: 3;
                    animation: floatSlow 5s ease-in-out infinite;
                }
                .heritage-icon-circle {
                    width: 28px;
                    height: 28px;
                    background: rgba(13, 131, 253, 0.1);
                }

                .floating-years-card {
                    bottom: -18px;
                    right: 16px;
                    z-index: 3;
                }
                .years-number {
                    font-size: 2.1rem;
                    background: linear-gradient(135deg, #0d83fd 0%, #0284c7 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }

                /* Interactive Pillar Tabs */
                .pillar-tab-btn {
                    font-size: 13.5px;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    background: #f8fafc;
                    color: #475569;
                    transition: all 0.25s ease;
                }
                .pillar-tab-btn:hover {
                    background: #ffffff;
                    color: var(--tab-color);
                    border-color: var(--tab-color);
                    transform: translateY(-1px);
                }
                .pillar-tab-btn.tab-active {
                    background: var(--tab-color);
                    color: #ffffff;
                    border-color: var(--tab-color);
                    box-shadow: 0 6px 16px -4px rgba(13, 131, 253, 0.35);
                }

                .active-pillar-card {
                    border: 1px solid rgba(0, 0, 0, 0.06) !important;
                }
                .pillar-left-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 4px;
                    transition: background 0.3s ease;
                }
                .active-pillar-icon {
                    width: 46px;
                    height: 46px;
                    transition: all 0.3s ease;
                }

                .about-more-btn:hover i {
                    transform: translateX(4px);
                    transition: transform 0.2s ease;
                }

                @media (max-width: 768px) {
                    .about-creative-section {
                        padding: 50px 0;
                    }
                    .floating-heritage-pill {
                        left: 6px;
                        top: 12px;
                    }
                    .floating-years-card {
                        right: 10px;
                        bottom: -14px;
                    }
                    .years-number {
                        font-size: 1.7rem;
                    }
                }

                @media (max-width: 480px) {
                    .pillar-tab-btn {
                        font-size: 12.5px;
                        padding: 7px 12px !important;
                    }
                    .active-pillar-card {
                        padding: 1.15rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
