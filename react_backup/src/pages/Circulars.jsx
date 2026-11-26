import React, { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Circulars = () => {
    const [circulars, setCirculars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let isMounted = true;
        API.apiFetch(API.buildUrl(API.endpoints.circular))
            .then((r) => r.json())
            .then((data) => {
                if (!isMounted) return;
                setCirculars(Array.isArray(data) ? data : data.results || []);
            })
            .catch((e) => {
                if (isMounted) setError(e.toString());
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, []);

    const filteredCirculars = circulars.filter((c) => {
        const q = searchQuery.toLowerCase();
        return (c.title && c.title.toLowerCase().includes(q)) || (c.date && c.date.includes(q));
    });

    return (
        <main className="main">
            <PageTitle title="Official Circulars" current="Circulars" />

            <section className="section py-5 circulars-section">
                <div className="container" data-aos="fade-up">
                    {/* Filter and stats row */}
                    <div className="row g-3 align-items-center justify-content-between mb-4">
                        <div className="col-12 col-md-6">
                            <span className="badge-pill-modern mb-2">
                                <span className="badge-pill-dot"></span>
                                <span>Official Directives</span>
                            </span>
                            <h3 className="h4 fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>
                                SKSBV State Notifications & Circulars
                            </h3>
                        </div>

                        {/* Search input */}
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="input-group search-circulars-box shadow-xs">
                                <span className="input-group-text bg-white border-end-0 text-muted ps-3">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 ps-0"
                                    placeholder="Search circular by title or date..."
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

                    {/* Content */}
                    {loading ? (
                        <div className="row g-3">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <div className="col-12" key={n}>
                                    <div className="circular-skeleton p-4 rounded-4 shadow-sm"></div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-5">
                            <div className="alert alert-danger d-inline-block px-4 py-3 rounded-4">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>Failed to load circulars: {error}
                            </div>
                        </div>
                    ) : filteredCirculars.length === 0 ? (
                        <div className="text-center py-5">
                            <div className="empty-circular-box mb-3 mx-auto">
                                <i className="bi bi-file-earmark-x text-muted fs-1"></i>
                            </div>
                            <h5 className="text-muted fw-bold">No circulars found</h5>
                            <p className="text-muted small">Try searching with a different keyword or year.</p>
                        </div>
                    ) : (
                        <div className="row g-3">
                            {filteredCirculars.map((item, index) => {
                                const fileUrl = item.file || '#';
                                return (
                                    <div className="col-12" key={item.id || index} data-aos="fade-up" data-aos-delay={(index % 5) * 50}>
                                        <div className="circular-card p-3 p-md-4 rounded-4 shadow-sm border bg-white transition-all hover-lift d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            {/* Left details */}
                                            <div className="d-flex align-items-center">
                                                <div className="pdf-icon-box rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                                    <i className="bi bi-file-earmark-pdf-fill fs-3 text-danger"></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 fw-bold circular-title" style={{ color: 'var(--heading-color)' }}>
                                                        {item.title}
                                                    </h5>
                                                    <div className="d-flex align-items-center gap-2 text-muted small">
                                                        <i className="bi bi-calendar3 text-primary"></i>
                                                        <span>Published: {item.date || 'Recent'}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right action */}
                                            <div className="d-flex align-items-center gap-2 justify-content-end">
                                                <a 
                                                    href={fileUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="btn btn-primary rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 shadow-sm circular-btn"
                                                >
                                                    <i className="bi bi-download"></i>
                                                    <span>Download PDF</span>
                                                </a>
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
                .circulars-section {
                    background: #f8fafc;
                    min-height: 70vh;
                }
                .search-circulars-box .form-control {
                    border-radius: 0 50px 50px 0;
                    font-size: 0.88rem;
                }
                .search-circulars-box .input-group-text {
                    border-radius: 50px 0 0 50px;
                }
                .circular-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .circular-card:hover {
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
                .pdf-icon-box {
                    width: 52px;
                    height: 52px;
                    background: rgba(239, 68, 68, 0.08);
                }
                .circular-title {
                    font-size: 1.05rem;
                }
                @media (max-width: 576px) {
                    .circular-title {
                        font-size: 0.95rem;
                    }
                    .circular-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
                .circular-skeleton {
                    height: 80px;
                    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </main>
    );
};

export default Circulars;
