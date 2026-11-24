import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import API from '../api';
import TenantResource from '../components/TenantResource';

const RESOURCES = [
  { key: 'circular', label: 'Circulars', icon: 'bi-file-text' },
  { key: 'gallery', label: 'Gallery', icon: 'bi-images' },
  { key: 'leaders', label: 'Leaders', icon: 'bi-people' },
  { key: 'notifications', label: 'Notifications', icon: 'bi-bell' },
];

const TenantDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const endpoints = API.endpoints || {};

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="tenant-dashboard" style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', marginTop: '100px' }}>
      {/* Header */}
      <header className="bg-white border-bottom" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center" style={{ padding: '1.5rem 2rem' }}>
            <div>
              <h1 className="h4 mb-0 fw-bold">Tenant Portal</h1>
              <small className="text-muted">Welcome, {user?.username || 'User'}</small>
            </div>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-white border-bottom" style={{ borderRadius: '0' }}>
        <div className="container-fluid">
          <div className="nav nav-tabs" role="tablist" style={{ borderBottom: '2px solid #e9ecef', padding: '0 2rem' }}>
            {RESOURCES.map((r, idx) => (
              <button
                key={r.key}
                className={`nav-link fw-500 ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
                role="tab"
                style={{
                  padding: '1rem 1.5rem',
                  border: 'none',
                  borderBottom: activeTab === idx ? '3px solid #28a745' : 'none',
                  marginBottom: '-2px',
                  color: activeTab === idx ? '#28a745' : '#6c757d',
                  cursor: 'pointer',
                }}
              >
                <i className={`bi ${r.icon} me-2`}></i>
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="container-fluid" style={{ padding: '2rem', paddingTop: '1.5rem' }}>
        {RESOURCES.map((r, idx) => (
          <div
            key={r.key}
            style={{
              display: activeTab === idx ? 'block' : 'none',
              animation: activeTab === idx ? 'fadeIn 0.3s' : 'none',
            }}
          >
            <TenantResource label={r.label} endpoint={endpoints[r.key]} />
          </div>
        ))}
      </main>

      <style>{`
        .tenant-dashboard {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-link {
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: #28a745;
        }
      `}</style>
    </div>
  );
};

export default TenantDashboard;
