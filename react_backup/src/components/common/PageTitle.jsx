import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, current, img }) => {
    return (
        <div className="page-title light-background py-4 py-md-5" style={{ marginTop: '70px', background: 'linear-gradient(180deg, #f3f9ff 0%, #ffffff 100%)' }}>
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center px-2">
                    {img && (
                        <div className="d-flex flex-column align-items-center mb-3 animate__animated animate__fadeIn">
                            <div className="logo-wrapper shadow-lg mb-3" style={{ width: 'clamp(120px, 20vw, 180px)', height: 'clamp(120px, 20vw, 180px)', borderRadius: '50%', overflow: 'hidden', border: '4px solid #0d83fd', background: 'white', padding: '12px' }}>
                                <img
                                    src={img}
                                    alt="Logo"
                                    className="img-fluid h-100 w-100 object-fit-contain"
                                />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-1 text-center text-uppercase">
                                <h2 className="mb-0" style={{ fontFamily: "Caprasimo, serif", color: "#012970", fontSize: "clamp(20px, 5vw, 28px)", lineHeight: "1" }}>SKSBV</h2>
                                <span style={{ fontSize: "clamp(12px, 3vw, 16px)", fontWeight: "700", letterSpacing: "2px", color: "#0d83fd", lineHeight: "1" }}>STATE</span>
                            </div>
                        </div>
                    )}
                    <h1 className="fw-bold mb-2 mb-md-3" style={{ color: '#012970', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', wordBreak: 'break-word' }}>{title}</h1>
                    <nav className="breadcrumbs h-auto">
                        <ol className="breadcrumb mb-0 justify-content-center flex-wrap" style={{ listStyle: 'none', padding: 0 }}>
                            <li className="breadcrumb-item"><Link to="/" style={{ color: '#0d83fd', textDecoration: 'none' }}>Home</Link></li>
                            <li className="breadcrumb-item active ms-2" style={{ color: '#6c757d' }}> / {current}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
