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

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="list-group">
                                {circulars.map((item, index) => (
                                    <a href={item.file || '#'} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3" key={index}>
                                        <div>
                                            <h5 className="mb-1"><i className="bi bi-file-earmark-pdf text-danger me-2"></i>{item.title}</h5>
                                            <small className="text-muted">Published: {item.date}</small>
                                        </div>
                                        <span className="badge bg-primary rounded-pill px-3 py-2" style={{ cursor: 'pointer' }}>Download <i className="bi bi-download ms-1"></i></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Circulars;
