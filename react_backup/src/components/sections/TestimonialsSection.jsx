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
            image: `${import.meta.env.BASE_URL}assets/img/shihab thangal.jpeg`,
            text: "എസ്.കെ.എസ്.ബി.വി വിദ്യാർത്ഥികൾക്ക് ദിശാ ബോധം നൽകിയ പ്രസ്ഥാനം  ",
            stars: 5
        },
        {
            name: "സയ്യിദ് ഹമീദലി ശിഹാബ് തങ്ങൾ ",
            role: "",
            image: `${import.meta.env.BASE_URL}assets/img/sadikkali shihab thangal.jpeg`,
            text: "എസ്.കെ.എസ്.ബി.വി പ്രായപൂർത്തി ആയ സമസ്തയുടെ പിന്നണി ",
            stars: 5
        },
        {
            name: "സത്താർ പന്തല്ലൂർ",
            role: "",
            image: `${import.meta.env.BASE_URL}assets/img/sathar pandallur.jpeg`,
            text: "നല്ല അദബും അറിവുമുള്ള  വിദ്യാർത്ഥി സമൂഹത്തെ വളർത്തി കൊണ്ടുവരുന്നതിൽ എസ്.കെ.എസ്.ബി.വി വിജയം കണ്ടിട്ടുണ്ട് ",
            stars: 5
        },
        {
            name: "ശൈഖുനാ പ്രൊഫ.കെ ആലിക്കുട്ടി മുസ്‌ലിയാർ",
            role: "",
            image: `${import.meta.env.BASE_URL}assets/img/pro alikutty usthath.jpeg`,
            text: "വിദ്യാർഥികൾ മറ്റുള്ളവർക് മാതൃകയാക്കാൻ പറ്റുന്ന തരത്തിൽ വളർന്ന് വരണം",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-redesign section py-4 py-md-5">
            <div className="container section-title text-center mb-4 mb-md-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Insights & Impact</h2>
                <p className="text-muted mx-auto px-3" style={{ maxWidth: '600px' }}>What our community says about SKSBV's mission and activities</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 2, spaceBetween: 30 }
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="testimonials-slider pb-5"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="testimonial-card p-3 p-sm-4 rounded-4 shadow-sm border-0 transition-all h-100 position-relative overflow-hidden mb-2">
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <div className="image-wrapper me-3 flex-shrink-0">
                                        <img src={t.image} className="rounded-circle border border-2 border-white shadow-sm" style={{ width: '56px', height: '56px', objectFit: 'cover' }} alt={t.name}
                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0d83fd&color=fff`; }} />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '15px' }}>{t.name}</h4>
                                        <div className="stars mt-1" style={{ color: '#f59e0b', fontSize: '10px' }}>
                                            {[...Array(t.stars)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="quote-content position-relative ps-3 ps-sm-4 mt-2">
                                    <i className="bi bi-quote position-absolute" style={{ fontSize: '1.5rem', top: '-6px', left: '0', color: 'var(--accent-color)', opacity: 0.35 }}></i>
                                    <p className="text-muted position-relative z-1 mb-0" style={{ fontSize: '14.5px', lineHeight: '1.65', fontStyle: 'italic' }}>
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
                    border: 1px solid rgba(0,0,0,0.04) !important;
                    display: flex;
                    flex-direction: column;
                }
                .testimonial-card:hover {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.06) !important;
                    background: #ffffff;
                }
                @media (max-width: 575px) {
                    .testimonial-card {
                        padding: 1.25rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
