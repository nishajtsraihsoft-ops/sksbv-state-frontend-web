import React, { useState } from 'react';
import PageTitle from '../components/common/PageTitle';

const FeaturedEvents = () => {
    const link1 = "https://docs.google.com/forms/d/e/1FAIpQLScYsifMawA_uDCy1CvW8rHnxUI5_IInrGMovnyp4vvmeYkXzQ/viewform";
    const link2 = "https://docs.google.com/forms/d/e/1FAIpQLSeNzyxrBWlK2ZbcnZuPJOakjp1UvNlYhFUtMSwn1wR8Yq8P3w/viewform";

    return (
        <main className="main">
            <PageTitle
                title="Add Our Activity"
                current="Add Our Activity"
            />

            <section className="section py-4 py-md-5 min-vh-50 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-2 responsive-h2" style={{ color: '#012970' }}>How can we help you today?</h2>
                            <p className="text-muted px-2">Choose an option below to submit your activity or share your valuable suggestions with us.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center g-3 g-md-4">
                        <div className="col-12 col-md-6 col-lg-5">
                            <a
                                href={link1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="activity-card d-block p-4 p-md-5 text-decoration-none shadow-sm h-100 text-center"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <div className="icon-wrapper mb-3 mb-md-4 d-inline-flex align-items-center justify-content-center" 
                                    style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #0d6efd, #0b5ed7)', borderRadius: '16px', color: 'white', fontSize: '1.75rem' }}>
                                    <i className="bi bi-plus-circle-fill"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2 mb-md-3" style={{ color: '#012970' }}>Add Your Activity</h3>
                                <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>Share your latest events, achievements, and activities with the community.</p>
                                <span className="btn btn-primary px-4 py-2 rounded-pill fw-semibold w-100 w-sm-auto">
                                    Click to Add <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </a>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5">
                            <a
                                href={link2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="activity-card d-block p-4 p-md-5 text-decoration-none shadow-sm h-100 text-center"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <div className="icon-wrapper mb-3 mb-md-4 d-inline-flex align-items-center justify-content-center" 
                                    style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #198754, #157347)', borderRadius: '16px', color: 'white', fontSize: '1.75rem' }}>
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2 mb-md-3" style={{ color: '#012970' }}>Share Your Suggestion</h3>
                                <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>We value your feedback. Let us know how we can improve and grow together.</p>
                                <span className="btn btn-success px-4 py-2 rounded-pill fw-semibold w-100 w-sm-auto">
                                    Share Suggestion <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .activity-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
                }
                @media (max-width: 575px) {
                    .activity-card {
                        padding: 1.5rem !important;
                        border-radius: 16px !important;
                    }
                    .activity-card h3 {
                        font-size: 1.25rem !important;
                    }
                }
            `}</style>
        </main>
    );
};

export default FeaturedEvents;
