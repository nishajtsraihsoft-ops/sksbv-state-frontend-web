import React from 'react';
import PageTitle from '../components/common/PageTitle';
import FeaturesTabsSection from '../components/sections/FeaturesTabsSection';
import FeaturesCardsSection from '../components/sections/FeaturesCardsSection';
import Features2Section from '../components/sections/Features2Section';

const Features = () => {
    return (
        <main className="main">
            <PageTitle title="Features" current="Features" />
            <FeaturesTabsSection />
            <FeaturesCardsSection />
            <Features2Section />
        </main>
    );
};

export default Features;
