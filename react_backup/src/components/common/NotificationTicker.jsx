import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../api';

const NotificationTicker = () => {
    const [announcements, setAnnouncements] = React.useState([]);

    React.useEffect(() => {
        const fetchUpdates = async () => {
            try {
                // Fetch both notifications and circulars concurrently
                const [notifRes, circRes] = await Promise.all([
                    API.apiFetch(API.buildUrl(API.endpoints.notifications)),
                    API.apiFetch(API.buildUrl(API.endpoints.circular))
                ]);

                // Parse the JSON data
                const notifData = await notifRes.json();
                const circData = await circRes.json();

                // Extract array directly, or from .results if paginated
                const notifications = Array.isArray(notifData) ? notifData : notifData.results || [];
                const circulars = Array.isArray(circData) ? circData : circData.results || [];

                // Standardize objects to have type and uniform text properties if needed, 
                // though usually they both have 'title' and 'date'.
                const combined = [
                    ...notifications.map(n => ({ ...n, type: 'notification' })),
                    ...circulars.map(c => ({ ...c, type: 'circular' }))
                ];

                // Sort by date descending (assuming YYYY-MM-DD or parseable dates)
                combined.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Take the 5 most recent
                const latest5 = combined.slice(0, 5);

                // Map to strings for the ticker, or keep as objects. Setting as strings to match existing UI:
                setAnnouncements(latest5.map(item => item.title));

            } catch (error) {
                console.error("Failed to fetch latest updates for ticker:", error);
                setAnnouncements(["Welcome to SKSBV State Committee Official Website"]); // Fallback
            }
        };

        fetchUpdates();
    }, []);

    if (announcements.length === 0) return null; // Don't render if loading or no data


    return (
        <div className="notification-ticker-wrapper">
            <div className="container-fluid px-0">
                <div className="ticker-container d-flex align-items-center">
                    <div className="ticker-label d-flex align-items-center px-4 py-2">
                        <i className="bi bi-megaphone-fill me-2"></i>
                        <span className="fw-bold text-uppercase">Latest Updates</span>
                    </div>
                    <div className="ticker-content flex-grow-1 overflow-hidden h-100 py-2">
                        <div className="marquee">
                            <div className="marquee-content">
                                {announcements.map((text, idx) => (
                                    <span key={idx} className="ticker-item h6 mb-0">
                                        <i className="bi bi-dot mx-2"></i>
                                        {text}
                                    </span>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {announcements.map((text, idx) => (
                                    <span key={`dup-${idx}`} className="ticker-item h6 mb-0">
                                        <i className="bi bi-dot mx-2"></i>
                                        {text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .notification-ticker-wrapper {
                    background: #f8fafc;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    position: relative;
                    z-index: 100;
                    height: 45px;
                }
                .ticker-container {
                    height: 100%;
                }
                .ticker-label {
                    background: var(--accent-color, #0d83fd);
                    color: #fff;
                    font-size: 11px;
                    letter-spacing: 1px;
                    height: 100%;
                    white-space: nowrap;
                    position: relative;
                    z-index: 2;
                }
                .ticker-label::after {
                    content: '';
                    position: absolute;
                    right: -15px;
                    top: 0;
                    border-left: 15px solid var(--accent-color, #0d83fd);
                    border-top: 22.5px solid transparent;
                    border-bottom: 22.5px solid transparent;
                }
                .marquee {
                    white-space: nowrap;
                    overflow: hidden;
                    display: inline-block;
                    animation: marquee 40s linear infinite;
                    padding-left: 50px;
                }
                .marquee:hover {
                    animation-play-state: paused;
                }
                .marquee-content {
                    display: inline-block;
                }
                .ticker-item {
                    color: #475569;
                    font-weight: 500;
                    display: inline-block;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                .ticker-item:hover {
                    color: var(--accent-color, #0d83fd);
                }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @media (max-width: 768px) {
                    .ticker-label span { display: none; }
                    .ticker-label { px: 2; }
                    .notification-ticker-wrapper { height: 40px; }
                }
            `}</style>
        </div>
    );
};

export default NotificationTicker;
