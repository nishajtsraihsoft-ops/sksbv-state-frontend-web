import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let minTimer;
    let maxTimer;

    const hide = () => {
      setFading(true);
      setTimeout(() => setVisible(false), 350);
    };

    const onReady = () => {
      minTimer = setTimeout(hide, 350);
    };

    if (document.readyState === 'complete') {
      onReady();
    } else {
      window.addEventListener('load', onReady);
      maxTimer = setTimeout(hide, 1200);
    }

    return () => {
      window.removeEventListener('load', onReady);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="site-preloader"
      className={`site-preloader ${fading ? 'preloader-fade' : ''}`}
      aria-label="Loading website"
    >
      <div className="preloader-inner d-flex flex-column align-items-center justify-content-center">
        <div className="preloader-ring-wrap position-relative d-flex align-items-center justify-content-center mb-3">
          <div className="preloader-ring"></div>
          <img
            src="/assets/img/logo.png"
            alt="SKSBV Logo"
            className="preloader-logo"
          />
        </div>
        <span className="preloader-title">SKSBV STATE</span>
      </div>

      <style>{`
        .site-preloader {
          position: fixed;
          inset: 0;
          background: #ffffff;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.35s ease, visibility 0.35s ease;
        }
        .site-preloader.preloader-fade {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .preloader-ring-wrap {
          width: 76px;
          height: 76px;
        }
        .preloader-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid rgba(13, 131, 253, 0.15);
          border-top-color: #0d83fd;
          animation: preloaderSpin 0.8s linear infinite;
        }
        .preloader-logo {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }
        .preloader-title {
          font-family: 'Outfit', 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #012970;
        }
        @keyframes preloaderSpin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
