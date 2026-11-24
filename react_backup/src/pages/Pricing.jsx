import React from 'react';
import PageTitle from '../components/common/PageTitle';
import PricingSection from '../components/sections/PricingSection';
import FaqSection from '../components/sections/FaqSection';

const Pricing = () => {
    return (
        <main className="main">
            <PageTitle title="Pricing" current="Pricing" />
            <PricingSection />
            <FaqSection />
        </main>
    );
};

export default Pricing;
