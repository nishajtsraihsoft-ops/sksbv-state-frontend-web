import React from 'react';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/sections/ContactSection';

const Contact = () => {
    return (
        <main className="main">
            <PageTitle title="Contact" current="Contact" />
            <ContactSection />
        </main>
    );
};

export default Contact;
