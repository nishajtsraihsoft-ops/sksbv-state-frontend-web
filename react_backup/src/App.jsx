import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useMain } from './hooks/useMain';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/common/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Leaders from './pages/Leaders';
import Gallery from './pages/Gallery';
import Wings from './pages/Wings';
import Circulars from './pages/Circulars';
import Notifications from './pages/Notifications';
import FeaturedEvents from './pages/FeaturedEvents';
import Contact from './pages/Contact';

// admin
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RequireAdmin from './components/RequireAdmin';
import TenantDashboard from './pages/TenantDashboard';
import { AuthProvider } from './contexts/AuthProvider';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useMain();

  return (
    <AuthProvider>
      <Preloader />
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wings" element={<Wings />} />
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/featured-events" element={<FeaturedEvents />} />
          <Route path="/contact" element={<Contact />} />

          {/* admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <AdminDashboard />
              </RequireAdmin>
            }
          />
          <Route path="/tenant" element={<TenantDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
