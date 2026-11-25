import React from 'react';
import PageTitle from '../components/common/PageTitle';

const Wings = () => {
    const wings = [
        {
            title: "Tech Admins",
            subtitle: "ടെക് അഡ്മിൻസ്",
            image: `${import.meta.env.BASE_URL}assets/img/techadminlogo.png`,
            color: "#7209b7",
            description: "കാലത്തിനൊപ്പം സാങ്കേതിക വിദ്യയും മുന്നേറിക്കൊണ്ടിരിക്കുകയാണ്. അതിനെകീഴടക്കാനുള്ള നെട്ടോട്ടത്തിലാണ് ആധുനിക സമൂഹം. സാങ്കേതിവിദ്യ കൂടുതലായും ഉപയോഗിക്കുന്നത് വിദ്യാര്ത്ഥികളാണ്. അതിനെ ഫലപ്രദമായ രീതിയിൽ ഉപയോഗപ്പെടുത്താൻ വിദ്യാര്ത്ഥികളെ ബോധവല്ക്കരിക്കുക, എന്ന ലക്ഷ്യത്തോടെ എസ്.കെ.എസ്.ബി.വി. സംസ്ഥാന കമ്മിറ്റിയുടെ കീഴില് രൂപപ്പെടുത്തിയ വിംഗാണ് tech admins. ഇന്ന് ലോകത്ത് അറിയപ്പെടുന്ന സാമൂഹ്യ മാധ്യമ ശൃംഘലകളായ ഫെയ്സ്ബുക്ക്, വാട്സ്ആപ്പ്, ഇമെയില്, വെബ്സൈറ്റ് തുടങ്ങിയ അഞ്ച് മേഖലകളിലൂടെ ഈ സംഘത്തിന്റെ ചലനങ്ങൾ പുറം ലോകത്തെത്തിക്കുക കൂടിയാണ് ലക്ഷ്യം."
        },
        {
            title: "Alif",
            subtitle: "അലിഫ്",
            image: `${import.meta.env.BASE_URL}assets/img/aliflogo.png`,
            color: "#00b4d8",
            imgPadding: "15px",
            description: "ആധുനിക വിദ്യാഭ്യാസ മേഖല വളരെയധികം മുന്നോട്ടു ചലിച്ചുകൊണ്ടിരിക്കുകയാണ്. വീട്ടിലിരുന്ന് വിരല്തുമ്പ് കൊണ്ട് അറിവ് നേടാവുന്ന വിധം മാറ്റങ്ങള് വന്നുകൊണ്ടിരിക്കുന്നു. വിദ്യാഭ്യാസ പ്രവർത്തനങ്ങളുടെ പ്രസക്തി ഏറിവരുന്ന സാഹചര്യത്തിലാണ് ’അലിഫ്’ എന്ന വിദ്യാഭ്യാസ വിംഗന് രൂപം നല്കുന്നത്. മതവിദ്യാഭ്യാസത്തോടൊപ്പം ഭൗതികവിദ്യാഭ്യാസം എത്തിപ്പിടിക്കാനുള്ള നൂതനമാര്ഗം വിദ്യാര്ത്ഥികള്ക്ക് നല്കുക എന്നതാണ് ‘അലിഫ്’ കൊണ്ടുദ്ദേശിക്കുന്നത്. സംഘടന ചെയതു കൊണ്ടിരിക്കുന്നതും ചെയ്യാനുള്ളതുമായ പ്രവർത്തനങ്ങളെ ഒരു വിംഗിന് കീഴിൽ ഏകോപിപ്പിക്കുകയാണ് അലിഫ്."
        },
        {
            title: "Adab",
            subtitle: "അദബ്",
            image: `${import.meta.env.BASE_URL}assets/img/adablogo.png`,
            color: "#2a9d8f",
            imgPadding: "0",
            description: "കുട്ടികളുട സ്വഭാവ സംസ്കരണവും വിശ്വാസ സംരക്ഷണവും പ്രോത്സാഹിപ്പിക്കുന്ന രീതിയില് പദ്ധതികള് തയ്യാറാക്കി നടപ്പില് വരുത്തുക എന്ന ലക്ഷ്യത്തോടെയാന്ന് സംഘടനയുടെ കീഴിൽ അദബ് വിംഗ് സംവിധാനിച്ചത്. അവസരോചിതമായി പല പ്രവര്ത്തനങ്ങളും നടത്തിവരുന്നു."
        },
        {
            title: "Qidma",
            subtitle: "ഖിദ്മ",
            image: `${import.meta.env.BASE_URL}assets/img/hidmalogo.png`,
            color: "#ff4d6d",
            imgPadding: "0",
            description: "ലോകവും കാലവും മാറിക്കൊണ്ടിരിക്കുമ്പോൾ സമൂഹത്തോടും സമുദായത്തോടും മുഖം തിരിക്കുന്ന ഇളം തലമുറയെ നാടിനും സമൂഹത്തിന്നും ഉപകാരപ്പെടുന്ന പ്രവര്ത്തനങ്ങളിലൂടെ പഠനത്തോടൊപ്പം അവരെ സന്നദ്ധ സേവന രംഗത്തേക്ക് വഴി നടത്താനാണ് ’ഖിദ്മ’ എന്ന വിംഗിനു രൂപം നല്കുന്നത്. മദ്റസ തലങ്ങളിൽ നടന്നുകൊണ്ടിരിക്കുന്ന സോഷ്യല് വർക്കുകളെ ഒരു വിംഗിന്റെ നേതൃത്വത്തില് ഏകീകരിച്ചു കൊണ്ടിരിക്കുന്നു."
        }
    ];

    return (
        <main className="main">
            <PageTitle title="Our Wings" current="Wings" />

            <section id="wings" className="wings-section py-4 py-md-5 position-relative overflow-hidden">
                {/* Decorative background Elements */}
                <div className="bg-decoration decoration-1"></div>
                <div className="bg-decoration decoration-2"></div>

                <div className="container position-relative" data-aos="fade-up">
                    <div className="row g-4 g-lg-5">
                        {wings.map((wing, index) => (
                            <div className="col-lg-6" key={index} data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                                <div className="wing-card h-100 p-3 p-sm-4 rounded-4 border-0 shadow-sm position-relative overflow-hidden">
                                    <div className="card-accent" style={{ backgroundColor: wing.color }}></div>

                                    <div className="d-flex align-items-center mb-3 mb-sm-4">
                                        <div className="wing-img-wrapper rounded-circle shadow-sm me-3 d-flex align-items-center justify-content-center overflow-hidden"
                                            style={{ 
                                                background: `linear-gradient(135deg, ${wing.color}08, ${wing.color}15)`, 
                                                width: '80px', 
                                                height: '80px', 
                                                border: `2px solid ${wing.color}22`,
                                                padding: wing.imgPadding || '0'
                                            }}>
                                            <img src={wing.image} alt={wing.title} className="img-fluid rounded-circle" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: wing.title === 'Alif' ? 'contain' : 'cover' 
                                                }} />
                                        </div>
                                        <div>
                                            <h3 className="mb-0 fw-bold" style={{ color: 'var(--heading-color)', fontSize: '1.4rem' }}>{wing.title}</h3>
                                            <span className="badge mt-1 px-2 py-1 rounded-pill shadow-sm text-uppercase fw-semibold"
                                                style={{ background: wing.color, color: '#fff', fontSize: '11px' }}>
                                                {wing.subtitle}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="wing-content">
                                        <p className="description text-muted mb-0" style={{ textAlign: 'left', lineHeight: '1.7', fontSize: '15px' }}>
                                            {wing.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    .wings-section {
                        background-color: #f8fafc;
                        min-height: 80vh;
                    }
                    .bg-decoration {
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(80px);
                        opacity: 0.15;
                        z-index: 0;
                    }
                    .decoration-1 {
                        width: 400px;
                        height: 400px;
                        background: #3b82f6;
                        top: -100px;
                        right: -100px;
                    }
                    .decoration-2 {
                        width: 300px;
                        height: 300px;
                        background: #10b981;
                        bottom: -50px;
                        left: -50px;
                    }
                    .wing-card {
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        border: 1px solid rgba(0, 0, 0, 0.04);
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                    }
                    .wing-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
                        background: #fff;
                    }
                    .card-accent {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 5px;
                    }
                    .wing-img-wrapper {
                        transition: all 0.3s ease;
                        flex-shrink: 0;
                    }
                    .wing-content {
                        flex-grow: 1;
                    }
                    .wing-card:hover .wing-img-wrapper {
                        transform: scale(1.05);
                    }
                    
                    @media (max-width: 575px) {
                        .wing-card {
                            padding: 1.25rem !important;
                        }
                        .wing-img-wrapper {
                            width: 64px !important;
                            height: 64px !important;
                        }
                        .wing-card h3 {
                            font-size: 1.2rem !important;
                        }
                        .description {
                            font-size: 14px !important;
                            line-height: 1.65 !important;
                        }
                    }
                `}</style>
            </section>
        </main>
    );
};

export default Wings;
