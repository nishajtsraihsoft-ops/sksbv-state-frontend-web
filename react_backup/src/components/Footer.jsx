import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer" className="footer-modern position-relative text-white overflow-hidden">
            {/* Top gradient glow bar */}
            <div className="footer-top-accent"></div>

            {/* Ambient background glow elements */}
            <div className="footer-bg-glow glow-1"></div>
            <div className="footer-bg-glow glow-2"></div>

            <div className="container position-relative z-1 pt-5 pb-4">
                <div className="row gy-4 gx-lg-5 justify-content-between">
                    {/* Brand & Mission Column */}
                    <div className="col-lg-4 col-md-12 col-12 footer-brand-col">
                        <Link to="/" className="d-inline-flex align-items-center gap-3 mb-3 text-white text-decoration-none">
                            <div className="footer-logo-wrap p-2 rounded-3 bg-white shadow-sm">
                                <img src="/assets/img/logo.png" alt="SKSBV Logo" style={{ height: '42px', width: 'auto' }} />
                            </div>
                            <div>
                                <h2 className="mb-0 text-white" style={{ fontFamily: "Caprasimo, serif", fontSize: "1.6rem", letterSpacing: "0.5px", lineHeight: "1" }}>
                                    SKSBV <span style={{ color: '#38bdf8', fontSize: '1.25rem', fontFamily: 'var(--default-font)', fontWeight: '700' }}>STATE</span>
                                </h2>
                                <span className="small text-white-50 d-block mt-1" style={{ fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                                    Samastha Kerala Sunni Bala Vedi
                                </span>
                            </div>
                        </Link>

                        <div className="mb-3">
                            <span className="badge px-3 py-1 rounded-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                സമസ്ത കേരള സുന്നീ ബാല വേദി (സംസ്ഥാന കമ്മറ്റി)
                            </span>
                        </div>

                        <p className="text-white-50 mb-4" style={{ fontSize: '13.5px', lineHeight: '1.7', maxWidth: '380px' }}>
                            A pioneering platform for students studying in Samastha-run madrassas, fostering religious conviction, moral discipline, creative empowerment, and unity across the new generation.
                        </p>

                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <a href="https://whatsapp.com/channel/0029VadwoTe90x2oxUga3E3C" title="WhatsApp Channel" target="_blank" rel="noopener noreferrer" className="social-pill whatsapp">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/sksbvofficial?igsh=b3pkd3diajh6YW85" title="Instagram" target="_blank" rel="noopener noreferrer" className="social-pill instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://youtube.com/@balavedhi/" title="YouTube" target="_blank" rel="noopener noreferrer" className="social-pill youtube">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/sksbvofficial" title="Facebook" target="_blank" rel="noopener noreferrer" className="social-pill facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="mailto:sksbvstate@gmail.com" title="Email" className="social-pill email">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column: Useful Links */}
                    <div className="col-lg-2 col-sm-6 col-6">
                        <h5 className="footer-title">Explore</h5>
                        <ul className="footer-links-list list-unstyled mb-0">
                            <li><Link to="/"><i className="bi bi-chevron-right"></i> Home</Link></li>
                            <li><Link to="/about"><i className="bi bi-chevron-right"></i> About Us</Link></li>
                            <li><Link to="/about#milestones"><i className="bi bi-chevron-right"></i> Milestones</Link></li>
                            <li><Link to="/leaders"><i className="bi bi-chevron-right"></i> Leadership</Link></li>
                            <li><Link to="/gallery"><i className="bi bi-chevron-right"></i> Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Column: Specialized Wings */}
                    <div className="col-lg-2 col-sm-6 col-6">
                        <h5 className="footer-title">Wings</h5>
                        <ul className="footer-links-list list-unstyled mb-0">
                            <li><Link to="/wings#tech-admins"><i className="bi bi-chevron-right"></i> Tech Admins</Link></li>
                            <li><Link to="/wings#alif"><i className="bi bi-chevron-right"></i> Alif Wing</Link></li>
                            <li><Link to="/wings#adab"><i className="bi bi-chevron-right"></i> Adab Wing</Link></li>
                            <li><Link to="/wings#qidma"><i className="bi bi-chevron-right"></i> Qidma Wing</Link></li>
                            <li><Link to="/featured-events"><i className="bi bi-chevron-right"></i> Submit Activity</Link></li>
                        </ul>
                    </div>

                    {/* Column: Headquarters & Contact */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5 className="footer-title">Headquarters</h5>
                        <div className="footer-contact-block d-flex flex-column gap-3">
                            <div className="d-flex align-items-start gap-2 text-white-50" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                                <i className="bi bi-geo-alt-fill text-primary mt-1" style={{ fontSize: '16px' }}></i>
                                <span>Samasthalayam, Chelari, Thenhippalam P.O, Malappuram, Kerala - 673636</span>
                            </div>

                            <a href="tel:+918714608987" className="d-flex align-items-center gap-2 text-white-50 text-decoration-none contact-link" style={{ fontSize: '13px' }}>
                                <i className="bi bi-telephone-fill text-success" style={{ fontSize: '15px' }}></i>
                                <span>+91 8714608987</span>
                            </a>

                            <a href="mailto:sksbvstate@gmail.com" className="d-flex align-items-center gap-2 text-white-50 text-decoration-none contact-link" style={{ fontSize: '13px' }}>
                                <i className="bi bi-envelope-check-fill text-info" style={{ fontSize: '15px' }}></i>
                                <span>sksbvstate@gmail.com</span>
                            </a>

                            <div className="p-2 rounded-3 mt-1" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '12px' }}>
                                <div className="text-white fw-semibold mb-1"><i className="bi bi-clock-history me-1 text-warning"></i> Office Working Hours</div>
                                <div className="text-white-50">Mon – Sat: 9:30 AM – 5:00 PM</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subfooter Divider */}
                <div className="footer-divider my-4"></div>

                {/* Bottom Bar */}
                <div className="row align-items-center justify-content-between gy-3 small text-white-50">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">
                            © {new Date().getFullYear()} <strong className="text-white">SKSBV State Committee</strong>. All Rights Reserved.
                        </p>
                    </div>

                    <div className="col-md-6 text-center text-md-end d-flex align-items-center justify-content-center justify-content-md-end gap-3 flex-wrap">
                        <span>
                            Designed & Developed by <strong className="text-white">Muhammed Nishaj TS</strong>
                        </span>
                        <button 
                            type="button" 
                            onClick={scrollToTop} 
                            className="btn btn-sm btn-outline-light rounded-circle p-0 d-inline-flex align-items-center justify-content-center back-top-btn"
                            title="Scroll to Top"
                            aria-label="Scroll to top"
                        >
                            <i className="bi bi-arrow-up-short" style={{ fontSize: '20px' }}></i>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-modern {
                    background: linear-gradient(180deg, #07152b 0%, #030a16 100%);
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }

                .footer-top-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #0d83fd, #38bdf8, #10b981, #0d83fd);
                    background-size: 300% 100%;
                    animation: gradientMove 8s ease infinite;
                }

                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .footer-bg-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(120px);
                    pointer-events: none;
                    opacity: 0.12;
                }
                .glow-1 {
                    width: 380px;
                    height: 380px;
                    background: #0d83fd;
                    top: 10%;
                    left: -100px;
                }
                .glow-2 {
                    width: 320px;
                    height: 320px;
                    background: #38bdf8;
                    bottom: 0;
                    right: -50px;
                }

                .footer-title {
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 700;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                    position: relative;
                    padding-bottom: 8px;
                }

                .footer-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 28px;
                    height: 2px;
                    background: #38bdf8;
                    border-radius: 2px;
                }

                .footer-links-list li {
                    margin-bottom: 11px;
                }

                .footer-links-list a {
                    color: rgba(255, 255, 255, 0.65);
                    text-decoration: none;
                    font-size: 13.5px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.25s ease;
                }

                .footer-links-list a i {
                    font-size: 11px;
                    color: #38bdf8;
                    transition: transform 0.25s ease;
                }

                .footer-links-list a:hover {
                    color: #ffffff;
                    transform: translateX(4px);
                }

                .footer-links-list a:hover i {
                    transform: translateX(2px);
                }

                .social-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: #ffffff;
                    font-size: 15px;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .social-pill:hover {
                    transform: translateY(-3px) scale(1.08);
                    color: #ffffff;
                }

                .social-pill.whatsapp:hover { background: #25D366; border-color: #25D366; box-shadow: 0 8px 18px rgba(37, 211, 102, 0.35); }
                .social-pill.instagram:hover { background: #E4405F; border-color: #E4405F; box-shadow: 0 8px 18px rgba(228, 64, 95, 0.35); }
                .social-pill.youtube:hover { background: #FF0000; border-color: #FF0000; box-shadow: 0 8px 18px rgba(255, 0, 0, 0.35); }
                .social-pill.facebook:hover { background: #1877F2; border-color: #1877F2; box-shadow: 0 8px 18px rgba(24, 119, 242, 0.35); }
                .social-pill.email:hover { background: #0d83fd; border-color: #0d83fd; box-shadow: 0 8px 18px rgba(13, 131, 253, 0.35); }

                .contact-link {
                    transition: all 0.25s ease;
                }

                .contact-link:hover {
                    color: #ffffff !important;
                    transform: translateX(3px);
                }

                .footer-divider {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.08);
                }

                .back-top-btn {
                    width: 32px;
                    height: 32px;
                    border-color: rgba(255, 255, 255, 0.25);
                    transition: all 0.3s ease;
                }

                .back-top-btn:hover {
                    background: #0d83fd;
                    border-color: #0d83fd;
                    transform: translateY(-2px);
                }

                @media (max-width: 767px) {
                    .footer-brand-col {
                        text-align: left;
                    }
                    .footer-title {
                        font-size: 14px;
                        margin-bottom: 14px;
                    }
                    .footer-links-list a {
                        font-size: 13px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
