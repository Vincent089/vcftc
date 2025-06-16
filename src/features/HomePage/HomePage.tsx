import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import ServicesHighlightSection from './components/ServicesHighlightSection/ServicesHighlightSection';
// import TechStackSection from './components/TechStackSection/TechStackSection';
import ContactPromptSection from './components/ContactPromptSection/ContactPromptSection';
import EngagementModelSection from "./components/EngagementModelSection/EngagementModelSection";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection/>
            <AboutMeSection/>
            <ServicesHighlightSection/>
            <EngagementModelSection/>
            {/*
            <TechStackSection />
            */}
            <ContactPromptSection />
        </>
    );
};

export default HomePage;