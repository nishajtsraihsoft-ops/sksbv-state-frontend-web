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

  useEffect(() => {
    closeMobileNav();
  }, [location.pathname]);

  const toggleMobileNav = () => {
    const nextState = !isMobileNavOpen;
    setIsMobileNavOpen(nextState);
    if (nextState) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setAboutDropdownOpen(false);
    setUpdatesDropdownOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  return (
    <>
      <header id="header" className={`header d-flex align-items-center fixed-top transition-all ${scrolled ? 'header-scrolled shadow-sm' : ''}`}>
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          {/* Brand Logo */}
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none">
            <div className="logo-img-box me-2">
              <img src="/assets/img/logo.png" alt="SKSBV Logo" className="img-fluid" />
            </div>
            <div className="d-flex flex-column">
              <span className="brand-title mb-0" style={{ fontFamily: "Caprasimo, serif", lineHeight: "1", fontSize: "clamp(20px, 4vw, 24px)", color: "#012970" }}>
                SKSBV
              </span>
              <span className="brand-subtitle" style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "var(--accent-color, #0d83fd)", lineHeight: "1" }}>
                STATE COMMITTEE
              </span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>
                  <i className="bi bi-house-door d-xl-none me-2"></i>Home
                </NavLink>
              </li>

              {/* About Dropdown */}
              <li className={`dropdown ${aboutDropdownOpen ? 'dropdown-active' : ''}`}>
                <a href="#about-menu" onClick={(e) => { e.preventDefault(); setAboutDropdownOpen(!aboutDropdownOpen); }}>
                  <i className="bi bi-info-circle d-xl-none me-2"></i>
                  <span>About</span>
                  <i className={`bi bi-chevron-down toggle-dropdown ${aboutDropdownOpen ? 'rotate-icon' : ''}`}></i>
                </a>
                <ul className={aboutDropdownOpen ? "dropdown-active" : ""}>
                  <li>
                    <NavLink to="/about" onClick={closeMobileNav}>
                      <i className="bi bi-book me-2 text-primary"></i>About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wings" onClick={closeMobileNav}>
                      <i className="bi bi-layers me-2 text-primary"></i>Wings
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/leaders" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>
                  <i className="bi bi-people d-xl-none me-2"></i>Leaders
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>
                  <i className="bi bi-images d-xl-none me-2"></i>Gallery
                </NavLink>
              </li>

              {/* Updates Dropdown */}
              <li className={`dropdown ${updatesDropdownOpen ? 'dropdown-active' : ''}`}>
                <a href="#updates-menu" onClick={(e) => { e.preventDefault(); setUpdatesDropdownOpen(!updatesDropdownOpen); }}>
                  <i className="bi bi-bell d-xl-none me-2"></i>
                  <span>Updates</span>
                  <i className={`bi bi-chevron-down toggle-dropdown ${updatesDropdownOpen ? 'rotate-icon' : ''}`}></i>
                </a>
                <ul className={updatesDropdownOpen ? "dropdown-active" : ""}>
                  <li>
                    <NavLink to="/circulars" onClick={closeMobileNav}>
                      <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>Circulars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/notifications" onClick={closeMobileNav}>
                      <i className="bi bi-megaphone me-2 text-warning"></i>Notifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/featured-events" onClick={closeMobileNav}>
                      <i className="bi bi-plus-circle me-2 text-success"></i>Add Your Activity
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>
                  <i className="bi bi-envelope d-xl-none me-2"></i>Contact
                </NavLink>
              </li>

              {/* Mobile CTA */}
              <li className="d-xl-none mt-3 pt-3 border-top">
                <Link to="/featured-events" className="btn btn-primary text-white w-100 rounded-pill py-2 text-center shadow-sm" onClick={closeMobileNav}>
                  <i className="bi bi-send-fill me-2"></i>Share Activity
                </Link>
              </li>
            </ul>

            <i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x-lg' : 'bi-list'}`} onClick={toggleMobileNav}></i>
          </nav>

          {/* Desktop Right Actions */}
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

        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileNavOpen && (
        <div 
          className="mobile-nav-backdrop position-fixed top-0 start-0 w-100 h-100" 
          style={{ background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', zIndex: 9996 }}
          onClick={closeMobileNav}
        />
      )}

      <style>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          height: 80px;
          transition: all 0.3s ease;
        }
        .header-scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          height: 72px;
        }
        .logo-img-box {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img-box img {
          max-height: 44px;
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
        .rotate-icon {
          transform: rotate(180deg);
          transition: transform 0.25s ease;
        }
        .mobile-nav-toggle {
          cursor: pointer;
          font-size: 26px;
          color: var(--heading-color, #2d465e);
          transition: color 0.2s ease;
        }
        .mobile-nav-toggle:hover {
          color: var(--accent-color, #0d83fd);
        }
      `}</style>
    </>
  );
};

export default Header;
