import React, { useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Gallery = () => {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  useEffect(() => {
    API.apiFetch(API.buildUrl(API.endpoints.gallery))
      .then((r) => r.json())
      .then((data) =>
        setImages(Array.isArray(data) ? data : data.results || [])
      )
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="main">
        <PageTitle title="Gallery" current="Gallery" />
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading…</span>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main">
        <PageTitle title="Gallery" current="Gallery" />
        <div className="container py-5 text-center text-danger">
          Error: {error}
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <PageTitle title="Gallery" current="Gallery" />

      <section id="gallery" className="gallery section">
        <div className="container" data-aos="fade-up">
          <div className="gallery-grid">
            {images.map((item, index) => {
              const src =
                typeof item === 'string'
                  ? item
                  : item.url || item.image || '';

              return (
                <div className="gallery-item" key={index}>
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x300?text=Image+${index + 1}`;
                    }}
                  />

                  <div className="gallery-overlay">
                    <a
                      href={src}
                      className="glightbox zoom-btn"
                      title={`Gallery Image ${index + 1}`}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .gallery-item img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: 0.4s ease;
          display: block;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15);
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 110, 253, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .zoom-btn:hover {
          background: #fff;
          color: #0d6efd;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .gallery-item img {
            height: 200px;
          }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-item img {
            height: 160px;
          }
        }
      `}</style>
    </main>
  );
};

export default Gallery;