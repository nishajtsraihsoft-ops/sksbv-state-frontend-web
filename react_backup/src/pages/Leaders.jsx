import React, { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Leaders = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('state');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    let endpoint = API.endpoints.leaders;
    if (activeTab === 'working') endpoint = API.endpoints.workingCommittee;
    if (activeTab === 'district') endpoint = API.endpoints.districtLeaders;

    API.apiFetch(API.buildUrl(endpoint))
      .then((r) => r.json())
      .then((data) => {
        setLeaders(Array.isArray(data) ? data : data.results || []);
      })
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  }, [activeTab]);

  const filteredLeaders = leaders.filter((l) => {
    const q = searchQuery.toLowerCase();
    const nameMatch = l.name && l.name.toLowerCase().includes(q);
    const roleMatch = l.designation && l.designation.toLowerCase().includes(q);
    return nameMatch || roleMatch;
  });

  return (
    <main className="main">
      <PageTitle title="Leadership Council" current="Leaders" />

      {/* Tabs & Search Controls */}
      <section className="py-4 leaders-control-bar border-bottom">
        <div className="container">
          <div className="row g-3 align-items-center justify-content-between">
            {/* Nav Tabs */}
            <div className="col-12 col-md-auto">
              <div className="nav-scroll-wrapper">
                <ul className="nav nav-pills custom-nav-pills gap-2 flex-nowrap">
                  <li className="nav-item">
                    <button 
                      className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'state' ? 'active' : ''}`}
                      onClick={() => setActiveTab('state')}
                    >
                      <i className="bi bi-star-fill me-2 small"></i>State Leaders
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'working' ? 'active' : ''}`}
                      onClick={() => setActiveTab('working')}
                    >
                      <i className="bi bi-diagram-3-fill me-2 small"></i>Working Committee
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'district' ? 'active' : ''}`}
                      onClick={() => setActiveTab('district')}
                    >
                      <i className="bi bi-geo-alt-fill me-2 small"></i>District Leaders
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search Input */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="input-group search-input-box shadow-xs">
                <span className="input-group-text bg-white border-end-0 text-muted ps-3">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search leaders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="btn btn-white border-start-0 text-muted" onClick={() => setSearchQuery('')}>
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders Display Grid */}
      <section id="leaders" className="leaders-section py-5">
        <div className="container">
          {loading ? (
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div className="col-6 col-md-4 col-lg-3" key={n}>
                  <div className="leader-skeleton-card p-4 rounded-4 shadow-sm text-center">
                    <div className="skeleton-circle mx-auto mb-3"></div>
                    <div className="skeleton-bar w-50 mx-auto mb-2"></div>
                    <div className="skeleton-bar w-75 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-5">
              <div className="alert alert-danger d-inline-block px-4 py-3 rounded-4">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>Error: {error}
              </div>
            </div>
          ) : filteredLeaders.length === 0 ? (
            <div className="text-center py-5">
              <div className="empty-icon-box mb-3 mx-auto">
                <i className="bi bi-people text-muted fs-1"></i>
              </div>
              <h5 className="text-muted fw-bold">No leaders found</h5>
              <p className="text-muted small">Try searching with a different name or designation.</p>
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {filteredLeaders.map((leader, index) => {
                const imgUrl = leader.image || leader.url || leader.photo || '';
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
                    <div className="leader-card p-3 p-md-4 rounded-4 shadow-sm border bg-white text-center h-100 transition-all hover-lift d-flex flex-column align-items-center justify-content-between">
                      {/* Image Frame */}
                      <div className="leader-img-frame mb-3 position-relative">
                        <img
                          src={imgUrl}
                          alt={leader.name}
                          className="rounded-circle img-fluid leader-avatar shadow-sm"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name || 'Leader')}&background=0d83fd&color=fff&size=200`;
                          }}
                        />
                      </div>

                      {/* Info */}
                      <div className="leader-meta w-100">
                        {leader.designation && (
                          <span className="badge rounded-pill bg-primary-subtle text-primary border border-primary-subtle px-3 py-1 mb-2 fw-semibold text-truncate d-inline-block mw-100" style={{ fontSize: '11px' }}>
                            {leader.designation}
                          </span>
                        )}
                        <h5 className="leader-name mb-0 fw-bold" style={{ color: 'var(--heading-color)', fontSize: '1.025rem' }}>
                          {leader.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .leaders-control-bar {
          background: #f8fafc;
        }
        .custom-nav-pills .nav-link {
          background: #ffffff;
          color: var(--heading-color, #2d465e);
          border: 1px solid rgba(0, 0, 0, 0.08);
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all 0.25s ease;
        }
        .custom-nav-pills .nav-link.active {
          background: var(--accent-color, #0d83fd) !important;
          color: #ffffff !important;
          border-color: var(--accent-color, #0d83fd) !important;
          box-shadow: 0 4px 12px rgba(13, 131, 253, 0.25);
        }
        .nav-scroll-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .nav-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .search-input-box .form-control {
          border-radius: 0 50px 50px 0;
          font-size: 0.88rem;
        }
        .search-input-box .input-group-text {
          border-radius: 50px 0 0 50px;
        }
        .leader-card {
          border: 1px solid rgba(0, 0, 0, 0.06) !important;
        }
        .leader-img-frame {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, rgba(13, 131, 253, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
        }
        .leader-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 576px) {
          .leader-img-frame {
            width: 85px;
            height: 85px;
          }
          .leader-name {
            font-size: 0.9rem !important;
          }
        }
        .leader-skeleton-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .skeleton-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #e2e8f0;
        }
        .skeleton-bar {
          height: 12px;
          border-radius: 6px;
          background: #e2e8f0;
        }
      `}</style>
    </main>
  );
};

export default Leaders;
