import React, { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let isMounted = true;
        API.apiFetch(API.buildUrl(API.endpoints.notifications))
            .then((r) => r.json())
            .then((data) => {
                if (!isMounted) return;
                setNotifications(Array.isArray(data) ? data : data.results || []);
            })
            .catch((e) => {
                if (isMounted) setError(e.toString());
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, []);

    const filteredNotes = notifications.filter((n) => {
        const q = searchQuery.toLowerCase();
        return (n.title && n.title.toLowerCase().includes(q)) || 
               (n.message && n.message.toLowerCase().includes(q)) ||
               (n.date && n.date.includes(q));
    });

    return (
        <main className="main">
            <PageTitle title="Official Announcements" current="Notifications" />

            <section className="section py-5 notifications-section">
                <div className="container" data-aos="fade-up">
                    {/* Header row */}
                    <div className="row g-3 align-items-center justify-content-between mb-4">
                        <div className="col-12 col-md-6">
                            <span className="badge-pill-modern mb-2">
                                <span className="badge-pill-dot"></span>
                                <span>Public Notices</span>
                            </span>
                            <h3 className="h4 fw-bold mb-0" style={{ color: 'var(--heading-color)' }}>
                                Important Alerts & News
                            </h3>
                        </div>

                        {/* Search input */}
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="input-group search-notif-box shadow-xs">
                                <span className="input-group-text bg-white border-end-0 text-muted ps-3">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 ps-0"
                                    placeholder="Search announcements..."
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

                    {/* Notification cards */}
                    {loading ? (
                        <div className="row g-3">
                            {[1, 2, 3, 4].map((n) => (
                                <div className="col-12" key={n}>
                                    <div className="notif-skeleton p-4 rounded-4 shadow-sm"></div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-5">
                            <div className="alert alert-danger d-inline-block px-4 py-3 rounded-4">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>Failed to load notifications: {error}
                            </div>
                        </div>
                    ) : filteredNotes.length === 0 ? (
                        <div className="text-center py-5">
                            <div className="empty-notif-box mb-3 mx-auto">
                                <i className="bi bi-bell-slash text-muted fs-1"></i>
                            </div>
                            <h5 className="text-muted fw-bold">No announcements found</h5>
                            <p className="text-muted small">Check back later for state committee updates.</p>
                        </div>
                    ) : (
                        <div className="row g-3">
                            {filteredNotes.map((note, index) => (
                                <div className="col-12" key={note.id || index} data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
                                    <div className="notification-card p-4 rounded-4 shadow-sm border bg-white transition-all hover-lift">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="bell-icon-box rounded-3 d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-bell-fill fs-4 text-primary"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-2 gap-1">
                                                    <h5 className="mb-0 fw-bold notif-title" style={{ color: 'var(--heading-color)' }}>
                                                        {note.title}
                                                    </h5>
                                                    <div className="d-flex align-items-center gap-2 text-muted small flex-shrink-0">
                                                        <i className="bi bi-clock-history"></i>
                                                        <span>{note.date || 'Recent'}</span>
                                                    </div>
                                                </div>

                                                <p className="text-muted mb-3" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                                                    {note.message}
                                                </p>

                                                {note.link && (
                                                    <a 
                                                        href={note.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1"
                                                    >
                                                        <span>Read More</span>
                                                        <i className="bi bi-box-arrow-up-right small"></i>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <style>{`
                .notifications-section {
                    background: #f8fafc;
                    min-height: 70vh;
                }
                .search-notif-box .form-control {
                    border-radius: 0 50px 50px 0;
                    font-size: 0.88rem;
                }
                .search-notif-box .input-group-text {
                    border-radius: 50px 0 0 50px;
                }
                .notification-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                }
                .notification-card:hover {
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
                .bell-icon-box {
                    width: 50px;
                    height: 50px;
                    background: rgba(13, 131, 253, 0.08);
                }
                .notif-title {
                    font-size: 1.1rem;
                }
                .notif-skeleton {
                    height: 90px;
                    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </main>
    );
};

export default Notifications;
