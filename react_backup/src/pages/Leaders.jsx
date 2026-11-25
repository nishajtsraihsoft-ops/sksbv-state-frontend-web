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
            <ul className="nav nav-pills custom-nav-pills gap-2 gap-sm-3 flex-nowrap">
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill px-3 px-sm-4 ${activeTab === 'state' ? 'active' : ''}`}
                  onClick={() => setActiveTab('state')}
                  style={{ fontWeight: '500' }}
                >
                  State Leaders
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill px-3 px-sm-4 ${activeTab === 'working' ? 'active' : ''}`}
                  onClick={() => setActiveTab('working')}
                  style={{ fontWeight: '500' }}
                >
                  Working Committee
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link rounded-pill px-3 px-sm-4 ${activeTab === 'district' ? 'active' : ''}`}
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
            <div className="row g-3 g-sm-4">
              {leaders.map((leader, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
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
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 5px;
        }
        
        .nav-scroll-wrapper::-webkit-scrollbar { 
          display: none;
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
          white-space: nowrap;
          font-size: 14px;
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
          color: #333;
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
            width: 90px;
            height: 90px;
            margin-bottom: 12px;
          }
          .leader-name {
            font-size: 13.5px;
          }
          .custom-nav-pills .nav-link {
            font-size: 12.5px;
            padding: 6px 14px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Leaders;
