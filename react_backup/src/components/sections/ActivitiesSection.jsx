import React from 'react';

const ActivitiesSection = () => {
    const activities = [
        {
            title: "Educational Support & Training",
            icon: "bi-mortarboard-fill",
            description: "Empowering madrasa students with academic scholarships, skill development, moral camps, and guidance for holistic worldly and spiritual success.",
            color: "#0d83fd"
        },
        {
            title: "Arts, Culture & Literature",
            icon: "bi-palette-fill",
            description: "Nurturing creative talents through state-level Sahithyotsavs, literary societies, speech competitions, and library initiatives.",
            color: "#8b5cf6"
        },
        {
            title: "Parental Engagement & Family Guidance",
            icon: "bi-house-heart-fill",
            description: "Organizing state and district parenting workshops emphasizing moral home environments and encouraging children's holistic growth.",
            color: "#ec4899"
        },
        {
            title: "Community Outreach & Social Care",
            icon: "bi-shield-check",
            description: "Mobilizing youth for blood donation drives, relief missions, environmental awareness, and positive community engagement.",
            color: "#10b981"
        }
    ];

    return (
        <section id="activities" className="activities-redesign section py-5 light-background position-relative">
            <div className="container position-relative z-1">
                <div className="section-title text-center mb-4 mb-md-5" data-aos="fade-up">
                    <span className="badge-pill-modern mb-3">
                        <span className="badge-pill-dot"></span>
                        <span>Key Initiatives</span>
                    </span>
                    <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                        Our Core Activities
                    </h2>
                    <p className="text-muted mx-auto px-2" style={{ maxWidth: '600px', fontSize: '1.025rem' }}>
                        Empowering students across Kerala through comprehensive programs and support networks.
                    </p>
                </div>

                <div className="row g-3 g-md-4">
                    {activities.map((activity, idx) => (
                        <div className="col-12 col-lg-6" key={idx} data-aos="fade-up" data-aos-delay={90 * (idx + 1)}>
                            <div className="activity-card d-flex flex-column flex-sm-row p-3 p-md-4 rounded-4 shadow-sm border bg-white transition-all h-100 align-items-center align-items-sm-start text-center text-sm-start">
                                <div 
                                    className="activity-icon flex-shrink-0 mb-3 mb-sm-0 me-sm-3 d-flex align-items-center justify-content-center rounded-4 shadow-sm"
                                    style={{ width: '58px', height: '58px', background: `${activity.color}15`, color: activity.color, fontSize: '24px' }}
                                >
                                    <i className={`bi ${activity.icon}`}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h3 className="fw-bold mb-2" style={{ color: 'var(--heading-color)', fontSize: '1.15rem' }}>
                                        {activity.title}
                                    </h3>
                                    <p className="text-muted mb-0" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .activity-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .activity-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 18px 35px -8px rgba(13, 131, 253, 0.12) !important;
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
                .activity-icon {
                    transition: transform 0.35s ease, background-color 0.35s ease, color 0.35s ease;
                }
                .activity-card:hover .activity-icon {
                    transform: scale(1.1) rotate(6deg);
                }
            `}</style>
        </section>
    );
};

export default ActivitiesSection;
