import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, current, img }) => {
    return (
        <div className="page-title-refined position-relative overflow-hidden text-center">
            {/* Background ambient lighting */}
            <div className="title-bg-mesh"></div>

            <div className="container position-relative z-1 py-4 py-md-5">
                <div className="d-flex flex-column align-items-center">
                    {img && (
                        <div className="d-flex flex-column align-items-center mb-4">
                            <div className="logo-wrapper shadow-lg mb-3 rounded-circle p-3 bg-white border border-3 border-primary-subtle" style={{ width: '130px', height: '130px' }}>
                                <img
                                    src={img}
                                    alt="Logo"
                                    className="img-fluid h-100 w-100 object-fit-contain"
                                />
                            </div>
                            <div className="text-center text-uppercase">
                                <span className="d-block fw-bold" style={{ fontFamily: "Caprasimo, serif", color: "#012970", fontSize: "24px", lineHeight: "1" }}>SKSBV</span>
                                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "2px", color: "var(--accent-color, #0d83fd)" }}>STATE COMMITTEE</span>
                            </div>
                        </div>
                    )}

                    <h1 className="fw-bold mb-3 page-title-text" style={{ color: '#012970' }}>
                        {title}
                    </h1>

                    <nav className="breadcrumbs">
                        <ol className="breadcrumb mb-0 px-3 py-1 rounded-pill bg-white shadow-sm border d-inline-flex align-items-center" style={{ listStyle: 'none' }}>
                            <li className="breadcrumb-item">
                                <Link to="/" className="text-decoration-none fw-medium text-primary d-flex align-items-center gap-1">
                                    <i className="bi bi-house-door-fill small"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active ms-2 text-muted fw-normal" aria-current="page">
                                / {current}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <style>{`
                .page-title-refined {
                    margin-top: 80px;
                    background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
                    border-bottom: 1px solid rgba(13, 131, 253, 0.08);
                }
                .title-bg-mesh {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 10% 20%, rgba(13, 131, 253, 0.07) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
                    pointer-events: none;
                }
                .page-title-text {
                    font-size: clamp(1.85rem, 4.5vw, 2.75rem);
                    letter-spacing: -0.5px;
                }
                @media (max-width: 768px) {
                    .page-title-refined {
                        margin-top: 72px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PageTitle;
