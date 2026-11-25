import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileNav = () => {
    const nextState = !isMobileNavOpen;
    setIsMobileNavOpen(nextState);
    if (!nextState) {
      setActiveDropdown(null);
      document.body.classList.remove('mobile-nav-active');
    } else {
      document.body.classList.add('mobile-nav-active');
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('mobile-nav-active');
  };

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0" onClick={closeMobileNav}>
          <img src={`${import.meta.env.BASE_URL}assets/img/logo.png`} alt="SKSBV Logo" style={{ maxHeight: '42px', width: 'auto' }} />
          <div className="d-flex flex-column align-items-center ms-2">
            <h1 className="sitename mb-0" style={{ fontFamily: "Caprasimo, serif", lineHeight: "1", fontSize: "clamp(18px, 4.5vw, 24px)" }}>SKSBV</h1>
            <span style={{ fontSize: "clamp(9px, 2.5vw, 13px)", fontWeight: "600", letterSpacing: "1.5px", lineHeight: "1", fontFamily: "var(--default-font)", color: "var(--accent-color, #0d83fd)" }}>STATE</span>
          </div>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>Home</NavLink></li>
            <li className={`dropdown ${activeDropdown === 'about' ? 'dropdown-active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('about', e)}>
                <span>About</span>
                <i className={`bi bi-chevron-down toggle-dropdown ${activeDropdown === 'about' ? 'active' : ''}`}></i>
              </a>
              <ul className={activeDropdown === 'about' ? "dropdown-active" : ""}>
                <li><NavLink to="/about" onClick={closeMobileNav}>About Us</NavLink></li>
                <li><NavLink to="/wings" onClick={closeMobileNav}>Wings</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/leaders" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>Leaders</NavLink></li>
            <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>Gallery</NavLink></li>
            <li className={`dropdown ${activeDropdown === 'updates' ? 'dropdown-active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('updates', e)}>
                <span>Updates</span>
                <i className={`bi bi-chevron-down toggle-dropdown ${activeDropdown === 'updates' ? 'active' : ''}`}></i>
              </a>
              <ul className={activeDropdown === 'updates' ? "dropdown-active" : ""}>
                <li><NavLink to="/circulars" onClick={closeMobileNav}>Circulars</NavLink></li>
                <li><NavLink to="/notifications" onClick={closeMobileNav}>Notifications</NavLink></li>
                <li><NavLink to="/featured-events" onClick={closeMobileNav}>Add Your Activity</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileNav}>Contact</NavLink></li>
            <li className="d-xl-none"><NavLink to="/featured-events" onClick={closeMobileNav}>Share Activity</NavLink></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
        </nav>

        {user ? (
          user.role === 'admin' ? (
            <div className="d-flex align-items-center">
              <NavLink to="/admin" className="btn btn-sm btn-outline-light me-2" onClick={closeMobileNav}>
                Admin
              </NavLink>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <NavLink to="/tenant" className="btn btn-sm btn-outline-light me-2" onClick={closeMobileNav}>
                Tenant
              </NavLink>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </button>
            </div>
          )
        ) : (
          <Link className="btn-getstarted d-none d-xl-inline-block" to="/featured-events">Share Activity</Link>
        )}

      </div>
    </header>
  );
};

export default Header;
