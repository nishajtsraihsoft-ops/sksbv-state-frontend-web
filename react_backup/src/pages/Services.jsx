import React from 'react';
import PageTitle from '../components/common/PageTitle';
import ServicesSection from '../components/sections/ServicesSection';

const Services = () => {
    return (
        <main className="main">
            <PageTitle title="Services" current="Services" />
            <ServicesSection />
        </main>
    );
};

export default Services;
