import React from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Notifications = () => {
    const [notifications, setNotifications] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        API.apiFetch(API.buildUrl(API.endpoints.notifications))
            .then((r) => r.json())
            .then((data) => setNotifications(Array.isArray(data) ? data : data.results || []))
            .catch((e) => setError(e.toString()))
            .finally(() => setLoading(false));
    }, []);

    const getBadgeColor = (type) => {
        switch (type) {
            case 'Urgent': return 'bg-danger';
            case 'New': return 'bg-success';
            default: return 'bg-info';
        }
    };

    if (loading) {
        return (
            <main className="main">
                <PageTitle title="Notifications" current="Notifications" />
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
                <PageTitle title="Notifications" current="Notifications" />
                <div className="container py-5 text-center text-danger">
                    Error: {error}
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <PageTitle title="Notifications" current="Notifications" />

            <section className="section py-4 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {notifications.length === 0 ? (
                                <div className="text-center py-5">
                                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>No notifications found.</p>
                                </div>
                            ) : (
                                notifications.map((note, index) => (
                                    <div className="card mb-3 border-0 shadow-sm rounded-4 overflow-hidden" key={index}>
                                        <div className="card-body d-flex align-items-start p-3 p-sm-4">
                                            <div className="me-3 mt-1 flex-shrink-0">
                                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle" style={{ width: '42px', height: '42px' }}>
                                                    <i className="bi bi-bell-fill fs-5 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="w-100 min-w-0">
                                                <div className="d-flex flex-column flex-sm-row w-100 justify-content-between align-items-start align-items-sm-center gap-1 mb-1">
                                                    <h5 className="mb-0 fw-bold" style={{ fontSize: '1rem', wordBreak: 'break-word' }}>{note.title}</h5>
                                                    <small className="text-muted flex-shrink-0" style={{ fontSize: '12px' }}>
                                                        <i className="bi bi-calendar3 me-1"></i>{note.date}
                                                    </small>
                                                </div>
                                                <p className="mb-2 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>{note.message}</p>
                                                <span className={`badge ${getBadgeColor(note.type)} rounded-pill px-2 py-1`} style={{ fontSize: '11px' }}>{note.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Notifications;
