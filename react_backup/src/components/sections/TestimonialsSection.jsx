import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "സയ്യിദ് സാദിഖലി ശിഹാബ് തങ്ങൾ",
            role: "പ്രസിഡന്റ്, മുസ്ലിം ലീഗ് സംസ്ഥാന കമ്മിറ്റി",
            image: "/assets/img/shihab thangal.jpeg",
            text: "എസ്.കെ.എസ്.ബി.വി വിദ്യാർത്ഥികൾക്ക് കൃത്യമായ ദിശാബോധവും സംസ്കാരവും നൽകിയ അതുല്യമായ പ്രസ്ഥാനമാണ്.",
            stars: 5
        },
        {
            name: "സയ്യിദ് ഹമീദലി ശിഹാബ് തങ്ങൾ",
            role: "മുൻ സംസ്ഥാന പ്രസിഡന്റ്, എസ്.കെ.എസ്.ബി.വി",
            image: "/assets/img/sadikkali shihab thangal.jpeg",
            text: "എസ്.കെ.എസ്.ബി.വി പ്രായപൂർത്തിയായ സമസ്തയുടെ കരുത്തുറ്റ യുവനിരയും ആദർശത്തിന്റെ കാവലാളുകളുമാണ്.",
            stars: 5
        },
        {
            name: "സത്താർ പന്തല്ലൂർ",
            role: "പ്രമുഖ പ്രഭാഷകൻ & നേതാവ്",
            image: "/assets/img/sathar pandallur.jpeg",
            text: "നല്ല അദബും ഉന്നതമായ അറിവുമുള്ള വിദ്യാർത്ഥി സമൂഹത്തെ സമന്വയിപ്പിച്ചു വളർത്തിയെടുക്കുന്നതിൽ എസ്.കെ.എസ്.ബി.വി വൻ വിജയം കണ്ടിട്ടുണ്ട്.",
            stars: 5
        },
        {
            name: "ശൈഖുനാ പ്രൊഫ. കെ. ആലിക്കുട്ടി മുസ്‌ലിയാർ",
            role: "ജനറൽ സെക്രട്ടറി, സമസ്ത കേരള ജംഇയ്യത്തുൽ ഉലമ",
            image: "/assets/img/pro alikutty usthath.jpeg",
            text: "വിദ്യാർത്ഥികൾ സമൂഹത്തിന് ഉത്തമ മാതൃകയാവുന്ന വിധം ജീവിതവിശുദ്ധിയും അച്ചടക്കവും പുലർത്തി മുന്നേറണം.",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-redesign section py-5 position-relative overflow-hidden">
            <div className="container position-relative z-1" data-aos="fade-up">
                <div className="section-title text-center mb-4 mb-md-5">
                    <span className="badge-pill-modern mb-3">
                        <span className="badge-pill-dot"></span>
                        <span>Inspiring Words</span>
                    </span>
                    <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                        Insights & Blessings
                    </h2>
                    <p className="text-muted mx-auto px-2" style={{ maxWidth: '620px', fontSize: '1.025rem' }}>
                        Reflections and guidance from eminent scholars, patron leaders, and well-wishers.
                    </p>
                </div>

                <div className="px-1 px-md-3">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        speed={5000}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 }
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="testimonials-slider pb-5"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                <div className="testimonial-card p-4 p-md-5 rounded-4 shadow-sm border bg-white transition-all h-100 d-flex flex-column justify-content-between position-relative overflow-hidden mb-2">
                                    <div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="image-wrapper me-3 flex-shrink-0">
                                                <img 
                                                    src={t.image} 
                                                    className="rounded-circle border border-2 border-primary-subtle shadow-sm" 
                                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }} 
                                                    alt={t.name}
                                                    onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0d83fd&color=fff`; }} 
                                                />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-1" style={{ color: 'var(--heading-color)', fontSize: '1.05rem' }}>{t.name}</h4>
                                                {t.role && <p className="text-muted small mb-1">{t.role}</p>}
                                                <div className="stars" style={{ color: '#f59e0b', fontSize: '11px' }}>
                                                    {[...Array(t.stars)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="quote-content position-relative ps-4 mt-2">
                                            <i className="bi bi-quote position-absolute" style={{ fontSize: '2rem', top: '-12px', left: '0', color: 'var(--accent-color, #0d83fd)', opacity: 0.35 }}></i>
                                            <p className="text-muted position-relative z-1 mb-0" style={{ fontSize: '15.5px', lineHeight: '1.75', fontStyle: 'italic' }}>
                                                “{t.text}”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style>{`
                .testimonials-redesign {
                    background: #ffffff;
                }
                .testimonials-slider .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                .testimonial-card {
                    border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 16px 35px -8px rgba(13, 131, 253, 0.12) !important;
                    border-color: rgba(13, 131, 253, 0.25) !important;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
