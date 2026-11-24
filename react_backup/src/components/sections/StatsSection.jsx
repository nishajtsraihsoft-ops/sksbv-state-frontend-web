import React from 'react';

const StatsSection = () => {
    const stats = [
        { icon: "bi-building-check", value: "12,000+", label: "Academic Units", color: "#0d83fd" },
        { icon: "bi-people-fill", value: "4 Wings", label: "Specialized Wings", color: "#10b981" },
        { icon: "bi-geo-alt-fill", value: "14 Districts", label: "Statewide Reach", color: "#f59e0b" },
        { icon: "bi-mortarboard-fill", value: "9,000+", label: "Madrassas Covered", color: "#ef4444" }
    ];

    return (
        <section id="stats" className="stats-redesign section py-5">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-3 g-md-4 justify-content-center">
                    {stats.map((stat, idx) => (
                        <div className="col-6 col-lg-3 col-md-6" key={idx}>
                            <div className="stats-box p-3 p-md-4 rounded-4 text-center transition-all h-100 border-0 shadow-sm">
                                <div className="stats-icon mb-3 d-flex align-items-center justify-content-center mx-auto rounded-circle"
                                    style={{ width: '50px', mdWidth: '60px', height: '50px', mdHeight: '60px', background: `${stat.color}15`, color: stat.color, fontSize: '20px', mdFontSize: '24px' }}>
                                    <i className={`bi ${stat.icon}`}></i>
                                </div>
                                <h3 className="fw-bold mb-1" style={{ fontSize: '1.5rem', mdFontSize: '2rem', color: 'var(--heading-color)' }}>{stat.value}</h3>
                                <p className="text-muted fw-medium mb-0" style={{ fontSize: '12px', mdFontSize: '14px', letterSpacing: '0.5px' }}>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .stats-box {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.03) !important;
                }
                .stats-box:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important;
                }
                .stats-icon {
                    transition: all 0.3s ease;
                }
                .stats-box:hover .stats-icon {
                    transform: scale(1.1);
                    background: var(--accent-color) !important;
                    color: #ffffff !important;
                }
            `}</style>
        </section>
    );
};

export default StatsSection;
