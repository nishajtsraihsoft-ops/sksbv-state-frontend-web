import React, { useState, useEffect } from 'react';
import API from '../../api';

const NotificationTicker = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchUpdates = async () => {
            try {
                const [notifRes, circRes] = await Promise.all([
                    API.apiFetch(API.buildUrl(API.endpoints.notifications)),
                    API.apiFetch(API.buildUrl(API.endpoints.circular))
                ]);

                const notifData = await notifRes.json();
                const circData = await circRes.json();

                const notifications = Array.isArray(notifData) ? notifData : notifData.results || [];
                const circulars = Array.isArray(circData) ? circData : circData.results || [];

                const combined = [
                    ...notifications.map(n => ({ ...n, type: 'notification' })),
                    ...circulars.map(c => ({ ...c, type: 'circular' }))
                ];

                combined.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latest = combined.slice(0, 6);

                if (isMounted) {
                    if (latest.length > 0) {
                        setAnnouncements(latest.map(item => item.title));
                    } else {
                        setAnnouncements(["Welcome to SKSBV State Committee Official Website"]);
                    }
                }
            } catch {
                if (isMounted) {
                    setAnnouncements(["Welcome to SKSBV State Committee Official Website"]);
                }
            }
        };

        fetchUpdates();
        return () => { isMounted = false; };
    }, []);

    if (announcements.length === 0) return null;

    return (
        <div className="notification-ticker-wrapper border-bottom position-relative">
            <div className="container-fluid px-0">
                <div className="ticker-container d-flex align-items-center">
                    {/* Ticker Badge */}
                    <div className="ticker-label d-flex align-items-center px-3 px-md-4 py-2 flex-shrink-0 z-2 shadow-sm">
                        <i className="bi bi-megaphone-fill me-2 fs-6"></i>
                        <span className="fw-bold text-uppercase d-none d-sm-inline" style={{ fontSize: '11px', letterSpacing: '1px' }}>Latest Updates</span>
                        <span className="fw-bold text-uppercase d-inline d-sm-none" style={{ fontSize: '11px' }}>News</span>
                    </div>

                    {/* Marquee Content */}
                    <div className="ticker-content flex-grow-1 overflow-hidden h-100 py-2">
                        <div className="marquee">
                            <div className="marquee-content d-flex align-items-center">
                                {announcements.map((text, idx) => (
                                    <span key={idx} className="ticker-item mb-0 text-dark fw-medium d-inline-flex align-items-center">
                                        <span className="ticker-dot mx-3"></span>
                                        {text}
                                    </span>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {announcements.map((text, idx) => (
                                    <span key={`dup-${idx}`} className="ticker-item mb-0 text-dark fw-medium d-inline-flex align-items-center">
                                        <span className="ticker-dot mx-3"></span>
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
                    height: 44px;
                    z-index: 10;
                }
                .ticker-container {
                    height: 100%;
                }
                .ticker-label {
                    background: linear-gradient(135deg, var(--accent-color, #0d83fd) 0%, #0077b6 100%);
                    color: #ffffff;
                    height: 100%;
                }
                .ticker-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--accent-color, #0d83fd);
                    display: inline-block;
                }
                .marquee {
                    overflow: hidden;
                    white-space: nowrap;
                    width: 100%;
                }
                .marquee-content {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marqueeScroll 35s linear infinite;
                }
                .marquee:hover .marquee-content {
                    animation-play-state: paused;
                }
                .ticker-item {
                    font-size: 13.5px;
                    padding-right: 15px;
                }
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default NotificationTicker;
