import React from 'react';

const AboutSection = () => {
    const pillars = [
        {
            title: "Mission",
            icon: "bi-bullseye",
            color: "#0d83fd",
            description: "Based on the principles of Samastha, fostering discipline, good conduct, and strong teacher-student bonds."
        },
        {
            title: "Vision",
            icon: "bi-eye-fill",
            color: "#10b981",
            description: "Instilling religious thoughts and informing the new generation about our rich history and core values."
        },
        {
            title: "Values",
            icon: "bi-shield-heart",
            color: "#f59e0b",
            description: "Upholding Ahlussunnah wal Jama'ah principles and honoring mentors with utmost discipline."
        }
    ];

    return (
        <section id="about" className="about-section py-5 position-relative overflow-hidden">
            {/* Background Decorations */}
            <div className="about-bg-blob blob-1"></div>
            <div className="about-bg-blob blob-2"></div>

            <div className="container position-relative" data-aos="fade-up">
                <div className="row gy-5 align-items-center">
                    {/* Image Column */}
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                        <div className="about-image-stack px-2 px-sm-0">
                            <div className="main-img-wrapper rounded-5 shadow-2xl overflow-hidden position-relative mx-auto" style={{ maxWidth: '100%' }}>
                                <img src="/assets/img/about/about-img.jpeg"
                                    alt="SKSBV Community"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{ minHeight: '300px', maxHeight: '500px' }}
                                    onError={(e) => { e.target.src = 'https://placehold.co/800x1000?text=SKSBV+Students'; }}
                                />
                                <div className="img-overlay"></div>
                            </div>
                            <div className="experience-badge d-flex align-items-center shadow-lg px-3 py-2 px-md-4 py-md-3 rounded-4 bg-white position-absolute">
                                <span className="display-6 display-md-5 fw-bold text-primary mb-0 me-2 me-md-3">30+</span>
                                <span className="text-uppercase fw-semibold text-muted lh-1" style={{ fontSize: '10px', mdFontSize: '11px', letterSpacing: '1px' }}>Years of<br />Excellence</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6 ps-lg-5 text-center text-lg-start" data-aos="fade-left" data-aos-delay="300">
                        <div className="about-header mb-4">
                            <span className="badge rounded-pill px-3 py-2 fw-bold text-primary mb-3 shadow-sm d-inline-block" style={{ background: 'rgba(13, 131, 253, 0.1)', fontSize: '12px', letterSpacing: '1px' }}>
                                ABOUT SKSBV
                            </span>
                            <h2 className="fw-bold mb-4 responsive-h2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
                                Shaping the Future with <br className="d-lg-none" /> <span className="text-primary italic-style">Faith & Discipline</span>
                            </h2>
                            <p className="text-muted mb-4 px-2 px-lg-0" style={{ lineHeight: '1.6', fontSize: '15px' }}>
                                The Samastha Kerala Sunni Bala Vedi (SKSBV) is a premier student platform under the Samastha Kerala Islam Matha Vidyabhyasa Board. Formed in 1993, we are dedicated to nurturing the next generation with religious knowledge and moral discipline.
                            </p>
                            <p className="text-muted mb-5 px-2 px-lg-0" style={{ lineHeight: '1.6', fontSize: '15px' }}>
                                Controlled by the Mu'allimeen Central Council, we strive to safeguard students from deviant ideologies while fostering a deep-rooted bond between mentors and students.
                            </p>
                        </div>

                        {/* Pillars Grid */}
                        <div className="row g-3 justify-content-center justify-content-lg-start">
                            {pillars.map((pillar, idx) => (
                                <div className="col-sm-6 col-md-4" key={idx}>
                                    <div className="pillar-card p-3 h-100 rounded-4 shadow-sm border-0 transition-all hover-lift mx-auto" style={{ maxWidth: '280px' }}>
                                        <div className="pillar-icon mb-3 d-flex align-items-center justify-content-center rounded-3 shadow-sm mx-auto mx-lg-0"
                                            style={{ width: '40px', height: '40px', background: `${pillar.color}15`, color: pillar.color, fontSize: '18px' }}>
                                            <i className={`bi ${pillar.icon}`}></i>
                                        </div>
                                        <h4 className="fw-bold mb-2" style={{ color: 'var(--heading-color)', fontSize: '0.9rem' }}>{pillar.title}</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '12px', lineHeight: '1.4' }}>{pillar.description}</p>
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
                }
                .blob-1 { width: 400px; height: 400px; background: #0d83fd; top: -10%; left: -5%; }
                .blob-2 { width: 300px; height: 300px; background: #10b981; bottom: 5%; right: -5%; }
                
                .about-image-stack {
                    position: relative;
                }
                .main-img-wrapper {
                   border: 1px solid rgba(0,0,0,0.05);
                   transition: transform 0.3s ease;
                }
                .main-img-wrapper:hover {
                    transform: scale(1.02);
                }
                .img-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
                }
                .experience-badge {
                    bottom: 20px;
                    right: 0;
                    z-index: 2;
                    border: 1px solid rgba(0,0,0,0.05);
                    transform: translateX(10px);
                }
                .italic-style {
                    font-style: italic;
                    opacity: 0.9;
                }
                .pillar-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border: 1px solid rgba(0, 0, 0, 0.03) !important;
                }
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.06) !important;
                    background: #ffffff;
                }
                .shadow-2xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
                }

                @media (max-width: 991px) {
                    .ps-lg-5 { padding-left: 0 !important; }
                    .about-image-stack { margin-bottom: 60px; }
                    .experience-badge { bottom: -20px; right: 50%; transform: translateX(50%); width: max-content; }
                }
                
                @media (max-width: 575px) {
                    .experience-badge { bottom: -15px; padding: 10px 20px !important; }
                    .about-header h2 { font-size: clamp(1.5rem, 6vw, 2rem) !important; }
                    .pillar-card { text-align: center; }
                    .pillar-icon { margin-left: auto; margin-right: auto; }
                }
            `}</style>
        </section>
    );
};


export default AboutSection;
