import React from 'react';

const FeaturesTabsSection = () => {
    return (
        <section id="features" className="features section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center mb-4">
                    <ul className="nav nav-tabs flex-column flex-sm-row" data-aos="fade-up" data-aos-delay="100">
                        <li className="nav-item">
                            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                                <h4 className="mb-0">Modisit</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                                <h4 className="mb-0">Praesenti</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                                <h4 className="mb-0">Explica</h4>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="tab-pane fade active show" id="features-tab-1">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                                <h3 className="responsive-h2">Voluptatem dignissimos provident</h3>
                                <p className="fst-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Duis aute irure dolor in reprehenderit in
                                        voluptate velit.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="/assets/img/features-illustration-1.webp" alt="" className="img-fluid rounded-4 shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="features-tab-2">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                                <h3 className="responsive-h2">Neque exercitationem debitis</h3>
                                <p className="fst-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Duis aute irure dolor in reprehenderit in
                                        voluptate velit.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Provident mollitia neque rerum asperiores
                                        dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="/assets/img/features-illustration-2.webp" alt="" className="img-fluid rounded-4 shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="features-tab-3">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                                <h3 className="responsive-h2">Voluptatibus commodi accusamu</h3>
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Duis aute irure dolor in reprehenderit in
                                        voluptate velit.</span></li>
                                    <li className="d-flex align-items-start mb-3"><i className="bi bi-check2-all text-primary me-3 fs-5"></i> <span>Provident mollitia neque rerum asperiores
                                        dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                                </ul>
                                <p className="fst-italic text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="/assets/img/features-illustration-3.webp" alt="" className="img-fluid rounded-4 shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesTabsSection;
