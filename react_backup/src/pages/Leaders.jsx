import React from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Leaders = () => {
  const [leaders, setLeaders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('state');

  React.useEffect(() => {
    setLoading(true);
    let endpoint = API.endpoints.leaders;
    if (activeTab === 'working') endpoint = API.endpoints.workingCommittee;
    if (activeTab === 'district') endpoint = API.endpoints.districtLeaders;

    API.apiFetch(API.buildUrl(endpoint))
      .then((r) => r.json())
      .then((data) =>
        setLeaders(Array.isArray(data) ? data : data.results || [])
      )
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  }, [activeTab]);

  if (loading) {
    return (
      <main className="main">
        <PageTitle title="Our Leaders" current="Leaders" />
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
        <PageTitle title="Our Leaders" current="Leaders" />
        <div className="container py-5 text-center text-danger">
          Error: {error}
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <PageTitle title="Our Leaders" current="Leaders" />

      <section className="py-4 custom-tabs-section">
        <div className="container">
          <div className="nav-scroll-wrapper">
            <ul className="nav nav-pills custom-nav-pills gap-3 flex-nowrap">
            <li className="nav-item">
              <button 
                className={`nav-link rounded-pill px-4 ${activeTab === 'state' ? 'active' : ''}`}
                onClick={() => setActiveTab('state')}
                style={{ fontWeight: '500' }}
              >
                State Leaders
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link rounded-pill px-4 ${activeTab === 'working' ? 'active' : ''}`}
                onClick={() => setActiveTab('working')}
                style={{ fontWeight: '500' }}
              >
                Working Committee
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link rounded-pill px-4 ${activeTab === 'district' ? 'active' : ''}`}
                onClick={() => setActiveTab('district')}
                style={{ fontWeight: '500' }}
              >
                District Leaders
              </button>
            </li>
          </ul>
          </div>
        </div>
      </section>

      <section id="leaders" className="leaders-section pb-5 pt-2">
        <div className="container">
          {leaders.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted" style={{ fontSize: '1.2rem', fontWeight: '500' }}>No leaders found in this category.</p>
            </div>
          ) : (
            <div className="row g-4">
              {leaders.map((leader, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="leader-card text-center">

                  {/* Designation */}
                  <p className="leader-role">
                    {leader.designation}
                  </p>

                  {/* Image */}
                  <div className="leader-image">
                    <img
                      src={
                        leader.image ||
                        leader.url ||
                        leader.photo ||
                        ''
                      }
                      alt={leader.name}
                      onError={(e) => {
                        e.target.src =
                          'https://placehold.co/400x400?text=' +
                          (leader.name
                            ? leader.name.split(' ')[0]
                            : '');
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h5 className="leader-name">
                    {leader.name}
                  </h5>

                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .custom-tabs-section {
          background: #f9fafb;
        }

        .nav-scroll-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          padding-bottom: 5px; /* prevent shadow clipping */
        }
        
        .nav-scroll-wrapper::-webkit-scrollbar { 
          display: none; /* Safari and Chrome */
        }

        .custom-nav-pills {
          justify-content: center;
        }

        @media (max-width: 768px) {
          .custom-nav-pills {
            justify-content: flex-start;
          }
        }

        .custom-nav-pills .nav-link {
          color: #495057;
          background-color: #e9ecef;
          transition: all 0.3s ease;
          border: none;
          white-space: nowrap; /* Keep text on a single line */
        }

        .custom-nav-pills .nav-link:hover {
          background-color: #dee2e6;
        }

        .custom-nav-pills .nav-link.active {
          color: #fff;
          background-color: #0d6efd;
          box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
        }

        .leaders-section {
          background: #f9fafb;
        }

        .leader-card {
          background: #ffffff;
          padding: 35px 25px;
          border-radius: 16px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .leader-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
        }

        /* Simple Attractive Designation */
        .leader-role {
          font-size: 14px;
          font-weight: 600;
          color: #0d6efd;
          margin-bottom: 25px;
          letter-spacing: 0.5px;
        }

        /* Bigger Round Image */
        .leader-image {
          width: 160px;
          height: 160px;
          margin: 0 auto 25px auto;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
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
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #333;
        }

        @media (max-width: 768px) {
          .leader-image {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </main>
  );
};

export default Leaders;