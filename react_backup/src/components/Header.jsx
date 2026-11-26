import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [updatesDropdownOpen, setUpdatesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    closeMobileNav();
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setAboutDropdownOpen(false);
    setUpdatesDropdownOpen(false);
  };

  return (
    <>
      <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'header-scrolled shadow-sm' : ''}`}>
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          {/* Brand Logo */}
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none" onClick={closeMobileNav}>
            <div className="logo-img-box me-2">
              <img src="/assets/img/logo.png" alt="SKSBV Logo" className="img-fluid" />
            </div>
            <div className="d-flex flex-column">
              <span className="brand-title mb-0" style={{ fontFamily: "Caprasimo, serif", lineHeight: "1", fontSize: "clamp(18px, 4vw, 24px)", color: "#012970" }}>
                SKSBV
              </span>
              <span className="brand-subtitle" style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: "1.5px", color: "var(--accent-color, #0d83fd)", lineHeight: "1" }}>
                STATE COMMITTEE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu (Visible on xl and above) */}
          <nav id="navmenu" className="navmenu d-none d-xl-block">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  Home
                </NavLink>
              </li>

              {/* About Dropdown */}
              <li className="dropdown">
                <a href="#about-menu" onClick={(e) => e.preventDefault()}>
                  <span>About</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/about">
                      <i className="bi bi-book me-2 text-primary"></i>About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wings">
                      <i className="bi bi-layers me-2 text-primary"></i>Wings
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/leaders" className={({ isActive }) => isActive ? "active" : ""}>
                  Leaders
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
                  Gallery
                </NavLink>
              </li>

              {/* Updates Dropdown */}
              <li className="dropdown">
                <a href="#updates-menu" onClick={(e) => e.preventDefault()}>
                  <span>Updates</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/circulars">
                      <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>Circulars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/notifications">
                      <i className="bi bi-megaphone me-2 text-warning"></i>Notifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/featured-events">
                      <i className="bi bi-plus-circle me-2 text-success"></i>Add Your Activity
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA */}
          <div className="d-none d-xl-flex align-items-center gap-2">
            {user ? (
              user.role === 'admin' ? (
                <>
                  <NavLink to="/admin" className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1">
                    <i className="bi bi-speedometer2 me-1"></i>Admin
                  </NavLink>
                  <button className="btn btn-sm btn-danger rounded-pill px-3 py-1" onClick={() => { logout(); navigate('/'); }}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/tenant" className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1">
                    Tenant
                  </NavLink>
                  <button className="btn btn-sm btn-danger rounded-pill px-3 py-1" onClick={() => { logout(); navigate('/'); }}>
                    Logout
                  </button>
                </>
              )
            ) : (
              <Link to="/featured-events" className="btn btn-getstarted rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm text-decoration-none">
                <span>Share Activity</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            )}
          </div>

          {/* Creative Animated Mobile Toggle Button (Guaranteed Far Right Side of Header) */}
          <button
            type="button"
            className={`mobile-nav-toggle-btn d-xl-none ms-auto ${isMobileNavOpen ? 'active' : ''}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileNavOpen}
            style={{ order: 10, marginLeft: 'auto' }}
          >
            <span className="hamburger-box">
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </span>
          </button>

        </div>
      </header>

      {/* Backdrop overlay for outside click to dismiss */}
      <div 
        className={`mobile-nav-backdrop ${isMobileNavOpen ? 'show' : ''}`}
        onClick={closeMobileNav}
        aria-hidden={!isMobileNavOpen}
      />

      {/* Right-Side Content-Height Mobile Navigation Card */}
      <div 
        className={`mobile-nav-right-card ${isMobileNavOpen ? 'card-open' : ''} ${scrolled ? 'scrolled-top' : ''}`}
        aria-label="Mobile Navigation"
      >
        {/* Compact Header with Logo & Close button */}
        <div className="card-nav-header d-flex align-items-center justify-content-between p-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <img src="/assets/img/logo.png" alt="SKSBV" style={{ height: '30px', width: 'auto' }} />
            <div className="lh-1">
              <span className="fw-bold d-block text-dark" style={{ fontFamily: "Caprasimo, serif", fontSize: '15px' }}>
                SKSBV <span style={{ color: '#0d83fd' }}>STATE</span>
              </span>
              <span className="text-muted" style={{ fontSize: '9px', fontWeight: '600' }}>
                സുന്നീ ബാല വേദി
              </span>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-sm btn-light rounded-circle card-close-btn d-flex align-items-center justify-content-center"
            onClick={closeMobileNav}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Navigation Body - Height dynamically scales based on content */}
        <div className="card-nav-body p-2">
          <ul className="card-nav-list list-unstyled mb-0">
            <li style={{ '--item-index': 1 }}>
              <NavLink to="/" className={({ isActive }) => `card-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-primary"><i className="bi bi-house-door-fill"></i></span>
                  <span className="nav-label">Home</span>
                </div>
                <i className="bi bi-chevron-right link-arrow"></i>
              </NavLink>
            </li>

            {/* About Dropdown Accordion */}
            <li style={{ '--item-index': 2 }}>
              <button 
                type="button" 
                className={`card-nav-link card-accordion-btn w-100 ${aboutDropdownOpen ? 'open' : ''}`}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                aria-expanded={aboutDropdownOpen}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-info"><i className="bi bi-info-circle-fill"></i></span>
                  <span className="nav-label">About</span>
                </div>
                <i className={`bi bi-chevron-down accordion-arrow ${aboutDropdownOpen ? 'rotated' : ''}`}></i>
              </button>

              <div className={`card-submenu ${aboutDropdownOpen ? 'submenu-open' : ''}`}>
                <NavLink to="/about" className={({ isActive }) => `card-sublink ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                  <i className="bi bi-book-half text-primary"></i>
                  <span>About Us & History</span>
                </NavLink>
                <NavLink to="/wings" className={({ isActive }) => `card-sublink ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                  <i className="bi bi-layers-fill text-info"></i>
                  <span>Specialized Wings</span>
                </NavLink>
              </div>
            </li>

            <li style={{ '--item-index': 3 }}>
              <NavLink to="/leaders" className={({ isActive }) => `card-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-success"><i className="bi bi-people-fill"></i></span>
                  <span className="nav-label">Leadership</span>
                </div>
                <i className="bi bi-chevron-right link-arrow"></i>
              </NavLink>
            </li>

            <li style={{ '--item-index': 4 }}>
              <NavLink to="/gallery" className={({ isActive }) => `card-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-warning"><i className="bi bi-images"></i></span>
                  <span className="nav-label">Gallery</span>
                </div>
                <i className="bi bi-chevron-right link-arrow"></i>
              </NavLink>
            </li>

            {/* Updates Dropdown Accordion */}
            <li style={{ '--item-index': 5 }}>
              <button 
                type="button" 
                className={`card-nav-link card-accordion-btn w-100 ${updatesDropdownOpen ? 'open' : ''}`}
                onClick={() => setUpdatesDropdownOpen(!updatesDropdownOpen)}
                aria-expanded={updatesDropdownOpen}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-danger"><i className="bi bi-bell-fill"></i></span>
                  <span className="nav-label">Updates</span>
                </div>
                <i className={`bi bi-chevron-down accordion-arrow ${updatesDropdownOpen ? 'rotated' : ''}`}></i>
              </button>

              <div className={`card-submenu ${updatesDropdownOpen ? 'submenu-open' : ''}`}>
                <NavLink to="/circulars" className={({ isActive }) => `card-sublink ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                  <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
                  <span>Circulars</span>
                </NavLink>
                <NavLink to="/notifications" className={({ isActive }) => `card-sublink ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                  <i className="bi bi-megaphone-fill text-warning"></i>
                  <span>Notifications</span>
                </NavLink>
                <NavLink to="/featured-events" className={({ isActive }) => `card-sublink ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                  <i className="bi bi-plus-circle-fill text-success"></i>
                  <span>Add Your Activity</span>
                </NavLink>
              </div>
            </li>

            <li style={{ '--item-index': 6 }}>
              <NavLink to="/contact" className={({ isActive }) => `card-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileNav}>
                <div className="d-flex align-items-center gap-2">
                  <span className="nav-icon-pill text-primary"><i className="bi bi-envelope-fill"></i></span>
                  <span className="nav-label">Contact</span>
                </div>
                <i className="bi bi-chevron-right link-arrow"></i>
              </NavLink>
            </li>

            {user && (
              <li className="mt-2 pt-2 border-top" style={{ '--item-index': 7 }}>
                <NavLink 
                  to={user.role === 'admin' ? '/admin' : '/tenant'} 
                  className={({ isActive }) => `card-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="nav-icon-pill text-purple"><i className="bi bi-speedometer2"></i></span>
                    <span className="nav-label">{user.role === 'admin' ? 'Admin' : 'Tenant Portal'}</span>
                  </div>
                  <i className="bi bi-chevron-right link-arrow"></i>
                </NavLink>
                <button 
                  className="btn btn-outline-danger btn-sm w-100 rounded-pill py-1 mt-1 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => { logout(); closeMobileNav(); navigate('/'); }}
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </button>
              </li>
            )}
          </ul>

          {/* Action CTA & Quick Connect */}
          <div className="card-nav-footer mt-2 pt-2 border-top">
            <Link 
              to="/featured-events" 
              className="btn btn-primary btn-sm w-100 py-2 rounded-pill fw-semibold shadow-sm d-flex align-items-center justify-content-center gap-2 mb-2"
              onClick={closeMobileNav}
            >
              <i className="bi bi-send-fill"></i>
              <span>Share Unit Activity</span>
            </Link>

            <div className="d-flex justify-content-center align-items-center gap-2 pt-1 pb-1">
              <a href="https://whatsapp.com/channel/0029VadwoTe90x2oxUga3E3C" target="_blank" rel="noopener noreferrer" className="card-social-icon whatsapp" title="WhatsApp Channel">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/sksbvofficial?igsh=b3pkd3diajh6YW85" target="_blank" rel="noopener noreferrer" className="card-social-icon instagram" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com/@balavedhi/" target="_blank" rel="noopener noreferrer" className="card-social-icon youtube" title="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://www.facebook.com/sksbvofficial" target="_blank" rel="noopener noreferrer" className="card-social-icon facebook" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="tel:+918714608987" className="card-social-icon phone" title="Call Headquarters">
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          height: 76px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
        }
        .header-scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07) !important;
          height: 68px;
        }
        .logo-img-box {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img-box img {
          max-height: 42px;
          width: auto;
        }
        .btn-getstarted {
          background: linear-gradient(135deg, var(--accent-color, #0d83fd) 0%, #0077b6 100%);
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.3px;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-getstarted:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(13, 131, 253, 0.3);
        }

        /* --- Creative Animated Hamburger Toggle (Right Side) --- */
        .mobile-nav-toggle-btn {
          order: 10 !important;
          margin-left: auto !important;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(13, 131, 253, 0.2);
          background: rgba(13, 131, 253, 0.06);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0;
          outline: none;
        }
        .mobile-nav-toggle-btn:hover {
          background: rgba(13, 131, 253, 0.12);
          border-color: rgba(13, 131, 253, 0.35);
          transform: scale(1.05);
        }
        .hamburger-box {
          width: 20px;
          height: 15px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hamburger-line {
          display: block;
          width: 100%;
          height: 2.2px;
          background: #012970;
          border-radius: 4px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        .mobile-nav-toggle-btn.active {
          background: #0d83fd;
          border-color: #0d83fd;
          box-shadow: 0 4px 15px rgba(13, 131, 253, 0.3);
        }
        .mobile-nav-toggle-btn.active .hamburger-line {
          background: #ffffff;
        }
        .mobile-nav-toggle-btn.active .line-1 {
          transform: translateY(6.4px) rotate(45deg);
        }
        .mobile-nav-toggle-btn.active .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .mobile-nav-toggle-btn.active .line-3 {
          transform: translateY(-6.4px) rotate(-45deg);
        }

        /* --- Backdrop Overlay (Gentle blur dismiss) --- */
        .mobile-nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 20, 38, 0.35);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1040;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .mobile-nav-backdrop.show {
          opacity: 1;
          visibility: visible;
        }

        /* --- Right-Side Content-Based Height Card --- */
        .mobile-nav-right-card {
          position: fixed;
          top: 82px;
          right: 14px;
          width: clamp(270px, calc(100vw - 28px), 320px);
          height: auto;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(13, 131, 253, 0.15);
          box-shadow: 0 15px 40px -5px rgba(1, 41, 112, 0.18), 0 0 1px rgba(0, 0, 0, 0.1);
          z-index: 1050;
          transform: translateY(-12px) scale(0.95);
          opacity: 0;
          visibility: hidden;
          transform-origin: top right;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, visibility 0.25s ease, top 0.3s ease;
        }
        .mobile-nav-right-card.scrolled-top {
          top: 74px;
        }
        .mobile-nav-right-card.card-open {
          transform: translateY(0) scale(1);
          opacity: 1;
          visibility: visible;
        }

        /* Custom scrollbar for small screen heights */
        .mobile-nav-right-card::-webkit-scrollbar {
          width: 4px;
        }
        .mobile-nav-right-card::-webkit-scrollbar-thumb {
          background: rgba(13, 131, 253, 0.2);
          border-radius: 4px;
        }

        /* Staggered item entrance */
        .mobile-nav-right-card.card-open .card-nav-list > li {
          animation: cardItemFade 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--item-index, 1) * 0.035s);
        }
        @keyframes cardItemFade {
          from {
            opacity: 0;
            transform: translateX(14px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .card-close-btn {
          width: 30px;
          height: 30px;
          font-size: 12px;
          transition: all 0.2s ease;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .card-close-btn:hover {
          background: #fee2e2;
          color: #ef4444;
          transform: rotate(90deg);
        }

        .card-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 10px;
          color: #2d465e;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          background: transparent;
          transition: all 0.18s ease;
          margin-bottom: 2px;
        }
        .card-nav-link:hover, .card-nav-link.active, .card-accordion-btn.open {
          background: rgba(13, 131, 253, 0.08);
          color: #0d83fd;
        }
        .nav-icon-pill {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(13, 131, 253, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .link-arrow {
          font-size: 11px;
          color: #94a3b8;
          transition: transform 0.2s ease;
        }
        .card-nav-link:hover .link-arrow {
          transform: translateX(2px);
          color: #0d83fd;
        }

        .accordion-arrow {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 11px;
          color: #64748b;
        }
        .accordion-arrow.rotated {
          transform: rotate(180deg);
          color: #0d83fd;
        }

        .card-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
          padding: 0 6px;
          background: rgba(248, 250, 252, 0.9);
          border-radius: 10px;
          margin: 0 4px 4px 4px;
        }
        .card-submenu.submenu-open {
          max-height: 200px;
          padding: 6px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .card-sublink {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          border-radius: 7px;
          text-decoration: none;
          transition: all 0.18s ease;
          margin-bottom: 2px;
        }
        .card-sublink:hover, .card-sublink.active {
          background: #ffffff;
          color: #0d83fd;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transform: translateX(3px);
        }

        .card-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #64748b;
          background: #f1f5f9;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .card-social-icon:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }
        .card-social-icon.whatsapp:hover { background: #25D366; }
        .card-social-icon.instagram:hover { background: #E4405F; }
        .card-social-icon.youtube:hover { background: #FF0000; }
        .card-social-icon.facebook:hover { background: #1877F2; }
        .card-social-icon.phone:hover { background: #0d83fd; }

        @media (max-width: 480px) {
          .header {
            height: 68px;
          }
          .mobile-nav-right-card {
            top: 72px;
            right: 8px;
            width: calc(100vw - 16px);
            max-width: 310px;
          }
          .mobile-nav-right-card.scrolled-top {
            top: 66px;
          }
          .logo-img-box {
            width: 36px;
            height: 36px;
          }
          .logo-img-box img {
            max-height: 36px;
          }
          .brand-title {
            font-size: 18px !important;
          }
          .brand-subtitle {
            font-size: 9px !important;
            letter-spacing: 1.2px !important;
          }
          .mobile-nav-toggle-btn {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
