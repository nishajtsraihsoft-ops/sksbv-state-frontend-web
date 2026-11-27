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
      <PageTitle title="Our Leaders" current="Leaders" />

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
                      className={`nav-link rounded-pill px-3 px-sm-4 py-2 ${activeTab === 'state' ? 'active' : ''}`}
                      onClick={() => setActiveTab('state')}
                    >
                      <i className="bi bi-star-fill me-2 small"></i>State Leaders
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link rounded-pill px-3 px-sm-4 py-2 ${activeTab === 'working' ? 'active' : ''}`}
                      onClick={() => setActiveTab('working')}
                    >
                      <i className="bi bi-diagram-3-fill me-2 small"></i>Working Committee
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link rounded-pill px-3 px-sm-4 py-2 ${activeTab === 'district' ? 'active' : ''}`}
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

      {/* Leaders Display Grid (Old Card Design + Mobile Responsive) */}
      <section id="leaders" className="leaders-section py-5">
        <div className="container">
          {loading ? (
            <div className="row g-3 g-sm-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div className="col-6 col-md-4 col-lg-3" key={n}>
                  <div className="leader-skeleton-card p-4 rounded-4 shadow-sm text-center">
                    <div className="skeleton-bar w-50 mx-auto mb-3"></div>
                    <div className="skeleton-circle mx-auto mb-3"></div>
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
            <div className="row g-3 g-sm-4">
              {filteredLeaders.map((leader, index) => {
                const imgUrl = leader.image || leader.url || leader.photo || '';
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
                    <div className="leader-card text-center">
                      {/* Designation */}
                      <p className="leader-role">
                        {leader.designation || 'Leader'}
                      </p>

                      {/* Image */}
                      <div className="leader-image">
                        <img
                          src={imgUrl}
                          alt={leader.name}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://placehold.co/400x400?text=' +
                              encodeURIComponent(leader.name ? leader.name.split(' ')[0] : 'Leader');
                          }}
                        />
                      </div>

                      {/* Name */}
                      <h5 className="leader-name">
                        {leader.name}
                      </h5>
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
          background: #f9fafb;
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
          background: var(--accent-color, #0d6efd) !important;
          color: #ffffff !important;
          border-color: var(--accent-color, #0d6efd) !important;
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.25);
        }
        .nav-scroll-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
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

        .leaders-section {
          background: #f9fafb;
        }

        /* Old Leader Card Design */
        .leader-card {
          background: #ffffff;
          padding: 30px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .leader-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
        }

        .leader-role {
          font-size: 13px;
          font-weight: 600;
          color: #0d6efd;
          margin-bottom: 18px;
          letter-spacing: 0.3px;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leader-image {
          width: 140px;
          height: 140px;
          margin: 0 auto 18px auto;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
          flex-shrink: 0;
        }

        .leader-card:hover .leader-image {
          transform: scale(1.05);
        }

        .leader-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .leader-name {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          color: #333333;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .leader-image {
            width: 110px;
            height: 110px;
          }
        }

        @media (max-width: 575px) {
          .leader-card {
            padding: 18px 10px;
            border-radius: 14px;
          }
          .leader-role {
            font-size: 11px;
            margin-bottom: 12px;
            min-height: 30px;
          }
          .leader-image {
            width: 88px;
            height: 88px;
            margin-bottom: 12px;
          }
          .leader-name {
            font-size: 13.5px;
          }
          .custom-nav-pills .nav-link {
            font-size: 12.5px;
            padding: 7px 14px !important;
          }
        }

        .leader-skeleton-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .skeleton-circle {
          width: 110px;
          height: 110px;
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
