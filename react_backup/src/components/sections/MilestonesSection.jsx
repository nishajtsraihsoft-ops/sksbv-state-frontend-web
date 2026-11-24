import React from 'react';

const MilestonesSection = () => {
    const milestones = [
        {
            year: "1926",
            title: "Foundation of Samastha",
            description: "Our parent organisation Samastha Kerala Jem'iyyathul Ulama was founded, laying the foundation for Islamic education in Kerala.",
            icon: "bi-building-fill-check",
            color: "#0d83fd"
        },
        {
            year: "1993",
            title: "SKSBV Formation",
            description: "Samastha Kerala Sunni Bala Vedi was founded on December 26, dedicated to nurturing the young generation.",
            icon: "bi-flag-fill",
            color: "#10b981"
        },
        {
            year: "2003",
            title: "10th Annual Conference",
            description: "The 10th Annual Conference of SKSBV was held, marking a decade of successful student empowerment.",
            icon: "bi-calendar-check",
            color: "#f59e0b"
        },
        {
            year: "2008",
            title: "15th Annual Conference",
            description: "The 15th Annual Conference was held at Kozhikode, expanding our reach to more educational units.",
            icon: "bi-people-fill",
            color: "#7209b7"
        },
        {
            year: "2018",
            title: "Silver Jubilee (25th)",
            description: "25th Annual Conference held at Malappuram, celebrating 25 years of excellence in moral guidance.",
            icon: "bi-trophy-fill",
            color: "#ef4444"
        },
        {
            year: "2023",
            title: "30th Annual Conference",
            description: "The 30th Annual Conference was held at Kozhikode, reinforcing our commitment to the new generation.",
            icon: "bi-award-fill",
            color: "#1d4ed8"
        }
    ];

    return (
        <section id="milestones" className="milestones-modern section py-5 light-background position-relative overflow-hidden">
            {/* Visual background accents */}
            <div className="modern-bg-circle circle-1"></div>
            <div className="modern-bg-circle circle-2"></div>

            <div className="container" data-aos="fade-up">
                <div className="section-title text-center mb-5">
                    <span className="badge rounded-pill px-3 py-2 bg-primary mb-3 shadow-sm text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '2px', color: '#fff' }}>
                        Chronicles of SKSBV
                    </span>
                    <h2 className="fw-bold mb-3 responsive-h2" style={{ color: 'var(--heading-color)', letterSpacing: '-1px' }}>Our Historical Milestones</h2>
                    <p className="text-muted mx-auto lead" style={{ maxWidth: '650px' }}>Tracing back a century of impact, dedication, and the evolution of a movement.</p>
                </div>

                <div className="modern-timeline position-relative pt-4">
                    {/* The Rail */}
                    <div className="timeline-rail"></div>

                    <div className="timeline-items">
                        {milestones.map((item, idx) => (
                            <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx} data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}>
                                {/* Floating Year (Desktop only) */}
                                <div className="timeline-year-anchor">{item.year}</div>

                                {/* Connection Dot */}
                                <div className="timeline-marker" style={{ backgroundColor: item.color }}>
                                    <i className={`bi ${item.icon}`}></i>
                                </div>

                                <div className="timeline-card-wrapper">
                                    <div className="modern-card p-4 rounded-5 shadow-sm">
                                        <div className="card-top-accent" style={{ background: item.color }}></div>

                                        <div className="d-flex align-items-center mb-3">
                                            <span className="year-pill px-3 py-1 rounded-pill" style={{ background: `${item.color}15`, color: item.color }}>
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>{item.title}</h3>
                                        <p className="text-muted mb-0 small-text">{item.description}</p>

                                        <div className="card-footer-number" style={{ color: `${item.color}08` }}>0{idx + 1}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .milestones-modern {
                    background-color: #fbfcfe;
                    padding: 80px 0;
                }
                @media (max-width: 768px) {
                    .milestones-modern {
                        padding: 40px 0;
                    }
                }
                .modern-bg-circle {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    z-index: 0;
                    opacity: 0.1;
                    pointer-events: none;
                }
                .circle-1 { width: 400px; height: 400px; background: var(--accent-color); top: -100px; right: -50px; }
                .circle-2 { width: 300px; height: 300px; background: #10b981; bottom: 0; left: -50px; }

                .modern-timeline {
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .timeline-rail {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.05) 90%, transparent);
                    transform: translateX(-50%);
                    z-index: 1;
                }
                .timeline-items {
                    position: relative;
                    z-index: 2;
                }
                .timeline-item {
                    position: relative;
                    margin-bottom: 60px;
                    width: 50%;
                }
                .timeline-item.left { left: 0; padding-right: 60px; text-align: right; }
                .timeline-item.right { left: 50%; padding-left: 60px; text-align: left; }

                .timeline-marker {
                    position: absolute;
                    top: 30px;
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    z-index: 3;
                    transition: transform 0.3s ease;
                }
                .left .timeline-marker { right: -22px; }
                .right .timeline-marker { left: -22px; }

                .timeline-year-anchor {
                    position: absolute;
                    top: 32px;
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: rgba(0,0,0,0.03);
                    line-height: 1;
                    letter-spacing: -2px;
                    transition: all 0.4s ease;
                }
                .left .timeline-year-anchor { left: 0; transform: translateX(-50px); }
                .right .timeline-year-anchor { right: 0; transform: translateX(50px); }

                .modern-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.04);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                }
                .card-top-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                }
                .card-footer-number {
                    position: absolute;
                    bottom: -10px;
                    right: 15px;
                    font-size: 60px;
                    font-weight: 900;
                    line-height: 1;
                    user-select: none;
                }
                .year-pill { font-size: 13px; font-weight: 700; letter-spacing: 0.5px; }
                .small-text { font-size: 15px; line-height: 1.6; }

                /* Hovers */
                .timeline-item:hover .timeline-marker { transform: rotate(15deg) scale(1.1); }
                .timeline-item:hover .modern-card { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important; }
                .timeline-item:hover .timeline-year-anchor { color: rgba(0,0,0,0.08); transform: scale(1.1) rotate(-5deg); }

                @media (max-width: 991px) {
                    .timeline-rail { left: 20px; transform: none; }
                    .timeline-item { width: 100%; padding-left: 50px !important; padding-right: 0 !important; text-align: left !important; margin-bottom: 40px; }
                    .timeline-item.right { left: 0; }
                    .timeline-marker { left: -2px !important; top: 15px; width: 40px; height: 40px; }
                    .timeline-year-anchor { display: none; }
                    .modern-card { min-height: auto; padding: 1.5rem !important; }
                    .card-footer-number { font-size: 40px; bottom: -5px; right: 10px; }
                }
                
                @media (max-width: 575px) {
                    .timeline-rail { left: 15px; }
                    .timeline-item { padding-left: 40px !important; }
                    .timeline-marker { left: -5px !important; width: 36px; height: 36px; font-size: 16px; }
                    .modern-card h3 { font-size: 1.1rem !important; }
                }
            `}</style>
        </section>
    );
};

export default MilestonesSection;
