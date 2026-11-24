/**
 * Main JavaScript for Static Export Functionality
 * Integrates with SKSBV State Backend API
 */

// --- CONFIGURATION ---
// Change this to your backend URL or set window.API_BASE in page HTML.
const API_BASE = window.API_BASE || 'http://localhost:8000';

function buildApiUrl(endpoint) {
    return `${API_BASE.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#navmenu').classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
            document.body.classList.toggle('mobile-nav-active');
        });
    }

    /**
     * Mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            this.parentNode.parentNode.classList.toggle('dropdown-active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        });
    });

    /**
     * API HELPER
     */
    async function fetchData(endpoint) {
        try {
            const response = await fetch(buildApiUrl(endpoint), {
                cache: 'no-cache',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(`Could not fetch from ${endpoint}:`, error);
            return null;
        }
    }

    /**
     * NOTIFICATIONS (Ticker and Page)
     */
    const tickerContent = document.querySelector('.marquee-content');
    const notificationsContainer = document.getElementById('notifications-container');

    async function initNotifications() {
        const data = await fetchData('/api/notifications');
        if (!data) return;

        const notifications = (data && typeof data === 'object') ? (Array.isArray(data) ? data : (data.results || data.notifications || [])) : [];

        // Populate Ticker (Index Page)
        if (tickerContent && notifications.length > 0) {
            let tickerHtml = '';
            // Repeat notifications to ensure smooth marquee
            const displayList = [...notifications, ...notifications];
            displayList.forEach(item => {
                tickerHtml += `<span class="ticker-item h6 mb-0"><i class="bi bi-dot mx-2"></i>${item.title || item.message}</span>`;
            });
            tickerContent.innerHTML = tickerHtml;
        }

        // Populate Notifications Page
        if (notificationsContainer) {
            if (notifications.length === 0) {
                notificationsContainer.innerHTML = '<div class="text-center py-5"><p class="text-muted">No notifications found.</p></div>';
                return;
            }

            let html = '';
            notifications.forEach(item => {
                html += `
                <div class="card mb-3 border-0 shadow-sm">
                    <div class="card-body d-flex align-items-start">
                        <div class="me-3 mt-1"><i class="bi bi-bell-fill fs-3 text-primary"></i></div>
                        <div class="w-100">
                            <div class="d-flex w-100 justify-content-between align-items-center mb-1">
                                <h5 class="mb-0">${item.title}</h5>
                                <small class="text-muted">${item.date || ''}</small>
                            </div>
                            <p class="mb-1">${item.message || ''}</p>
                            ${item.link ? `<a href="${item.link}" target="_blank" class="badge bg-info text-decoration-none">More Info</a>` : ''}
                        </div>
                    </div>
                </div>`;
            });
            notificationsContainer.innerHTML = html;
        }
    }

    /**
     * CIRCULARS
     */
    const circularsContainer = document.getElementById('circulars-container');
    async function initCirculars() {
        if (!circularsContainer) return;

        const data = await fetchData('/api/circular');
        if (!data) {
            circularsContainer.innerHTML = '<div class="text-center py-5 text-danger">Error loading circulars. API may be offline.</div>';
            return;
        }

        const circulars = (data && typeof data === 'object') ? (Array.isArray(data) ? data : (data.results || data.circulars || [])) : [];
        if (circulars.length === 0) {
            circularsContainer.innerHTML = '<div class="text-center py-5"><p class="text-muted">No circulars found.</p></div>';
            return;
        }

        let html = '';
        circulars.forEach(item => {
            const fileUrl = item.file && item.file.startsWith('http') ? item.file : buildApiUrl(item.file || '');
            html += `
            <a href="${fileUrl}" target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3">
                <div>
                    <h5 class="mb-1"><i class="bi bi-file-earmark-pdf text-danger me-2"></i>${item.title}</h5>
                    <small class="text-muted">Published: ${item.date || ''}</small>
                </div>
                <span class="badge bg-primary rounded-pill px-3 py-2">Download <i class="bi bi-download ms-1"></i></span>
            </a>`;
        });
        circularsContainer.innerHTML = html;
    }

    /**
     * GALLERY
     */
    const galleryGrid = document.querySelector('.gallery-grid');
    async function initGallery() {
        if (!galleryGrid) return;

        const data = await fetchData('/api/gallery');
        if (!data) return;

        const images = (data && typeof data === 'object') ? (Array.isArray(data) ? data : (data.results || data.images || [])) : [];
        if (images.length === 0) return;

        let html = '';
        images.forEach((img, index) => {
            const imgUrl = img.image && img.image.startsWith('http') ? img.image : buildApiUrl(img.image || '');
            html += `
            <div class="gallery-item">
                <img alt="Gallery ${index + 1}" src="${imgUrl}">
                <div class="gallery-overlay">
                    <a href="${imgUrl}" class="glightbox zoom-btn" title="${img.title || ''}"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>`;
        });
        galleryGrid.innerHTML = html;

        // Re-init GLightbox if available
        if (window.GLightbox) {
            GLightbox({ selector: '.glightbox' });
        }
    }

    /**
     * LEADERS
     */
    const leadersSection = document.getElementById('leaders');
    async function initLeaders() {
        if (!leadersSection) return;

        const tabButtons = document.querySelectorAll('.custom-tabs-section button');
        const cardsContainer = document.querySelector('#leaders .row.g-4');
        
        const endpoints = {
            'State Leaders': '/api/leaders',
            'Working Committee': '/api/working-committee',
            'District Leaders': '/api/district-leaders'
        };

        const renderLeaders = async (endpoint) => {
            cardsContainer.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-primary" role="status"></div></div>';
            
            const data = await fetchData(endpoint);
            const leaders = (data && typeof data === 'object') ? (Array.isArray(data) ? data : (data.results || [])) : [];

            if (!leaders || leaders.length === 0) {
                cardsContainer.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">No leaders found in this category.</p></div>';
                return;
            }

            // Sort leaders by creation date ascending (oldest first), or by ID if no date
            leaders.sort((a, b) => {
                if (a.created_at && b.created_at) {
                    return new Date(a.created_at) - new Date(b.created_at);
                }
                return (a.id || 0) - (b.id || 0);
            });

            let html = '';
            leaders.forEach(leader => {
                let imgUrl = leader.image || leader.url || leader.photo || '';
                if (imgUrl && !imgUrl.startsWith('http')) {
                    imgUrl = buildApiUrl(imgUrl);
                }
                if (!imgUrl) {
                    const namePrefix = leader.name ? leader.name.split(' ')[0] : 'Leader';
                    imgUrl = `https://placehold.co/400x400?text=${encodeURIComponent(namePrefix)}`;
                }

                html += `
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="leader-card text-center">
                        <p class="leader-role">${leader.designation || 'Leader'}</p>
                        <div class="leader-image">
                            <img alt="${leader.name}" src="${imgUrl}" onerror="this.src='https://placehold.co/400x400?text=${encodeURIComponent(leader.name)}'">
                        </div>
                        <h5 class="leader-name">${leader.name}</h5>
                    </div>
                </div>`;
            });
            cardsContainer.innerHTML = html;
        };

        if (tabButtons.length > 0 && cardsContainer) {
            tabButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    tabButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const endpoint = endpoints[btn.textContent.trim()];
                    if (endpoint) renderLeaders(endpoint);
                });
            });

            // Initial load
            const activeBtn = document.querySelector('.custom-tabs-section button.active') || tabButtons[0];
            renderLeaders(endpoints[activeBtn.textContent.trim()]);
        }
    }

    // --- RUN EVERY PAGE INIT ---
    initNotifications();
    initCirculars();
    initGallery();
    initLeaders();

});

