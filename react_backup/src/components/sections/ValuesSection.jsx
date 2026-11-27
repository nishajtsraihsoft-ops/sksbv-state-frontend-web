import React from 'react';

const ValuesSection = () => {
    const values = [
        {
            title: "Islamic Foundation",
            icon: "bi-book-half",
            description: "Grounded in the authentic theological traditions of Ahlussunnah wal Jama'ah to protect identity and creed.",
            color: "#f59e0b"
        },
        {
            title: "Moral Discipline",
            icon: "bi-person-check-fill",
            description: "Nurturing self-control, honesty, and sublime character to build responsible leaders for society.",
            color: "#0d83fd"
        },
        {
            title: "Teacher-Student Bond",
            icon: "bi-people-fill",
            description: "Revering our spiritual and intellectual mentors, cultivating unshakeable bonds of respect and gratitude.",
            color: "#10b981"
        },
        {
            title: "Guarding Faith",
            icon: "bi-shield-lock-fill",
            description: "Equipping young minds to navigate contemporary challenges and safeguard spiritual resilience.",
            color: "#ef4444"
        }
    ];

    return (
        <section id="values" className="values-redesign section py-5 position-relative overflow-hidden">
            <div className="container position-relative z-1">
                <div className="section-title text-center mb-4 mb-md-5" data-aos="fade-up">
                    <span className="badge-pill-modern mb-3">
                        <span className="badge-pill-dot"></span>
                        <span>Our Core Ideals</span>
                    </span>
                    <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                        Guiding Pillars & Values
                    </h2>
                    <p className="text-muted mx-auto px-2" style={{ maxWidth: '620px', fontSize: '1.025rem' }}>
                        Upholding the timeless heritage of Samastha with a vibrant vision for student excellence.
                    </p>
                </div>

                <div className="row g-2 g-sm-3 g-md-4 justify-content-center">
                    {values.map((val, idx) => (
                        <div className="col-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={80 * (idx + 1)}>
                            <div className="value-card h-100 p-3 p-sm-4 rounded-4 shadow-sm border bg-white transition-all text-center d-flex flex-column align-items-center">
                                <div 
                                    className="value-icon mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{ width: '56px', height: '56px', background: `${val.color}15`, color: val.color }}
                                >
                                    <i className={`bi ${val.icon} fs-4`}></i>
                                </div>
                                <h4 className="fw-bold mb-2" style={{ color: 'var(--heading-color)', fontSize: '1.15rem' }}>{val.title}</h4>
                                <p className="text-muted mb-0 small" style={{ lineHeight: '1.6', fontSize: '0.92rem' }}>{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .values-redesign {
                    background: #fbfcfe;
                }
                .value-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .value-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 35px -10px rgba(13, 131, 253, 0.12) !important;
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
                .value-icon {
                    transition: transform 0.35s ease;
                }
                .value-card:hover .value-icon {
                    transform: scale(1.15) rotate(5deg);
                }
            `}</style>
        </section>
    );
};

export default ValuesSection;
