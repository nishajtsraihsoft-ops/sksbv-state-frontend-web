import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "സയ്യിദ് സാദിഖലി ശിഹാബ് തങ്ങൾ",
            role: "",
            image: "/assets/img/shihab thangal.jpeg",
            text: "എസ്.കെ.എസ്.ബി.വി വിദ്യാർത്ഥികൾക്ക് ദിശാ ബോധം നൽകിയ പ്രസ്ഥാനം  ",
            stars: 5
        },
        {
            name: "സയ്യിദ് ഹമീദലി ശിഹാബ് തങ്ങൾ ",
            role: "",
            image: "/assets/img/sadikkali shihab thangal.jpeg",
            text: "എസ്.കെ.എസ്.ബി.വി പ്രായപൂർത്തി ആയ സമസ്തയുടെ പിന്നണി ",
            stars: 5
        },
        {
            name: "സത്താർ പന്തല്ലൂർ",
            role: "",
            image: "/assets/img/sathar pandallur.jpeg",
            text: "നല്ല അദബും അറിവുമുള്ള  വിദ്യാർത്ഥി സമൂഹത്തെ വളർത്തി കൊണ്ടുവരുന്നതിൽ എസ്.കെ.എസ്.ബി.വി വിജയം കണ്ടിട്ടുണ്ട് ",
            stars: 5
        },
        {
            name: "ശൈഖുനാ പ്രൊഫ.കെ ആലിക്കുട്ടി മുസ്‌ലിയാർ",
            role: "",
            image: "/assets/img/pro alikutty usthath.jpeg",
            text: "വിദ്യാർഥികൾ മറ്റുള്ളവർക് മാതൃകയാക്കാൻ പറ്റുന്ന തരത്തിൽ വളർന്ന് വരണം",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-redesign section py-5">
            <div className="container section-title text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Insights & Impact</h2>
                <p className="text-muted mx-auto px-3" style={{ maxWidth: '600px' }}>What our community says about SKSBV's mission and activities</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="testimonials-slider pb-5"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="testimonial-card p-4 rounded-4 shadow-sm border-0 transition-all h-100 position-relative overflow-hidden mb-2">
                                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-4 text-center text-sm-start">
                                    <div className="image-wrapper mb-3 mb-sm-0 me-sm-3">
                                        <img src={t.image} className="rounded-circle border border-2 border-white shadow-sm" style={{ width: '65px', height: '65px', objectFit: 'cover' }} alt={t.name}
                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0d83fd&color=fff`; }} />
                                    </div>
                                    <div>
                                        <h4 className="fw-bold mb-0 h6" style={{ color: 'var(--heading-color)' }}>{t.name}</h4>
                                        <div className="stars mt-1" style={{ color: '#f59e0b', fontSize: '10px' }}>
                                            {[...Array(t.stars)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="quote-content position-relative ps-4 mt-3">
                                    <i className="bi bi-quote position-absolute" style={{ fontSize: '1.8rem', top: '-8px', left: '0', color: 'var(--accent-color)', opacity: 0.3 }}></i>
                                    <p className="text-muted position-relative z-1 mb-0" style={{ fontSize: '15px', lineHeight: '1.7', fontStyle: 'italic' }}>
                                        {t.text}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .testimonial-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.03) !important;
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                }
                .testimonial-card:hover {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.06) !important;
                    background: #ffffff;
                }
                .testimonial-card:hover h4 {
                    color: var(--accent-color) !important;
                }
                .swiper-pagination-bullet-active {
                    background-color: var(--accent-color, #0d83fd) !important;
                }
                .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
