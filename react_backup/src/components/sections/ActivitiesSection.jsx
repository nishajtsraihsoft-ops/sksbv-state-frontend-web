import React from 'react';

const ActivitiesSection = () => {
    const activities = [
        {
            title: "Educational Support",
            icon: "bi-mortarboard-fill",
            description: "Providing a platform for students to carry forward the organization's mission, ensuring both worldly and otherworldly progress.",
            color: "#0d83fd"
        },
        {
            title: "Arts & Literature",
            icon: "bi-palette-fill",
            description: "Promoting Islamic literature and arts through libraries and literary societies to nurture creative talents.",
            color: "#8b5cf6"
        },
        {
            title: "Parental Engagement",
            icon: "bi-house-heart-fill",
            description: "Educating parents alongside students, emphasizing the importance of securing a bright and faithful future for their children.",
            color: "#ec4899"
        },
        {
            title: "Awareness Campaigns",
            icon: "bi-eye-fill",
            description: "Conducting follow-up activities to identify student needs and support them against harmful new movements.",
            color: "#10b981"
        }
    ];

    return (
        <section id="activities" className="activities-redesign section py-5 light-background">
            <div className="container section-title text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Our Activities</h2>
                <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>Empowering students through comprehensive programs and support systems</p>
            </div>

            <div className="container">
                <div className="row g-4">
                    {activities.map((activity, idx) => (
                        <div className="col-lg-6" key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                            <div className="activity-card d-flex flex-column flex-sm-row p-4 rounded-4 shadow-sm border-0 transition-all h-100 text-center text-sm-start align-items-center align-items-sm-start">
                                <div className="activity-icon flex-shrink-0 mb-3 mb-sm-0 me-sm-4 d-flex align-items-center justify-content-center rounded-4 shadow-sm"
                                    style={{ width: '60px', height: '60px', background: `${activity.color}15`, color: activity.color, fontSize: '24px' }}>
                                    <i className={`bi ${activity.icon}`}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h3 className="fw-bold mb-2 h5" style={{ color: 'var(--heading-color)' }}>{activity.title}</h3>
                                    <p className="text-muted mb-0 px-2 px-sm-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>{activity.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .activity-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.03) !important;
                }
                .activity-card:hover {
                    box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
                    transform: translateY(-5px);
                }
                .activity-icon {
                    transition: all 0.3s ease;
                }
                .activity-card:hover .activity-icon {
                    background: var(--accent-color) !important;
                    color: #fff !important;
                    transform: rotate(10deg);
                }
            `}</style>
        </section>
    );
};

export default ActivitiesSection;
