import React from 'react';

const ServicesSection = () => {
    return (
        <section id="services" className="services section light-background">
            {/* Section Title */}
            <div className="container section-title text-center" data-aos="fade-up">
                <h2 className="responsive-h2">Services</h2>
                <p className="mx-auto" style={{ maxWidth: '600px' }}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card d-flex flex-column flex-sm-row text-center text-sm-start align-items-center align-items-sm-start h-100 p-4 rounded-4 shadow-sm">
                            <div className="icon flex-shrink-0 mb-3 mb-sm-0 me-sm-4">
                                <i className="bi bi-activity"></i>
                            </div>
                            <div>
                                <h3 className="h5 fw-bold">Nesciunt Mete</h3>
                                <p className="mb-3">Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus
                                    dolores iure perferendis tempore et consequatur.</p>
                                <a href="#" className="read-more fw-semibold">Read More <i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card d-flex flex-column flex-sm-row text-center text-sm-start align-items-center align-items-sm-start h-100 p-4 rounded-4 shadow-sm">
                            <div className="icon flex-shrink-0 mb-3 mb-sm-0 me-sm-4">
                                <i className="bi bi-diagram-3"></i>
                            </div>
                            <div>
                                <h3 className="h5 fw-bold">Eosle Commodi</h3>
                                <p className="mb-3">Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque
                                    eum hic non ut nesciunt dolorem.</p>
                                <a href="#" className="read-more fw-semibold">Read More <i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card d-flex flex-column flex-sm-row text-center text-sm-start align-items-center align-items-sm-start h-100 p-4 rounded-4 shadow-sm">
                            <div className="icon flex-shrink-0 mb-3 mb-sm-0 me-sm-4">
                                <i className="bi bi-easel"></i>
                            </div>
                            <div>
                                <h3 className="h5 fw-bold">Ledo Markt</h3>
                                <p className="mb-3">Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                                <a href="#" className="read-more fw-semibold">Read More <i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card d-flex flex-column flex-sm-row text-center text-sm-start align-items-center align-items-sm-start h-100 p-4 rounded-4 shadow-sm">
                            <div className="icon flex-shrink-0 mb-3 mb-sm-0 me-sm-4">
                                <i className="bi bi-clipboard-data"></i>
                            </div>
                            <div>
                                <h3 className="h5 fw-bold">Asperiores Commodit</h3>
                                <p className="mb-3">Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea
                                    fuga sit provident adipisci neque.</p>
                                <a href="#" className="read-more fw-semibold">Read More <i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
