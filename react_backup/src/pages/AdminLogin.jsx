import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(username, password);
    setLoading(false);
    if (result.ok) {
      navigate('/admin');
    } else {
      setError(result.error || 'Invalid credentials');
    }
  };

  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 py-5" style={{ background: 'linear-gradient(135deg, #f0f4f9 0%, #dbeafe 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="p-4 p-sm-5 bg-white">
                <div className="text-center mb-4">
                  <div className="d-inline-flex p-3 rounded-circle bg-light mb-3 shadow-sm">
                    <img src="/assets/img/logo.png" alt="SKSBV Logo" style={{ height: '48px', width: 'auto' }} />
                  </div>
                  <h2 className="fw-bold mb-1" style={{ color: 'var(--heading-color)', fontFamily: 'Outfit, sans-serif' }}>Admin Portal</h2>
                  <p className="text-muted small">Sign in to manage SKSBV State resources</p>
                </div>

                {error && (
                  <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small rounded-3 mb-4">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-secondary">Username</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-light border-start-0"
                        placeholder="Enter admin username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-semibold text-secondary">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control bg-light border-start-0"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2 fw-semibold rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Authenticating...</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Sign In</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-4 pt-2 border-top">
                  <Link to="/" className="text-muted small text-decoration-none d-inline-flex align-items-center gap-1 hover-lift">
                    <i className="bi bi-arrow-left"></i> Return to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
