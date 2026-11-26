import React from 'react';
import PageTitle from '../components/common/PageTitle';

const FeaturedEvents = () => {
    const linkActivity = "https://docs.google.com/forms/d/e/1FAIpQLScYsifMawA_uDCy1CvW8rHnxUI5_IInrGMovnyp4vvmeYkXzQ/viewform";
    const linkSuggestions = "https://docs.google.com/forms/d/e/1FAIpQLSeNzyxrBWlK2ZbcnZuPJOakjp1UvNlYhFUtMSwn1wR8Yq8P3w/viewform";

    const steps = [
        {
            num: "01",
            title: "Organize & Document",
            desc: "Gather high-resolution photos, date, location, and brief details of your unit or range program."
        },
        {
            num: "02",
            title: "Submit Details Online",
            desc: "Fill in the simple submission form with your unit details and program report."
        },
        {
            num: "03",
            title: "Statewide Feature",
            desc: "Approved activities will be published across state official social media handles and publications."
        }
    ];

    return (
        <main className="main">
            <PageTitle title="Activity & Suggestion Portal" current="Share Activity" />

            <section className="section py-5 activity-portal-section">
                <div className="container" data-aos="fade-up">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <span className="badge-pill-modern mb-3">
                            <span className="badge-pill-dot"></span>
                            <span>Student Community Network</span>
                        </span>
                        <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                            Submit Your Madrasa / Unit Activities
                        </h2>
                        <p className="text-muted mx-auto px-2" style={{ maxWidth: '640px', fontSize: '1.025rem' }}>
                            Every SKSBV unit across Kerala and beyond contributes to our collective impact. Share your achievements and creative ideas with the state leadership.
                        </p>
                    </div>

                    {/* 3 Step Visual Flow */}
                    <div className="row g-3 g-md-4 mb-5">
                        {steps.map((st, i) => (
                            <div className="col-12 col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="step-card p-4 rounded-4 shadow-sm border bg-white h-100 position-relative">
                                    <span className="step-number fw-bold text-primary mb-2 d-block">{st.num}</span>
                                    <h5 className="fw-bold mb-2" style={{ color: 'var(--heading-color)' }}>{st.title}</h5>
                                    <p className="text-muted mb-0 small" style={{ lineHeight: '1.6' }}>{st.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Action Cards */}
                    <div className="row g-4 justify-content-center">
                        {/* Card 1: Activity Submission */}
                        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right" data-aos-delay="150">
                            <div className="portal-action-card p-4 p-md-5 rounded-5 border bg-white shadow-sm h-100 d-flex flex-column justify-content-between transition-all hover-lift position-relative overflow-hidden">
                                <div className="card-top-glow bg-primary"></div>
                                <div>
                                    <div className="icon-badge-box rounded-4 mb-4 d-inline-flex align-items-center justify-content-center text-white bg-primary shadow-sm">
                                        <i className="bi bi-camera-fill fs-2"></i>
                                    </div>
                                    <h3 className="fw-bold mb-3 h4" style={{ color: 'var(--heading-color)' }}>
                                        Submit Your Activity
                                    </h3>
                                    <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.7' }}>
                                        Conducted a camp, rally, Sahithyotsav, blood drive, or awareness program? Submit photos and details for state archive inclusion.
                                    </p>
                                    <ul className="list-unstyled text-muted small mb-4">
                                        <li className="mb-2 d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Unit / Range / District level events</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Includes high-resolution photo uploads</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Quick 2-minute submission</span>
                                        </li>
                                    </ul>
                                </div>

                                <a
                                    href={linkActivity}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary rounded-pill py-3 px-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 w-100 text-decoration-none"
                                >
                                    <span>Add Activity Now</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Suggestions & Feedback */}
                        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left" data-aos-delay="200">
                            <div className="portal-action-card p-4 p-md-5 rounded-5 border bg-white shadow-sm h-100 d-flex flex-column justify-content-between transition-all hover-lift position-relative overflow-hidden">
                                <div className="card-top-glow" style={{ background: '#10b981' }}></div>
                                <div>
                                    <div className="icon-badge-box rounded-4 mb-4 d-inline-flex align-items-center justify-content-center text-white shadow-sm" style={{ background: '#10b981' }}>
                                        <i className="bi bi-chat-heart-fill fs-2"></i>
                                    </div>
                                    <h3 className="fw-bold mb-3 h4" style={{ color: 'var(--heading-color)' }}>
                                        Share Suggestions & Ideas
                                    </h3>
                                    <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.7' }}>
                                        Have an innovative idea for student empowerment, curriculum, or syllabus enrichment? Your voice helps shape future initiatives.
                                    </p>
                                    <ul className="list-unstyled text-muted small mb-4">
                                        <li className="mb-2 d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Open to students, ustadz & parents</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Feedback reviewed by State Leaders</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            <span>Confidential & supportive</span>
                                        </li>
                                    </ul>
                                </div>

                                <a
                                    href={linkSuggestions}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success rounded-pill py-3 px-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 w-100 text-decoration-none"
                                >
                                    <span>Send Your Feedback</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .activity-portal-section {
                    background: #f8fafc;
                    min-height: 70vh;
                }
                .step-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .step-number {
                    font-size: 1.5rem;
                    letter-spacing: -1px;
                }
                .portal-action-card {
                    border: 1px solid rgba(0, 0, 0, 0.06) !important;
                }
                .card-top-glow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                }
                .icon-badge-box {
                    width: 64px;
                    height: 64px;
                }
            `}</style>
        </main>
    );
};

export default FeaturedEvents;
