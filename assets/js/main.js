/**
 * Main JavaScript for Static Export Functionality
 * Integrates with SKSBV State Backend API
 */

// --- CONFIGURATION ---
// Change this to your backend URL or set window.API_BASE in page HTML.
const API_BASE = window.API_BASE || 'https://sksbv.in';

function buildApiUrl(endpoint) {
    return `${API_BASE.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

function buildMediaUrl(rawPath, isGallery = false) {
    if (!rawPath) return '';
    if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) return rawPath;
    if (rawPath.startsWith('assets/') || rawPath.startsWith('/assets/')) return rawPath;
    const clean = rawPath.replace(/^\/+/, '');
    if (clean.startsWith('media/')) {
        return `${API_BASE.replace(/\/$/, '')}/${clean}`;
    }
    return isGallery
        ? `${API_BASE.replace(/\/$/, '')}/media/gallery/${clean}`
        : `${API_BASE.replace(/\/$/, '')}/media/${clean}`;
}

document.addEventListener('DOMContentLoaded', () => {
    /**
     * SIMPLE GLOBAL PRELOADER
     */
    const existingPreloader = document.getElementById('site-preloader');
    if (!existingPreloader) {
        const preloader = document.createElement('div');
        preloader.id = 'site-preloader';
        preloader.style.cssText = 'position:fixed;inset:0;background:#fff;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity 0.35s ease,visibility 0.35s ease;';
        preloader.innerHTML = `
            <div style="position:relative;width:76px;height:76px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
                <div style="position:absolute;inset:0;border-radius:50%;border:3px solid rgba(13,131,253,0.15);border-top-color:#0d83fd;animation:sksbvSpin 0.8s linear infinite;"></div>
                <img src="assets/img/logo.png" alt="SKSBV Logo" style="width:42px;height:42px;object-fit:contain;">
            </div>
            <span style="font-family:Outfit,Inter,sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;color:#012970;">SKSBV STATE</span>
        `;
        if (!document.getElementById('sksbv-preloader-keyframes')) {
            const style = document.createElement('style');
            style.id = 'sksbv-preloader-keyframes';
            style.textContent = '@keyframes sksbvSpin{to{transform:rotate(360deg)}}';
            document.head.appendChild(style);
        }
        document.body.prepend(preloader);
        const hidePreloader = () => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => preloader.remove(), 350);
        };
        if (document.readyState === 'complete') {
            setTimeout(hidePreloader, 300);
        } else {
            window.addEventListener('load', () => setTimeout(hidePreloader, 300), { once: true });
            setTimeout(hidePreloader, 1200);
        }
    }

    /**
     * Header scroll behavior (transparent over Hero on Home page)
     */
    const header = document.getElementById('header');
    const mobileNavCard = document.querySelector('.mobile-nav-right-card');
    if (header) {
        const isHomePage = header.classList.contains('header-over-hero') ||
            document.body.classList.contains('index-page');
        const updateHeaderScroll = () => {
            const scrolled = window.scrollY > 20;
            header.classList.toggle('header-scrolled', scrolled);
            header.classList.toggle('shadow-sm', scrolled);
            if (isHomePage) {
                header.classList.toggle('header-over-hero', !scrolled);
            }
            if (mobileNavCard) {
                mobileNavCard.classList.toggle('scrolled-top', scrolled);
            }
        };
        updateHeaderScroll();
        window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    }

    /**
     * Mobile nav toggle (supports both legacy and new right-card mobile nav)
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

    const mobileToggleBtnNew = document.querySelector('.mobile-nav-toggle-btn');
    const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
    const mobileCloseBtn = document.querySelector('.card-close-btn');

    const closeMobileCardNav = () => {
        if (mobileToggleBtnNew) {
            mobileToggleBtnNew.classList.remove('active');
            mobileToggleBtnNew.setAttribute('aria-expanded', 'false');
        }
        if (mobileBackdrop) {
            mobileBackdrop.classList.remove('show');
            mobileBackdrop.setAttribute('aria-hidden', 'true');
        }
        if (mobileNavCard) {
            mobileNavCard.classList.remove('card-open');
        }
    };

    if (mobileToggleBtnNew && mobileNavCard) {
        mobileToggleBtnNew.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = mobileNavCard.classList.toggle('card-open');
            mobileToggleBtnNew.classList.toggle('active', isOpen);
            mobileToggleBtnNew.setAttribute('aria-expanded', String(isOpen));
            if (mobileBackdrop) {
                mobileBackdrop.classList.toggle('show', isOpen);
                mobileBackdrop.setAttribute('aria-hidden', String(!isOpen));
            }
        });
    }
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileCardNav);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileCardNav);

    document.querySelectorAll('.card-accordion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isOpen = btn.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(isOpen));
            const arrow = btn.querySelector('.accordion-arrow');
            if (arrow) arrow.classList.toggle('rotated', isOpen);
            const submenu = btn.nextElementSibling;
            if (submenu && submenu.classList.contains('card-submenu')) {
                submenu.classList.toggle('submenu-open', isOpen);
            }
        });
    });

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
            const fileUrl = item.file ? buildMediaUrl(item.file, false) : '#';
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
    const gallerySection = document.getElementById('gallery');
    const galleryGrid = document.querySelector('.gallery-grid') || (gallerySection ? gallerySection.querySelector('.row') : null);
    async function initGallery() {
        if (!gallerySection && !galleryGrid) return;

        const data = await fetchData('/api/gallery');
        if (!data) return;

        const images = (data && typeof data === 'object') ? (Array.isArray(data) ? data : (data.results || data.images || [])) : [];
        if (images.length === 0) return;

        let targetRow = galleryGrid;
        if (!targetRow && gallerySection) {
            const container = gallerySection.querySelector('.container');
            const emptyState = container ? container.querySelector('.text-center.py-5') : null;
            if (emptyState) {
                targetRow = document.createElement('div');
                targetRow.className = 'row g-3 g-md-4';
                emptyState.replaceWith(targetRow);
            }
        }
        if (!targetRow) return;

        const countLabel = gallerySection ? gallerySection.querySelector('.text-muted.small.fw-medium') : null;
        if (countLabel) countLabel.textContent = `Showing ${images.length} Captured Moments`;

        let html = '';
        images.forEach((item, index) => {
            const rawSrc = typeof item === 'string' ? item : (item.url || item.image || '');
            const imgUrl = buildMediaUrl(rawSrc, true);
            html += `
            <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${(index % 4) * 60}">
                <a href="${imgUrl}" class="full-gallery-lightbox gallery-item-card d-block rounded-4 overflow-hidden position-relative shadow-sm text-decoration-none" data-gallery="state-gallery">
                    <div class="gallery-photo-wrapper">
                        <img src="${imgUrl}" alt="Gallery moment ${index + 1}" class="img-fluid w-100 h-100 photo-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80'">
                    </div>
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="zoom-circle-action shadow-lg">
                            <i class="bi bi-arrows-fullscreen"></i>
                        </div>
                    </div>
                </a>
            </div>`;
        });
        targetRow.innerHTML = html;

        if (window.GLightbox) {
            GLightbox({ selector: '.full-gallery-lightbox', touchNavigation: true, loop: true, zoomable: true });
        }
    }

    /**
     * LEADERS
     */
    const leadersSection = document.getElementById('leaders');
    async function initLeaders() {
        if (!leadersSection) return;

        const tabButtons = document.querySelectorAll('.leaders-control-bar button, .custom-tabs-section button');
        let cardsContainer = document.querySelector('#leaders .row.g-4');
        if (!cardsContainer) {
            const container = leadersSection.querySelector('.container');
            const emptyState = container ? container.querySelector('.text-center.py-5') : null;
            if (emptyState) {
                cardsContainer = document.createElement('div');
                cardsContainer.className = 'row g-4';
                emptyState.replaceWith(cardsContainer);
            }
        }
        
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
                if (imgUrl) {
                    imgUrl = buildMediaUrl(imgUrl, false);
                }
                if (!imgUrl) {
                    const namePrefix = leader.name ? leader.name.split(' ')[0] : 'Leader';
                    imgUrl = `https://placehold.co/400x400?text=${encodeURIComponent(namePrefix)}`;
                }

                html += `
                <div class="col-6 col-md-4 col-lg-3">
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

    /**
     * HOME PAGE GALLERY PREVIEW (synced with Gallery page /api/gallery)
     */
    const homeGalleryContainer = document.getElementById('home-gallery-container') || document.querySelector('#gallery-preview .row.g-4');
    async function initHomeGallery() {
        if (!homeGalleryContainer) return;

        let images = [];
        try {
            const data = await fetchData('/api/gallery');
            if (data && typeof data === 'object') {
                const list = Array.isArray(data) ? data : (data.results || data.images || []);
                if (list.length > 0) {
                    images = list.slice(0, 6);
                }
            }
        } catch (e) {
            console.error('Failed to load gallery preview:', e);
        }

        if (images.length === 0) {
            homeGalleryContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-images text-muted fs-1 d-block mb-2"></i>
                <h5 class="text-muted fw-bold">No photos currently available</h5>
                <p class="text-muted small mb-0">New event photographs will appear here shortly.</p>
            </div>`;
            return;
        }

        let html = '';
        images.forEach((item, index) => {
            const rawSrc = typeof item === 'string' ? item : (item.url || item.image || '');
            const imgUrl = buildMediaUrl(rawSrc, true);

            html += `
            <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${index * 80}">
                <a href="${imgUrl}" class="home-gallery-lightbox gallery-card d-block rounded-4 overflow-hidden position-relative shadow-sm text-decoration-none" data-gallery="home-gallery">
                    <div class="gallery-img-wrapper">
                        <img src="${imgUrl}" alt="Gallery moment ${index + 1}" class="img-fluid w-100 h-100 gallery-img" loading="lazy">
                    </div>
                    <div class="gallery-card-overlay d-flex align-items-center justify-content-center">
                        <div class="zoom-circle-btn shadow-lg">
                            <i class="bi bi-arrows-fullscreen"></i>
                        </div>
                    </div>
                </a>
            </div>`;
        });

        homeGalleryContainer.innerHTML = html;

        if (window.GLightbox) {
            GLightbox({ selector: '.home-gallery-lightbox', touchNavigation: true, loop: true, zoomable: true });
        }
    }

    /**
     * TESTIMONIALS AUTO-SLIDER
     */
    const testimonialsEl = document.querySelector('.testimonials-slider');
    if (testimonialsEl && window.Swiper) {
        new window.Swiper(testimonialsEl, {
            loop: true,
            speed: 700,
            spaceBetween: 24,
            slidesPerView: 1,
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 }
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.testimonials-slider .swiper-pagination',
                clickable: true,
                dynamicBullets: true
            }
        });
    }

    /**
     * HERO BACKGROUND CAROUSEL
     */
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    const heroBadgeText = document.querySelector('.hero-top-badge span:last-child');
    if (heroSlides.length > 1) {
        const heroTags = [
            'Visionary Leadership \u2022 Moral Excellence',
            'Empowering Students Across Kerala',
            '30+ Years of Educational Guidance'
        ];
        let currentHeroSlide = 0;
        setInterval(() => {
            heroSlides[currentHeroSlide].classList.remove('slide-active');
            heroSlides[currentHeroSlide].setAttribute('aria-hidden', 'true');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('slide-active');
            heroSlides[currentHeroSlide].setAttribute('aria-hidden', 'false');
            if (heroBadgeText && heroTags[currentHeroSlide]) {
                heroBadgeText.textContent = heroTags[currentHeroSlide];
            }
        }, 6500);
    }

    /**
     * ABOUT SECTION MISSION / VISION / VALUES PILLAR TABS
     */
    const pillarTabs = document.querySelectorAll('.about-creative-section .pillar-tab-btn');
    const pillarCard = document.querySelector('.about-creative-section .active-pillar-card');
    if (pillarTabs.length > 0 && pillarCard) {
        const pillars = [
            {
                title: 'Our Mission',
                subtitle: 'Moral & Spiritual Foundation',
                icon: 'bi-bullseye',
                color: '#0d83fd',
                description: 'Rooted in the principles of Samastha, we foster moral discipline, exemplary conduct, and meaningful student-mentor bonds across every madrassa unit.',
                points: ['Character & Adab building', 'Strong Ustad-Student camaraderie']
            },
            {
                title: 'Our Vision',
                subtitle: 'Future-Ready Leadership',
                icon: 'bi-eye-fill',
                color: '#10b981',
                description: 'Instilling authentic Islamic values while equipping young students with contemporary leadership, communication, and organizational skills for a brighter tomorrow.',
                points: ['Creative talent empowerment', 'Confident community leadership']
            },
            {
                title: 'Core Values',
                subtitle: 'Ahlussunnah Principles',
                icon: 'bi-shield-heart',
                color: '#f59e0b',
                description: "Upholding Ahlussunnah wal Jama'ah ideals, mutual respect, communal harmony, and unwavering dedication to authentic educational excellence.",
                points: ['Peace & communal amity', 'Authentic scholarly guidance']
            }
        ];

        pillarTabs.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                const p = pillars[idx];
                if (!p) return;
                pillarTabs.forEach((b, i) => b.classList.toggle('tab-active', i === idx));
                pillarCard.style.setProperty('--active-color', p.color);
                const leftBar = pillarCard.querySelector('.pillar-left-bar');
                if (leftBar) leftBar.style.background = p.color;
                const iconBox = pillarCard.querySelector('.active-pillar-icon');
                if (iconBox) {
                    iconBox.style.background = `${p.color}15`;
                    iconBox.style.color = p.color;
                    const iconEl = iconBox.querySelector('i');
                    if (iconEl) iconEl.className = `bi ${p.icon} fs-4`;
                }
                const titleEl = pillarCard.querySelector('h4');
                if (titleEl) titleEl.textContent = p.title;
                const subEl = pillarCard.querySelector('h4 + span');
                if (subEl) {
                    subEl.textContent = p.subtitle;
                    subEl.style.color = p.color;
                }
                const descEl = pillarCard.querySelector('p');
                if (descEl) descEl.textContent = p.description;
                const pointEls = pillarCard.querySelectorAll('.bi-check-circle-fill');
                pointEls.forEach((icon, i) => {
                    icon.style.color = p.color;
                    if (icon.nextElementSibling && p.points[i]) {
                        icon.nextElementSibling.textContent = p.points[i];
                    }
                });
            });
        });
    }

    if (window.AOS) {
        window.AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }

    // --- RUN EVERY PAGE INIT ---
    initNotifications();
    initCirculars();
    initGallery();
    initHomeGallery();
    initLeaders();

});

