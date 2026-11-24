import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, current, img }) => {
    return (
        <div className="page-title light-background py-5" style={{ marginTop: '80px', background: 'linear-gradient(180deg, #f3f9ff 0%, #ffffff 100%)' }}>
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    {img && (
                        <div className="d-flex flex-column align-items-center mb-4 animate__animated animate__fadeIn">
                            <div className="logo-wrapper shadow-lg mb-3" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #0d83fd', background: 'white', padding: '15px' }}>
                                <img
                                    src={img}
                                    alt="Logo"
                                    className="img-fluid h-100 w-100 object-fit-contain"
                                />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2 text-center text-uppercase">
                                <h2 className="mb-0" style={{ fontFamily: "Caprasimo, serif", color: "#012970", fontSize: "28px", lineHeight: "1" }}>SKSBV</h2>
                                <span style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "2px", color: "#0d83fd", lineHeight: "1" }}>STATE</span>
                            </div>
                        </div>
                    )}
                    <h1 className="fw-bold mb-3" style={{ color: '#012970', fontSize: '2.5rem' }}>{title}</h1>
                    <nav className="breadcrumbs h-auto">
                        <ol className="breadcrumb mb-0 justify-content-center" style={{ listStyle: 'none', padding: 0 }}>
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
