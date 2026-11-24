import React from 'react';

const ValuesSection = () => {
    const values = [
        {
            title: "Islamic Foundation",
            icon: "bi-book-half",
            description: "Instilling the theological principles of Ahlussunnah wal Jama'ah to ensure students are grounded in traditional Sunni Islam.",
            color: "#f59e0b"
        },
        {
            title: "Moral Discipline",
            icon: "bi-person-check-fill",
            description: "Fostering a sense of discipline and good conduct, creating a generation with strong moral and cultural values.",
            color: "#0d83fd"
        },
        {
            title: "Teacher-Student Bond",
            icon: "bi-people-fill",
            description: "Strengthening the relationship between students and teachers, emphasizing respect and honoring mentors.",
            color: "#10b981"
        },
        {
            title: "Guarding Faith",
            icon: "bi-shield-lock-fill",
            description: "Cautioning students about the dangers of atheistic ideologies and deviant acts to protect their faith.",
            color: "#ef4444"
        }
    ];

    return (
        <section id="values" className="values-redesign section py-5">
            <div className="container section-title text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Our Core Values</h2>
                <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>Upholding the traditions of Samastha with a vision for the future</p>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {values.map((val, idx) => (
                        <div className="col-xl-3 col-md-6 col-sm-6" key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                            <div className="value-card h-100 p-4 rounded-4 shadow-sm border-0 transition-all text-center">
                                <div className="value-icon mb-4 d-flex align-items-center justify-content-center rounded-circle mx-auto"
                                    style={{ width: '50px', height: '50px', background: `${val.color}15`, color: val.color }}>
                                    <i className={`bi ${val.icon} fs-4`}></i>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ color: 'var(--heading-color)', fontSize: '1.2rem' }}>{val.title}</h4>
                                <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .value-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.03) !important;
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                }
                .value-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
                    background: #ffffff;
                }
                .value-icon {
                    transition: all 0.3s ease;
                }
                .value-card:hover .value-icon {
                    transform: scale(1.1);
                    background: color-mix(in srgb, var(--accent-color), white 80%);
                }
            `}</style>
        </section>
    );
};

export default ValuesSection;
