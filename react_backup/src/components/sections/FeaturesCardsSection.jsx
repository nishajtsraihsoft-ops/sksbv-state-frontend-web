import React from 'react';

const FeaturesCardsSection = () => {
    return (
        <section id="features-cards" className="features-cards section">
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                        <div className="feature-box orange text-center h-100">
                            <i className="bi bi-award"></i>
                            <h4>Corporis voluptates</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="feature-box blue text-center h-100">
                            <i className="bi bi-patch-check"></i>
                            <h4>Explicabo consectetur</h4>
                            <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div className="feature-box green text-center h-100">
                            <i className="bi bi-sunrise"></i>
                            <h4>Ullamco laboris</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div className="feature-box red text-center h-100">
                            <i className="bi bi-shield-check"></i>
                            <h4>Labore consequatur</h4>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesCardsSection;
