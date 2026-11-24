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

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {notifications.map((note, index) => (
                                <div className="card mb-3 border-0 shadow-sm" key={index}>
                                    <div className="card-body d-flex align-items-start">
                                        <div className="me-3 mt-1">
                                            <i className="bi bi-bell-fill fs-3 text-primary"></i>
                                        </div>
                                        <div className="w-100">
                                            <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                                                <h5 className="mb-0">{note.title}</h5>
                                                <small className="text-muted">{note.date}</small>
                                            </div>
                                            <p className="mb-1">{note.message}</p>
                                            <span className={`badge ${getBadgeColor(note.type)}`}>{note.type}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Notifications;
