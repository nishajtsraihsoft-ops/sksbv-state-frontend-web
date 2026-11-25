import React from 'react';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: "bi-geo-alt",
            title: "Our Office",
            lines: ["SKSBV, Samasthalayam", "Chelari, Thenhippalam P.O", "PIN: 673636"],
            color: "#0d83fd"
        },
        {
            icon: "bi-telephone",
            title: "Phone Number",
            lines: ["+91 8714608987"],
            color: "#10b981"
        },
        {
            icon: "bi-envelope",
            title: "Email Address",
            lines: ["sksbvstate@gmail.com"],
            color: "#f59e0b"
        }
    ];

    return (
        <section id="contact" className="contact-redesign section py-4 py-md-5 light-background">
            <div className="container section-title text-center mb-4 mb-md-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Contact Us</h2>
                <p className="text-muted mx-auto px-3" style={{ maxWidth: '600px' }}>Get in touch with us for more information or any queries regarding SKSBV activities.</p>
            </div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="row g-3 g-md-4">
                            {contactInfo.map((info, idx) => (
                                <div className="col-12" key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                                    <div className="contact-card p-3 p-md-4 rounded-4 shadow-sm d-flex align-items-center align-items-sm-start transition-all border-0 bg-white">
                                        <div className="contact-icon me-3 d-flex align-items-center justify-content-center rounded-3 shadow-sm flex-shrink-0"
                                            style={{ width: '45px', height: '45px', background: `${info.color}15`, color: info.color, fontSize: '20px' }}>
                                            <i className={`bi ${info.icon}`}></i>
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="fw-bold mb-1 mb-sm-2 h6" style={{ color: 'var(--heading-color)' }}>{info.title}</h4>
                                            {info.lines.map((line, lidx) => (
                                                <p className="text-muted mb-0" key={lidx} style={{ fontSize: '14px', lineHeight: '1.5', wordBreak: 'break-word' }}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="400">
                        <div className="form-wrapper p-3 p-sm-4 p-md-5 rounded-4 shadow-sm bg-white border-0 h-100">
                            <h3 className="fw-bold mb-3 mb-md-4 h4" style={{ color: 'var(--heading-color)' }}>Send us a Message</h3>
                            <form className="contact-form-modern">
                                <div className="row gy-3 gy-md-4">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" id="message" placeholder="Message" style={{ height: '140px' }} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center text-md-start">
                                        <button type="submit" className="btn btn-primary px-4 px-md-5 py-3 rounded-pill fw-bold shadow-sm transition-all hover-lift w-100 w-sm-auto">
                                            Send Message <i className="bi bi-send ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-card:hover {
                    transform: translateX(6px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.06) !important;
                }
                .form-control {
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 12px !important;
                    padding: 1rem 0.75rem;
                }
                .form-control:focus {
                    box-shadow: 0 0 0 4px rgba(13, 131, 253, 0.1);
                    border-color: #0d83fd;
                }
                .hover-lift:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(13, 131, 253, 0.2) !important;
                }
            `}</style>
        </section>
    );
};

export default ContactSection;
