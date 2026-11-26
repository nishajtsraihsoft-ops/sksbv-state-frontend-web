import React, { useState } from 'react';

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const contactInfo = [
        {
            icon: "bi-geo-alt-fill",
            title: "State Head Office",
            lines: ["SKSBV, Samasthalayam", "Chelari, Thenhippalam P.O", "Malappuram, PIN: 673636"],
            color: "#0d83fd",
            link: "https://maps.google.com/?q=Samasthalayam+Chelari"
        },
        {
            icon: "bi-telephone-fill",
            title: "Helpline & Phone",
            lines: ["+91 8714608987"],
            color: "#10b981",
            link: "tel:+918714608987"
        },
        {
            icon: "bi-envelope-fill",
            title: "Official Email",
            lines: ["sksbvstate@gmail.com"],
            color: "#f59e0b",
            link: "mailto:sksbvstate@gmail.com"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <section id="contact" className="contact-redesign section py-5 light-background position-relative">
            <div className="container position-relative z-1" data-aos="fade-up">
                <div className="section-title text-center mb-4 mb-md-5">
                    <span className="badge-pill-modern mb-3">
                        <span className="badge-pill-dot"></span>
                        <span>Direct Communication</span>
                    </span>
                    <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                        Connect with SKSBV State
                    </h2>
                    <p className="text-muted mx-auto px-2" style={{ maxWidth: '600px', fontSize: '1.025rem' }}>
                        Have questions about affiliation, events, or state programs? Reach out to our central desk.
                    </p>
                </div>

                <div className="row g-4 align-items-stretch">
                    {/* Left Info Column */}
                    <div className="col-12 col-lg-5">
                        <div className="d-flex flex-column gap-3 h-100 justify-content-between">
                            {contactInfo.map((info, idx) => (
                                <a
                                    href={info.link}
                                    key={idx}
                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="contact-card p-3 p-md-4 rounded-4 shadow-sm d-flex align-items-center transition-all border bg-white text-decoration-none hover-lift"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 80}
                                >
                                    <div 
                                        className="contact-icon me-3 d-flex align-items-center justify-content-center rounded-4 shadow-sm flex-shrink-0"
                                        style={{ width: '52px', height: '52px', background: `${info.color}15`, color: info.color, fontSize: '22px' }}
                                    >
                                        <i className={`bi ${info.icon}`}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h4 className="fw-bold mb-1" style={{ color: 'var(--heading-color)', fontSize: '1.05rem' }}>
                                            {info.title}
                                        </h4>
                                        {info.lines.map((line, lidx) => (
                                            <p className="text-muted mb-0 small" key={lidx} style={{ lineHeight: '1.5' }}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                    <i className="bi bi-chevron-right text-muted small ms-2"></i>
                                </a>
                            ))}

                            {/* Office Hours Card */}
                            <div className="contact-card p-3 p-md-4 rounded-4 shadow-sm border bg-white mt-auto">
                                <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-bold small">
                                    <i className="bi bi-clock-history"></i>
                                    <span>OFFICE WORKING HOURS</span>
                                </div>
                                <p className="text-muted mb-0 small" style={{ lineHeight: '1.6' }}>
                                    Monday to Saturday: <strong>09:30 AM – 05:00 PM</strong><br />
                                    Closed on Sundays & Public / Madrasa Holidays.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-delay="200">
                        <div className="form-wrapper p-4 p-md-5 rounded-5 shadow-sm bg-white border h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h3 className="fw-bold mb-2 h4" style={{ color: 'var(--heading-color)' }}>
                                    Send us a Message
                                </h3>
                                <p className="text-muted small mb-4">
                                    Fill in your query and our office team will respond promptly.
                                </p>

                                {submitted && (
                                    <div className="alert alert-success d-flex align-items-center rounded-4 shadow-xs mb-4" role="alert">
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <div>
                                            Thank you! Your message has been received. We will get in touch with you shortly.
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form-modern">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control rounded-4" 
                                                    id="name" 
                                                    placeholder="Your Name" 
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required 
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="email" 
                                                    className="form-control rounded-4" 
                                                    id="email" 
                                                    placeholder="Your Email" 
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required 
                                                />
                                                <label htmlFor="email">Your Email Address</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control rounded-4" 
                                                    id="subject" 
                                                    placeholder="Subject" 
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    required 
                                                />
                                                <label htmlFor="subject">Subject / Topic</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea 
                                                    className="form-control rounded-4" 
                                                    id="message" 
                                                    placeholder="Message" 
                                                    style={{ height: '140px' }} 
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message">Your Message Details</label>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4 text-center text-sm-start">
                                            <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow-sm transition-all hover-lift w-100 w-sm-auto">
                                                <span>Send Message</span>
                                                <i className="bi bi-send-fill ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .contact-card:hover {
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
                .form-wrapper {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .form-control:focus {
                    border-color: var(--accent-color, #0d83fd);
                    box-shadow: 0 0 0 0.25rem rgba(13, 131, 253, 0.15);
                }
            `}</style>
        </section>
    );
};

export default ContactSection;
