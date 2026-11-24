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

            <section className="section py-5 min-vh-50 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-3" style={{ color: '#012970' }}>How can we help you today?</h2>
                            <p className="text-muted">Choose an option below to submit your activity or share your valuable suggestions with us.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center g-4">
                        <div className="col-md-5">
                            <a
                                href={link1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="activity-card d-block p-5 text-decoration-none shadow-sm h-100 transition-all"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #0d6efd, #0b5ed7)', borderRadius: '15px', color: 'white', fontSize: '2rem' }}>
                                    <i className="bi bi-plus-circle-fill"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-3" style={{ color: '#012970' }}>Add Your Activity</h3>
                                <p className="text-muted mb-4">Share your latest events, achievements, and activities with the community.</p>
                                <span className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                                    Click to Add <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </a>
                        </div>

                        <div className="col-md-5">
                            <a
                                href={link2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="activity-card d-block p-5 text-decoration-none shadow-sm h-100 transition-all"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #198754, #157347)', borderRadius: '15px', color: 'white', fontSize: '2rem' }}>
                                    <i className="bi bi-chat-left-dots-fill"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-3" style={{ color: '#012970' }}>Share Your Suggestion</h3>
                                <p className="text-muted mb-4">We value your feedback. Let us know how we can improve and grow together.</p>
                                <span className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
                                    Share Suggestion <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FeaturedEvents;
