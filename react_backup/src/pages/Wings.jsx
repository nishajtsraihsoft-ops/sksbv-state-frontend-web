import React from 'react';
import PageTitle from '../components/common/PageTitle';

const Wings = () => {
    const wings = [
        {
            title: "Tech Admins",
            subtitle: "ടെക് അഡ്മിൻസ്",
            image: "/assets/img/techadminlogo.png",
            color: "#7209b7",
            gradient: "linear-gradient(135deg, #7209b7 0%, #b5179e 100%)",
            tags: ["Social Media", "Cyber Ethics", "Digital Coordination"],
            description: "കാലത്തിനൊപ്പം സാങ്കേതിക വിദ്യയും മുന്നേറിക്കൊണ്ടിരിക്കുകയാണ്. അതിനെ കീഴടക്കാനുള്ള നെട്ടോട്ടത്തിലാണ് ആധുനിക സമൂഹം. സാങ്കേതികവിദ്യ കൂടുതലായും ഉപയോഗിക്കുന്നത് വിദ്യാർത്ഥികളാണ്. അതിനെ ഫലപ്രദമായ രീതിയിൽ ഉപയോഗപ്പെടുത്താൻ വിദ്യാർത്ഥികളെ ബോധവൽക്കരിക്കുക എന്ന ലക്ഷ്യത്തോടെ എസ്.കെ.എസ്.ബി.വി. സംസ്ഥാന കമ്മിറ്റിയുടെ കീഴിൽ രൂപപ്പെടുത്തിയ വിംഗാണ് Tech Admins. സോഷ്യൽ മീഡിയ ശൃംഖലകളിലൂടെ സംഘടനയുടെ ചലനങ്ങൾ ലോകത്തെത്തിക്കുകയും നന്മയുടെ പ്രചാരകരാവുകയും ചെയ്യുക കൂടിയാണ് ലക്ഷ്യം."
        },
        {
            title: "Alif",
            subtitle: "അലിഫ്",
            image: "/assets/img/aliflogo.png",
            color: "#00b4d8",
            gradient: "linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)",
            imgPadding: "10px",
            tags: ["Higher Education", "Career Mentoring", "Civil Services"],
            description: "ആധുനിക വിദ്യാഭ്യാസ മേഖല വളരെയധികം മുന്നോട്ടു ചലിച്ചുകൊണ്ടിരിക്കുകയാണ്. വിദ്യാർത്ഥികൾക്ക് പരമ്പരാഗത മതവിദ്യാഭ്യാസത്തോടൊപ്പം ഉന്നത ഭൗതിക വിദ്യാഭ്യാസം എത്തിപ്പിടിക്കാനുള്ള നൂതനമാർഗ്ഗം നൽകുക എന്നതാണ് ‘അലിഫ്’ കൊണ്ടുദ്ദേശിക്കുന്നത്. സംഘടന ചെയ്തുകൊണ്ടിരിക്കുന്നതും ഭാവിയിൽ ചെയ്യാനുള്ളതുമായ വിദ്യാഭ്യാസ പ്രവർത്തനങ്ങളെ ശാസ്ത്രീയമായി ഏകോപിപ്പിക്കുകയാണ് അലിഫ് വിംഗ്."
        },
        {
            title: "Adab",
            subtitle: "അദബ്",
            image: "/assets/img/adablogo.png",
            color: "#2a9d8f",
            gradient: "linear-gradient(135deg, #1b4332 0%, #2a9d8f 100%)",
            imgPadding: "0",
            tags: ["Moral Conduct", "Spiritual Growth", "Discipline"],
            description: "കുട്ടികളുടെ സ്വഭാവ സംസ്കരണവും വിശ്വാസ സംരക്ഷണവും പ്രോത്സാഹിപ്പിക്കുന്ന രീതിയിൽ കർമ്മപദ്ധതികൾ തയ്യാറാക്കി നടപ്പിൽ വരുത്തുക എന്ന ലക്ഷ്യത്തോടെയാണ് സംഘടനയുടെ കീഴിൽ അദബ് വിംഗ് സംവിധാനിച്ചത്. ഉസ്താദുമാരെ ആദരിക്കാനും മാതാപിതാക്കളെ സേവിക്കാനും കുട്ടികളെ പ്രാപ്തരാക്കുന്ന സന്മാർഗ്ഗിക കൂട്ടായ്മയാണിത്."
        },
        {
            title: "Qidma",
            subtitle: "ഖിദ്മ",
            image: "/assets/img/hidmalogo.png",
            color: "#e63946",
            gradient: "linear-gradient(135deg, #e63946 0%, #ff4d6d 100%)",
            imgPadding: "0",
            tags: ["Community Service", "Charity & Care", "Volunteering"],
            description: "ലോകവും കാലവും മാറിക്കൊണ്ടിരിക്കുമ്പോൾ സമൂഹത്തോടും സഹജീവികളോടും പ്രതിബദ്ധതയുള്ള ഒരു പുതിയ തലമുറയെ വളർത്തിയെടുക്കാനാണ് ‘ഖിദ്മ’ എന്ന വിംഗിന് രൂപം നൽകുന്നത്. മദ്റസാ തലങ്ങളിൽ നടന്നുകൊണ്ടിരിക്കുന്ന സന്നദ്ധ സേവനങ്ങളെയും കാരുണ്യ പ്രവർത്തനങ്ങളെയും ഒരൊറ്റ കുടക്കീഴിൽ ഏകോപിപ്പിച്ച് സേവന സന്നദ്ധരാക്കുകയാണ് ഇതിന്റെ ദൗത്യം."
        }
    ];

    return (
        <main className="main">
            <PageTitle title="Our Specialized Wings" current="Wings" />

            <section id="wings" className="wings-section py-5 position-relative overflow-hidden">
                <div className="container position-relative z-1" data-aos="fade-up">
                    {/* Header intro */}
                    <div className="text-center mb-5">
                        <span className="badge-pill-modern mb-3">
                            <span className="badge-pill-dot"></span>
                            <span>Wings of Excellence</span>
                        </span>
                        <h2 className="fw-bold responsive-h2 mb-2" style={{ color: 'var(--heading-color)', letterSpacing: '-0.5px' }}>
                            Four Pillars of Student Development
                        </h2>
                        <p className="text-muted mx-auto px-2" style={{ maxWidth: '640px', fontSize: '1.025rem' }}>
                            Specialized directorates structured to nurture technology, higher education, moral discipline, and community service.
                        </p>
                    </div>

                    {/* Wings Grid */}
                    <div className="row g-4 g-lg-5">
                        {wings.map((wing, index) => (
                            <div className="col-12 col-lg-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="wing-card h-100 p-4 p-md-5 rounded-5 border bg-white shadow-sm position-relative overflow-hidden transition-all hover-lift">
                                    {/* Top Color Accent Line */}
                                    <div className="wing-top-bar" style={{ background: wing.gradient }}></div>

                                    <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start mb-4">
                                        <div 
                                            className="wing-img-wrapper rounded-circle shadow-sm me-sm-4 mb-3 mb-sm-0 d-flex align-items-center justify-content-center overflow-hidden flex-shrink-0"
                                            style={{ 
                                                width: '90px', 
                                                height: '90px', 
                                                border: `3px solid ${wing.color}30`,
                                                background: `${wing.color}10`,
                                                padding: wing.imgPadding || '4px'
                                            }}
                                        >
                                            <img 
                                                src={wing.image} 
                                                alt={wing.title} 
                                                className="img-fluid rounded-circle" 
                                                style={{ width: '100%', height: '100%', objectFit: wing.title === 'Alif' ? 'contain' : 'cover' }} 
                                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100?text=' + wing.title; }}
                                            />
                                        </div>

                                        <div className="flex-grow-1">
                                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start gap-2">
                                                <h3 className="mb-0 fw-bold" style={{ color: 'var(--heading-color)', fontSize: '1.65rem' }}>
                                                    {wing.title}
                                                </h3>
                                                <span className="badge px-3 py-1 rounded-pill shadow-xs fw-bold" style={{ background: wing.gradient, color: '#fff', fontSize: '11px' }}>
                                                    {wing.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Body */}
                                    <div className="wing-body">
                                        <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.8' }}>
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
                        background: #f8fafc;
                    }
                    .wing-card {
                        border: 1px solid rgba(0, 0, 0, 0.05) !important;
                    }
                    .wing-top-bar {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 5px;
                    }
                `}</style>
            </section>
        </main>
    );
};

export default Wings;
