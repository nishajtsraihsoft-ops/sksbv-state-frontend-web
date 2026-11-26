import React from 'react';
import NotificationTicker from '../components/common/NotificationTicker';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ValuesSection from '../components/sections/ValuesSection';
import GallerySection from '../components/sections/GallerySection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
    return (
        <main className="main">
            <Hero />
            <NotificationTicker />
            <AboutSection />
            <ValuesSection />
            <GallerySection />
            <ActivitiesSection />
            <TestimonialsSection />
        </main>
    );
};

export default Home;
