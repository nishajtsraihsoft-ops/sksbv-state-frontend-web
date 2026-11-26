import React from 'react';

const AboutSection = () => {
    const pillars = [
        {
            title: "Our Mission",
            icon: "bi-bullseye",
            color: "#0d83fd",
            description: "Rooted in the principles of Samastha, fostering moral discipline, excellent conduct, and meaningful student-mentor bonds."
        },
        {
            title: "Our Vision",
            icon: "bi-eye-fill",
            color: "#10b981",
            description: "Instilling authentic Islamic values while preparing students with contemporary leadership skills for a brighter future."
        },
        {
            title: "Core Values",
            icon: "bi-shield-heart",
            color: "#f59e0b",
            description: "Upholding Ahlussunnah wal Jama'ah ideals, mutual respect, communal harmony, and educational excellence."
        }
    ];

    return (
        <section id="about" className="about-section py-5 position-relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="about-bg-blob blob-1"></div>
            <div className="about-bg-blob blob-2"></div>

            <div className="container position-relative z-1" data-aos="fade-up">
                <div className="row gy-5 align-items-center">
                    {/* Left Image Stack */}
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                        <div className="about-image-stack px-2 px-sm-0 position-relative mx-auto" style={{ maxWidth: '520px' }}>
                            <div className="main-img-wrapper rounded-5 shadow-2xl overflow-hidden position-relative border">
                                <img 
                                    src="/assets/img/about/about-img.jpeg"
                                    alt="SKSBV Community & Students"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{ minHeight: '320px', maxHeight: '460px' }}
                                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80'; }}
                                />
                                <div className="img-overlay"></div>
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="experience-badge d-flex align-items-center shadow-lg px-3 py-2 px-md-4 py-md-3 rounded-4 bg-white position-absolute border">
                                <span className="display-6 fw-bold text-primary mb-0 me-2 me-md-3">30+</span>
                                <span className="text-uppercase fw-semibold text-muted lh-1" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>
                                    Years of<br /><strong className="text-dark">Excellence</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-lg-6 ps-lg-4 text-center text-lg-start" data-aos="fade-left" data-aos-delay="300">
                        <div className="about-header mb-4">
                            <span className="badge-pill-modern mb-3">
                                <span className="badge-pill-dot"></span>
                                <span>About SKSBV</span>
                            </span>

                            <h2 className="fw-bold mb-3 responsive-h2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                                Shaping Tomorrow with <span className="gradient-text-primary">Faith & Character</span>
                            </h2>

                            <p className="text-muted mb-3" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                The <strong>Samastha Kerala Sunni Bala Vedi (SKSBV)</strong> is the apex student organization under the aegis of the Samastha Kerala Islam Matha Vidyabhyasa Board. Established in 1993, SKSBV steers millions of young minds towards moral uprightness and intellectual capability.
                            </p>
                            <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                Guided by the Jem-Iyyathul Mu'allimeen Central Council, we safeguard students from moral disorientation while building deep, respectful teacher-student camaraderie.
                            </p>
                        </div>

                        {/* 3 Pillars Grid */}
                        <div className="row g-3 justify-content-center justify-content-lg-start">
                            {pillars.map((pillar, idx) => (
                                <div className="col-12 col-sm-4" key={idx}>
                                    <div className="pillar-card p-3 p-md-4 h-100 rounded-4 shadow-sm border bg-white transition-all hover-lift text-start">
                                        <div 
                                            className="pillar-icon mb-3 d-flex align-items-center justify-content-center rounded-3 shadow-sm"
                                            style={{ width: '44px', height: '44px', background: `${pillar.color}15`, color: pillar.color, fontSize: '20px' }}
                                        >
                                            <i className={`bi ${pillar.icon}`}></i>
                                        </div>
                                        <h4 className="fw-bold mb-1" style={{ color: 'var(--heading-color)', fontSize: '0.98rem' }}>{pillar.title}</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    background: #ffffff;
                }
                .about-bg-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.12;
                    z-index: 0;
                    pointer-events: none;
                }
                .blob-1 { width: 380px; height: 380px; background: #0d83fd; top: -5%; left: -5%; }
                .blob-2 { width: 320px; height: 320px; background: #10b981; bottom: 5%; right: -5%; }
                .main-img-wrapper {
                    border: 4px solid #ffffff !important;
                }
                .img-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 60%, rgba(1, 41, 112, 0.4) 100%);
                }
                .experience-badge {
                    bottom: -20px;
                    right: 15px;
                    z-index: 3;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }
                @media (max-width: 575px) {
                    .experience-badge {
                        bottom: -12px;
                        right: 8px;
                        padding: 6px 12px !important;
                    }
                    .experience-badge .display-6 {
                        font-size: 1.6rem !important;
                    }
                }
                .pillar-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .pillar-card:hover {
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
