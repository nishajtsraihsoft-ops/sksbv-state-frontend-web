import React from 'react';
import PageTitle from '../components/common/PageTitle';
import AboutSection from '../components/sections/AboutSection';
import StatsSection from '../components/sections/StatsSection';
import ValuesSection from '../components/sections/ValuesSection';
import MilestonesSection from '../components/sections/MilestonesSection';
import LegacyOfLeadershipSection from '../components/sections/LegacyOfLeadershipSection';

const About = () => {
    return (
        <main className="main">
            <PageTitle title="About Us" current="About" />
            <AboutSection />
            <ValuesSection />
            <MilestonesSection />
            <LegacyOfLeadershipSection />
            <StatsSection />
        </main>
    );
};

export default About;
