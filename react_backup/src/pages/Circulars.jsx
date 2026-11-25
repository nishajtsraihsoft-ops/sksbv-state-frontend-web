import React from 'react';
import PageTitle from '../components/common/PageTitle';
import API from '../api';

const Circulars = () => {
    const [circulars, setCirculars] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        API.apiFetch(API.buildUrl(API.endpoints.circular))
            .then((r) => r.json())
            .then((data) => setCirculars(Array.isArray(data) ? data : data.results || []))
            .catch((e) => setError(e.toString()))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <main className="main">
                <PageTitle title="Circulars" current="Circulars" />
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
                <PageTitle title="Circulars" current="Circulars" />
                <div className="container py-5 text-center text-danger">
                    Error: {error}
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <PageTitle title="Circulars" current="Circulars" />

            <section className="section py-4 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {circulars.length === 0 ? (
                                <div className="text-center py-5">
                                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>No circulars published yet.</p>
                                </div>
                            ) : (
                                <div className="list-group gap-2">
                                    {circulars.map((item, index) => (
                                        <a 
                                            href={item.file || '#'} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="list-group-item list-group-item-action d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 p-3 rounded-3 shadow-sm border" 
                                            key={index}
                                        >
                                            <div className="pe-sm-3 min-w-0">
                                                <h5 className="mb-1 text-dark" style={{ fontSize: '1rem', fontWeight: '600', wordBreak: 'break-word' }}>
                                                    <i className="bi bi-file-earmark-pdf-fill text-danger me-2"></i>
                                                    {item.title}
                                                </h5>
                                                <small className="text-muted">
                                                    <i className="bi bi-calendar3 me-1"></i>Published: {item.date}
                                                </small>
                                            </div>
                                            <span className="badge bg-primary rounded-pill px-3 py-2 flex-shrink-0 align-self-end align-self-sm-center" style={{ cursor: 'pointer', fontSize: '12px' }}>
                                                Download <i className="bi bi-download ms-1"></i>
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Circulars;
