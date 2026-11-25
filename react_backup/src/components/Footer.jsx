import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-top">
                <div className="row gy-4 text-center text-md-start">
                    {/* Brand & About */}
                    <div className="col-lg-4 col-md-12 col-12 footer-about mb-4 mb-lg-0">
                        <Link to="/" className="logo d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src={`${import.meta.env.BASE_URL}assets/img/logo.png`} alt="SKSBV Logo" />
                            <div className="d-flex flex-column align-items-center align-items-md-start">
                                <h1 className="sitename mb-0" style={{ fontFamily: "Caprasimo, serif", lineHeight: "1", fontSize: "clamp(20px, 5vw, 24px)" }}>SKSBV</h1>
                                <span style={{ fontSize: "clamp(11px, 3vw, 14px)", fontWeight: "400", letterSpacing: "1px", lineHeight: "1", fontFamily: "var(--default-font)" }}>STATE</span>
                            </div>
                        </Link>
                        <p className="mt-3 mb-4 text-center text-md-start mx-auto mx-md-0 px-2 px-md-0" style={{ fontSize: '13.5px', lineHeight: '1.6', maxWidth: '400px' }}>
                            A platform for students studying in Samastha-run madrassas, fostering religious thoughts, discipline, and amity among the new generation.
                        </p>
                        <div className="social-links d-flex justify-content-center justify-content-md-start gap-2 flex-wrap">
                            <a href="mailto:sksbvstate@gmail.com" title="Email" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
                            <a href="https://www.facebook.com/sksbvofficial" title="Facebook" target="_blank" rel="noopener" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="https://whatsapp.com/channel/0029VadwoTe90x2oxUga3E3C" title="WhatsApp" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                            <a href="https://www.instagram.com/sksbvofficial?igsh=b3pkd3diajh6YW85" title="Instagram" target="_blank" rel="noopener" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="https://youtube.com/@balavedhi/" title="YouTube" target="_blank" rel="noopener" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    {/* Useful Links - 2 columns on mobile */}
                    <div className="col-lg-2 col-md-3 col-6 footer-links mb-3 mb-md-0">
                        <h4>Useful Links</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/wings">Wings</Link></li>
                            <li><Link to="/leaders">Leaders</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-lg-2 col-md-3 col-6 footer-links mb-3 mb-md-0">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/circulars">Circulars</Link></li>
                            <li><Link to="/notifications">Notifications</Link></li>
                            <li><Link to="/featured-events">Add Activity</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-lg-4 col-md-6 col-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p className="mb-2"><strong>Office:</strong> SKSBV, Samasthalayam, Chelari, Thenhippalam P.O, PIN: 673636</p>
                        <div className="contact-info-list">
                            <p className="mb-1"><strong>Phone:</strong> <a href="tel:+918714608987" className="text-decoration-none text-reset">+91 8714608987</a></p>
                            <p className="mb-0"><strong>Email:</strong> <a href="mailto:sksbvstate@gmail.com" className="text-decoration-none text-reset">sksbvstate@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4 pb-3">
                <p className="mb-1 footer-copyright-text">© <span>Copyright</span> <strong className="px-1 sitename">SKSBV State</strong> <span>All Rights Reserved</span></p>
                <div className="credits footer-credits">
                    Designed by <strong className="px-1 sitename">Muhammed Nishaj TS</strong>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
