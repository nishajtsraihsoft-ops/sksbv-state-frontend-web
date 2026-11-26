import React from 'react';

const MilestonesSection = () => {
    const milestones = [
        {
            year: "1926",
            era: "The Origin",
            title: "Foundation of Samastha",
            description: "Our parent organisation Samastha Kerala Jem'iyyathul Ulama was founded, laying the enduring foundation for authentic Islamic education in Kerala.",
            icon: "bi-building-fill-check",
            color: "#0d83fd"
        },
        {
            year: "1993",
            era: "Genesis",
            title: "SKSBV Formation",
            description: "Samastha Kerala Sunni Bala Vedi was founded on December 26, dedicated to nurturing faith, discipline, and leadership among the young generation.",
            icon: "bi-flag-fill",
            color: "#10b981"
        },
        {
            year: "2003",
            era: "First Decade",
            title: "10th Annual Conference",
            description: "The 10th Annual Conference of SKSBV marked a decade of successful student empowerment and organizational unity across Kerala.",
            icon: "bi-calendar-check-fill",
            color: "#f59e0b"
        },
        {
            year: "2008",
            era: "Statewide Reach",
            title: "15th Annual Conference",
            description: "Held in Kozhikode, expanding our academic, cultural, and moral guidance programs to thousands more madrassa units.",
            icon: "bi-people-fill",
            color: "#7209b7"
        },
        {
            year: "2018",
            era: "Silver Jubilee",
            title: "25th Annual Conference",
            description: "Celebrated in Malappuram, commemorating 25 glorious years of excellence in moral guidance and student welfare.",
            icon: "bi-trophy-fill",
            color: "#ef4444"
        },
        {
            year: "2023",
            era: "Pearl Jubilee",
            title: "30th Annual Conference",
            description: "Hosted in Kozhikode, reinforcing our 30-year commitment to shaping an enlightened, disciplined new generation.",
            icon: "bi-award-fill",
            color: "#0284c7"
        }
    ];

    return (
        <section id="milestones" className="milestones-redesign section position-relative overflow-hidden">
            {/* Subtle Ambient Background Blobs */}
            <div className="milestone-glow glow-top-right"></div>
            <div className="milestone-glow glow-bottom-left"></div>

            <div className="container position-relative z-1" data-aos="fade-up">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="badge-pill-modern mb-3">
                        <span className="badge-pill-dot"></span>
                        <span>Chronicles of SKSBV</span>
                    </span>
                    <h2 className="fw-bold mb-2 responsive-h2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                        Our Historical <span className="gradient-text-primary">Milestones</span>
                    </h2>
                    <p className="text-muted mx-auto mb-0" style={{ maxWidth: '620px', fontSize: '1rem' }}>
                        Tracing nearly a century of heritage, dedication, and the evolution of a statewide student movement.
                    </p>
                </div>

                {/* Balanced Gradient Timeline */}
                <div className="timeline-container position-relative mx-auto">
                    {/* Center Gradient Spine */}
                    <div className="timeline-spine"></div>

                    <div className="timeline-list">
                        {milestones.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div
                                    key={idx}
                                    className={`timeline-row ${isEven ? 'row-left' : 'row-right'}`}
                                    data-aos={isEven ? 'fade-right' : 'fade-left'}
                                    data-aos-delay={(idx % 3) * 80}
                                >
                                    {/* Center Node */}
                                    <div
                                        className="timeline-node d-flex align-items-center justify-content-center shadow"
                                        style={{
                                            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                                            boxShadow: `0 0 0 5px #ffffff, 0 8px 20px ${item.color}40`
                                        }}
                                    >
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>

                                    {/* Opposite Side Year & Era Callout (Desktop only) */}
                                    <div className="timeline-opposite d-none d-lg-flex flex-column justify-content-center">
                                        <div className="opposite-year" style={{ color: item.color }}>
                                            {item.year}
                                        </div>
                                        <div className="opposite-era text-muted text-uppercase fw-bold">
                                            {item.era}
                                        </div>
                                    </div>

                                    {/* Milestone Card */}
                                    <div className="timeline-card-col">
                                        <div
                                            className="milestone-card p-4 rounded-4 bg-white shadow-sm position-relative overflow-hidden"
                                            style={{ '--card-color': item.color }}
                                        >
                                            {/* Left / Top Colored Bar */}
                                            <div className="card-accent-strip" style={{ background: item.color }}></div>

                                            {/* Top Meta Row */}
                                            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                                <span
                                                    className="badge rounded-pill px-3 py-1 fw-bold"
                                                    style={{ background: `${item.color}15`, color: item.color, fontSize: '12px' }}
                                                >
                                                    {item.year}
                                                </span>
                                                <span className="text-muted text-uppercase fw-semibold" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>
                                                    {item.era}
                                                </span>
                                            </div>

                                            <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--heading-color)' }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .milestones-redesign {
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    padding: 70px 0;
                }

                .milestone-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    opacity: 0.12;
                    pointer-events: none;
                }
                .glow-top-right {
                    width: 360px;
                    height: 360px;
                    background: #0d83fd;
                    top: -60px;
                    right: -80px;
                }
                .glow-bottom-left {
                    width: 320px;
                    height: 320px;
                    background: #10b981;
                    bottom: -60px;
                    left: -80px;
                }

                .timeline-container {
                    max-width: 1020px;
                }

                .timeline-spine {
                    position: absolute;
                    left: 50%;
                    top: 15px;
                    bottom: 15px;
                    width: 3px;
                    transform: translateX(-50%);
                    background: linear-gradient(180deg, #0d83fd 0%, #10b981 25%, #f59e0b 50%, #7209b7 75%, #ef4444 90%, #0284c7 100%);
                    border-radius: 4px;
                    opacity: 0.35;
                }

                .timeline-row {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 36px;
                }
                .timeline-row:last-child {
                    margin-bottom: 0;
                }

                .timeline-node {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    color: #ffffff;
                    font-size: 18px;
                    z-index: 3;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .timeline-row:hover .timeline-node {
                    transform: translateX(-50%) scale(1.12);
                }

                .timeline-card-col {
                    width: calc(50% - 44px);
                }

                .timeline-opposite {
                    width: calc(50% - 44px);
                }

                /* Left Row: Card on Left, Year Callout on Right */
                .row-left .timeline-card-col {
                    order: 1;
                }
                .row-left .timeline-opposite {
                    order: 2;
                    align-items: flex-start;
                    padding-left: 12px;
                }

                /* Right Row: Year Callout on Left, Card on Right */
                .row-right .timeline-opposite {
                    order: 1;
                    align-items: flex-end;
                    padding-right: 12px;
                    text-align: right;
                }
                .row-right .timeline-card-col {
                    order: 2;
                }

                .opposite-year {
                    font-size: 2.35rem;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -1px;
                    font-family: var(--heading-font);
                }
                .opposite-era {
                    font-size: 11px;
                    letter-spacing: 1.5px;
                    margin-top: 4px;
                }

                .milestone-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .milestone-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 18px 35px -10px rgba(13, 131, 253, 0.14) !important;
                    border-color: rgba(13, 131, 253, 0.2) !important;
                }

                .card-accent-strip {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 4px;
                }

                /* Tablet & Mobile Responsive */
                @media (max-width: 991px) {
                    .milestones-redesign {
                        padding: 50px 0;
                    }
                    .timeline-spine {
                        left: 20px;
                        transform: none;
                    }
                    .timeline-row {
                        justify-content: flex-start;
                        padding-left: 54px;
                        margin-bottom: 24px;
                    }
                    .timeline-node {
                        left: 20px;
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }
                    .timeline-card-col {
                        width: 100%;
                    }
                }

                @media (max-width: 575px) {
                    .timeline-spine {
                        left: 16px;
                    }
                    .timeline-row {
                        padding-left: 44px;
                        margin-bottom: 20px;
                    }
                    .timeline-node {
                        left: 16px;
                        width: 34px;
                        height: 34px;
                        font-size: 14px;
                    }
                    .milestone-card {
                        padding: 1rem 1.15rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default MilestonesSection;
