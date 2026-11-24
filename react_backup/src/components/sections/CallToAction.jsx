import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section id="call-to-action" className="cta-redesign section py-5 position-relative overflow-hidden">
            {/* Background Decoration */}
            <div className="cta-accent-1"></div>
            <div className="cta-accent-2"></div>

            <div className="container position-relative z-1" data-aos="zoom-in" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="cta-content p-5 rounded-5 shadow-lg border border-white border-opacity-10"
                            style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(15px)' }}>
                            <span className="badge rounded-pill px-3 py-2 bg-primary mb-4 fw-bold shadow-sm" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                                BE THE CHANGE
                            </span>
                            <h2 className="responsive-h1 fw-bold text-dark mb-4" style={{ letterSpacing: '-1px' }}>
                                Ready to Shape the <br className="d-block d-md-none" /> <span className="text-primary italic-font">Next Generation?</span>
                            </h2>
                            <p className="lead text-muted mb-5 px-lg-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Join Samastha Kerala Sunni Bala Vedi (SKSBV) today. Together, we can foster a righteous generation grounded in faith, discipline, and moral excellence.
                            </p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                                <Link to="/contact" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow-lg transition-all hover-scale">
                                    Join Our Mission <i className="bi bi-person-plus-fill ms-2"></i>
                                </Link>
                                <Link to="/about" className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold transition-all">
                                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .cta-redesign {
                    background: #ffffff;
                    padding: 100px 0;
                }
                .cta-accent-1 {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(13, 131, 253, 0.2) 0%, transparent 70%);
                    top: -250px;
                    left: -150px;
                    z-index: 0;
                }
                .cta-accent-2 {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
                    bottom: -200px;
                    right: -100px;
                    z-index: 0;
                }
                .italic-font {
                    font-style: italic;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px rgba(13, 131, 253, 0.3) !important;
                }
                
            `}</style>
        </section>
    );
};

export default CallToAction;
