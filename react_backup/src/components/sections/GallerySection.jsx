import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const GallerySection = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        API.apiFetch(API.buildUrl(API.endpoints.gallery))
            .then(res => {
                if (!res.ok) throw new Error('Failed to load gallery');
                return res.json();
            })
            .then(data => {
                if (!isMounted) return;
                const list = Array.isArray(data) ? data : (data.results || []);
                setImages(list.slice(0, 6));
            })
            .catch(() => {
                if (isMounted) setImages([]);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.home-gallery-lightbox',
            touchNavigation: true,
            loop: true,
            zoomable: true
        });

        return () => {
            lightbox.destroy();
        };
    }, [images]);

    return (
        <section id="gallery-preview" className="home-gallery-section section py-5 position-relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="gallery-bg-glow"></div>

            <div className="container position-relative z-1" data-aos="fade-up">
                {/* Header */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end text-center text-md-start mb-4 mb-md-5">
                    <div>
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill gallery-pill mb-3 mx-auto mx-md-0">
                            <span className="pill-dot"></span>
                            <span className="fw-semibold text-uppercase tracking-wider small">Visual Journey</span>
                        </div>
                        <h2 className="fw-bold display-6 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                            Captured Moments
                        </h2>
                        <p className="text-muted mb-0" style={{ maxWidth: '580px', fontSize: '1.025rem' }}>
                            A visual showcase of state gatherings, student workshops, and inspirational milestones across Kerala.
                        </p>
                    </div>

                    <div className="mt-3 mt-md-0 w-100 w-md-auto" style={{ maxWidth: '240px' }}>
                        <Link 
                            to="/gallery" 
                            className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 shadow-sm gallery-cta-btn w-100 w-md-auto"
                        >
                            <span>View All Photos</span>
                            <i className="bi bi-arrow-right transition-transform"></i>
                        </Link>
                    </div>
                </div>

                {/* Gallery Cards Grid (Pure imagery, NO text overlays) */}
                {loading ? (
                    <div className="row g-3 g-md-4">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div className="col-6 col-md-6 col-lg-4" key={n}>
                                <div className="skeleton-card rounded-4"></div>
                            </div>
                        ))}
                    </div>
                ) : images.length === 0 ? (
                    <div className="row g-3 g-md-4">
                        <div className="col-12 text-center py-5">
                            <i className="bi bi-images text-muted fs-1 d-block mb-2"></i>
                            <h5 className="text-muted fw-bold">No photos currently available</h5>
                            <p className="text-muted small mb-0">New event photographs will appear here shortly.</p>
                        </div>
                    </div>
                ) : (
                    <div className="row g-3 g-md-4">
                        {images.map((item, index) => {
                            const rawSrc = typeof item === 'string' ? item : (item.url || item.image || '');
                            const imageSrc = rawSrc.startsWith('http')
                                ? rawSrc
                                : (rawSrc.startsWith('/assets/') ? rawSrc : API.buildUrl(rawSrc));

                            return (
                                <div 
                                    className="col-6 col-md-6 col-lg-4" 
                                    key={item.id || index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                >
                                    <a
                                        href={imageSrc}
                                        className="home-gallery-lightbox gallery-card d-block rounded-4 overflow-hidden position-relative shadow-sm text-decoration-none"
                                        data-gallery="home-gallery"
                                    >
                                        {/* Card Image */}
                                        <div className="gallery-img-wrapper">
                                            <img
                                                src={imageSrc}
                                                alt={`Gallery moment ${index + 1}`}
                                                className="img-fluid w-100 h-100 gallery-img"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Clean Hover Overlay with Centered Zoom Icon */}
                                        <div className="gallery-card-overlay d-flex align-items-center justify-content-center">
                                            <div className="zoom-circle-btn shadow-lg">
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Bottom interactive invitation strip */}
                <div className="mt-4 mt-md-5 p-3 p-md-4 rounded-4 gallery-bottom-strip d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 shadow-sm border" data-aos="fade-up" data-aos-delay="200">
                    <div className="d-flex flex-column flex-sm-row align-items-center gap-3 text-center text-sm-start">
                        <div className="strip-icon-box rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                            <i className="bi bi-camera-reels text-primary fs-4"></i>
                        </div>
                        <div>
                            <h6 className="fw-bold mb-1" style={{ color: 'var(--heading-color)' }}>Looking for more memories?</h6>
                            <p className="text-muted mb-0 small">Explore our extensive archive covering statewide conferences, campaigns, and campus events.</p>
                        </div>
                    </div>
                    <Link to="/gallery" className="btn btn-primary rounded-pill px-4 py-2 flex-shrink-0 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 gallery-browse-btn">
                        <span>Browse Archive</span>
                        <i className="bi bi-chevron-right"></i>
                    </Link>
                </div>
            </div>

            {/* Custom scoped styles */}
            <style>{`
                .home-gallery-section {
                    background: linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, rgba(255, 255, 255, 1) 100%);
                }
                .gallery-bg-glow {
                    position: absolute;
                    top: -100px;
                    right: -100px;
                    width: 450px;
                    height: 450px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(13, 131, 253, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                }
                .gallery-pill {
                    background: rgba(13, 131, 253, 0.08);
                    color: var(--accent-color, #0d83fd);
                    border: 1px solid rgba(13, 131, 253, 0.2);
                    width: fit-content;
                }
                .pill-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: var(--accent-color, #0d83fd);
                    box-shadow: 0 0 8px var(--accent-color, #0d83fd);
                    display: inline-block;
                }
                .gallery-cta-btn:hover .bi-arrow-right {
                    transform: translateX(4px);
                }
                .gallery-card {
                    background: #f1f5f9;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                }
                .gallery-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 20px 35px -10px rgba(13, 131, 253, 0.2) !important;
                    border-color: rgba(13, 131, 253, 0.3);
                }
                .gallery-img-wrapper {
                    height: 260px;
                    overflow: hidden;
                    position: relative;
                    background: #f1f5f9;
                }
                .gallery-img {
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    display: block;
                }
                .gallery-card:hover .gallery-img {
                    transform: scale(1.07);
                }
                .gallery-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.35);
                    backdrop-filter: blur(1.5px);
                    -webkit-backdrop-filter: blur(1.5px);
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }
                .gallery-card:hover .gallery-card-overlay {
                    opacity: 1;
                }
                .zoom-circle-btn {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.95);
                    color: var(--accent-color, #0d83fd);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    transform: scale(0.85);
                }
                .gallery-card:hover .zoom-circle-btn {
                    transform: scale(1);
                }
                .zoom-circle-btn:hover {
                    background: var(--accent-color, #0d83fd);
                    color: #ffffff;
                    transform: scale(1.1);
                }
                .skeleton-card {
                    height: 260px;
                    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .gallery-bottom-strip {
                    background: #ffffff;
                    border-color: rgba(0, 0, 0, 0.06) !important;
                }
                .strip-icon-box {
                    width: 52px;
                    height: 52px;
                    background: rgba(13, 131, 253, 0.08);
                }
                @media (max-width: 576px) {
                    .gallery-img-wrapper, .skeleton-card {
                        height: 160px;
                    }
                    .gallery-cta-btn, .gallery-browse-btn {
                        width: 100%;
                        justify-content: center;
                    }
                    .zoom-circle-btn {
                        width: 38px;
                        height: 38px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default GallerySection;
