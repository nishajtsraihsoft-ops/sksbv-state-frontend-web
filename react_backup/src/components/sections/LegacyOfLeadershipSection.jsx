import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const legacyData = [
    {
        period: "1993 – 2003",
        president: "Panakkad Sayyid Hameedali Shihab Thangal (1993–2008)",
        secretary: "Alavikkutty Faizi Muthuvalloor (1993–2003)",
        treasurer: "Abdul Khader Maulavi (1993–2003)"
    },
    {
        period: "2003 – 2005",
        president: "Panakkad Sayyid Hameedali Shihab Thangal",
        secretary: "Shafi Elathur (2003–2005)",
        treasurer: "O.M. Ahmed Kutty Maulavi (2003–2005)"
    },
    {
        period: "2006 – 2008",
        president: "Panakkad Sayyid Hameedali Shihab Thangal",
        secretary: "Midlaj Kidangazhi (2006–2008)",
        treasurer: "Majeed Master Kodakkad (2006–2009)"
    },
    {
        period: "2009 – 2011",
        president: "Panakkad Sayyid Munavvarali Shihab Thangal (2009–2011)",
        secretary: "Rasheed Munder (2009–2011)",
        treasurer: "Shamsad Saleem (2009–2011)"
    },
    {
        period: "2012 – 2014",
        president: "Panakkad Sayyid Muin Ali Shihab Thangal (2012–2016)",
        secretary: "Shamsad Saleem (2012–2014)",
        treasurer: "Shafeeq Mannanchery (2012–2014)"
    },
    {
        period: "2014 – 2016",
        president: "Panakkad Sayyid Muin Ali Shihab Thangal",
        secretary: "Shafeeq Mannanchery (2014–2016)",
        treasurer: "Ameen Thiruvananthapuram (2014–2016)"
    },
    {
        period: "2016 – 2018",
        president: "Panakkad Sayyid Aseel Ali Shihab Thangal (2017–2021)",
        secretary: "Afsal Ramanthali (2016–2018)",
        treasurer: "Manaf Kottoppadam (2016–2018)"
    },
    {
        period: "2019 – 2021",
        president: "Panakkad Sayyid Aseel Ali Shihab Thangal",
        secretary: "Rabiudheen Venniyoor (2019–2021)",
        treasurer: "Aslah Muthuvalloor (2019–2021)"
    },
    {
        period: "2021 – 2024",
        president: "Panakkad Sayyid Rajih Ali Shihab Thangal (2021–2024)",
        secretary: "Shafi Dwaraka (2021–2024)",
        treasurer: "Jaseeb Velimukku (2021–2024)"
    },
    {
        period: "2024 – Present",
        president: "Panakkad Sayyid Miyas Ali Shihab Thangal (2024–Present)",
        secretary: "Harshad Kuttikkadavu (2024–Present)",
        treasurer: "Sayyid Ali Unais Jamalul Laili (2024–Present)"
    }
];

const LegacyOfLeadershipSection = () => {
    return (
        <section className="legacy-section py-5 bg-light">
            <div className="container section-title text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold responsive-h2" style={{ color: 'var(--heading-color)' }}>Legacy of Leadership</h2>
                <div className="mx-auto" style={{ width: '50px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '15px 0' }}></div>
                <p className="text-muted mx-auto px-3" style={{ maxWidth: '600px' }}>
                    Honoring the dedicated leaders who have guided our journey through the years.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="legacy-slider pb-5"
                >
                    {legacyData.map((era, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="legacy-small-box p-3 rounded-4 bg-white shadow-sm border-0 h-100 transition-all text-center position-relative overflow-hidden group mb-2">
                                {/* Decorative background accent */}
                                <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, var(--accent-color), #0056b3)' }}></div>

                                <div className="period-badge d-inline-block px-3 py-1 rounded-pill mb-3 mt-2" style={{ backgroundColor: 'rgba(13, 131, 253, 0.08)', color: 'var(--accent-color)', fontWeight: '700', fontSize: '13px', letterSpacing: '0.5px' }}>
                                    {era.period}
                                </div>

                                <div className="leadership-details d-flex flex-column gap-2 mb-2">
                                    <div className="role-block">
                                        <div className="text-muted text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '700' }}>President</div>
                                        <div className="fw-bold text-dark text-truncate px-2" style={{ fontSize: '14px' }} title={era.president}>
                                            {era.president.replace(/ \(.*?\)/, '')}
                                        </div>
                                    </div>

                                    <div className="role-block">
                                        <div className="text-muted text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '700' }}>Secretary</div>
                                        <div className="fw-medium text-secondary text-truncate px-2" style={{ fontSize: '13px' }} title={era.secretary}>
                                            {era.secretary.replace(/ \(.*?\)/, '')}
                                        </div>
                                    </div>

                                    <div className="role-block">
                                        <div className="text-muted text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '700' }}>Treasurer</div>
                                        <div className="fw-medium text-secondary text-truncate px-2" style={{ fontSize: '13px' }} title={era.treasurer}>
                                            {era.treasurer.replace(/ \(.*?\)/, '')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .legacy-small-box {
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .legacy-small-box:hover {
                    box-shadow: 0 15px 30px rgba(13, 131, 253, 0.12) !important;
                    transform: translateY(-5px);
                    background-color: #f8fbff !important;
                }
                .text-truncate {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .role-block {
                    position: relative;
                }
                .legacy-small-box:hover .period-badge {
                    background-color: var(--accent-color) !important;
                    color: white !important;
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

export default LegacyOfLeadershipSection;
