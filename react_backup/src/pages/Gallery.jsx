import React, { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    API.apiFetch(API.buildUrl(API.endpoints.gallery))
      .then((r) => r.json())
      .then((data) => {
        if (!isMounted) return;
        setImages(Array.isArray(data) ? data : data.results || []);
      })
      .catch((e) => {
        if (isMounted) setError(e.toString());
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.full-gallery-lightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true
    });

    return () => {
      lightbox.destroy();
    };
  }, [images]);

  return (
    <main className="main">
      <PageTitle title="State Photo Archive" current="Gallery" />

      <section id="gallery" className="gallery-page-section py-5">
        <div className="container" data-aos="fade-up">
          {/* Top Info Banner */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 pb-2 border-bottom">
            <div className="mb-2 mb-sm-0 text-center text-sm-start">
              <span className="badge-pill-modern mb-2">
                <span className="badge-pill-dot"></span>
                <span>Visual Chronicles</span>
              </span>
              <h3 className="h4 fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>
                Official Event Photography
              </h3>
            </div>
            {!loading && (
              <span className="text-muted small fw-medium">
                Showing {images.length} Captured Moments
              </span>
            )}
          </div>

          {loading ? (
            <div className="row g-3 g-md-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                <div className="col-6 col-md-4 col-lg-3" key={n}>
                  <div className="gallery-skeleton-card rounded-4"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-5">
              <div className="alert alert-danger d-inline-block px-4 py-3 rounded-4">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>Failed to load gallery photos: {error}
              </div>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-5">
              <div className="empty-gallery-icon mb-3 mx-auto">
                <i className="bi bi-images text-muted fs-1"></i>
              </div>
              <h5 className="text-muted fw-bold">No photos currently available</h5>
              <p className="text-muted small">New event photographs will appear here shortly.</p>
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {images.map((item, index) => {
                const rawSrc = typeof item === 'string' ? item : (item.url || item.image || '');
                const src = rawSrc.startsWith('http')
                  ? rawSrc
                  : (rawSrc.startsWith('/assets/') ? rawSrc : API.buildUrl(rawSrc));

                return (
                  <div className="col-6 col-md-4 col-lg-3" key={item.id || index} data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
                    <a
                      href={src}
                      className="full-gallery-lightbox gallery-item-card d-block rounded-4 overflow-hidden position-relative shadow-sm text-decoration-none"
                      data-gallery="state-gallery"
                    >
                      {/* Image */}
                      <div className="gallery-photo-wrapper">
                        <img
                          src={src}
                          alt={`Gallery moment ${index + 1}`}
                          className="img-fluid w-100 h-100 photo-img"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80`;
                          }}
                        />
                      </div>

                      {/* Clean Hover Overlay with Centered Zoom Icon (No text) */}
                      <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div className="zoom-circle-action shadow-lg">
                          <i className="bi bi-arrows-fullscreen"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .gallery-page-section {
          background: #fafcff;
          min-height: 70vh;
        }
        .gallery-item-card {
          background: #f1f5f9;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .gallery-item-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(13, 131, 253, 0.2) !important;
          border-color: rgba(13, 131, 253, 0.3);
        }
        .gallery-photo-wrapper {
          height: 220px;
          overflow: hidden;
          background: #f1f5f9;
        }
        @media (max-width: 576px) {
          .gallery-photo-wrapper {
            height: 160px;
          }
        }
        .photo-img {
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }
        .gallery-item-card:hover .photo-img {
          transform: scale(1.08);
        }
        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.35);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item-card:hover .gallery-hover-overlay {
          opacity: 1;
        }
        .zoom-circle-action {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          color: var(--accent-color, #0d83fd);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          transition: all 0.3s ease;
          transform: scale(0.85);
        }
        .gallery-item-card:hover .zoom-circle-action {
          transform: scale(1);
        }
        .zoom-circle-action:hover {
          background: var(--accent-color, #0d83fd);
          color: #ffffff;
          transform: scale(1.1);
        }
        .gallery-skeleton-card {
          height: 220px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
