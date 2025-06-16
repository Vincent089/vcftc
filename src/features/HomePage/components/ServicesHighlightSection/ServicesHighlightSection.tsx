import React from 'react';
import Section from '../../../../components/common/Section/Section';
import styles from './ServicesHighlightSection.module.css';

interface ServiceHighlight {
    id: string;
    icon: string | React.ReactNode; // Allow for emoji or SVG/component icons
    title: string;
    description: string;
}

const serviceHighlightsData: ServiceHighlight[] = [
    {
        id: 'automation',
        icon: '⚙️', // Placeholder icon (e.g., gear for automation)
        title: 'Automating Repetitive Tasks',
        description: 'Freeing up your team to focus on core business activities and strategic growth.',
    },
    {
        id: 'efficiency',
        icon: '🚀', // Placeholder icon (e.g., rocket for acceleration)
        title: 'Enhancing Operational Efficiency',
        description: 'Implementing custom tools that reduce manual errors, accelerate processes, and improve workflows.',
    },
    {
        id: 'tailored',
        icon: '🧩', // Placeholder icon (e.g., puzzle piece for custom fit)
        title: 'Delivering Tailored Solutions',
        description: 'Building tools specifically designed to meet your unique business needs and integrate seamlessly with existing systems.',
    },
    {
        id: 'guidance',
        icon: '💡', // Placeholder icon (e.g., lightbulb for expertise)
        title: 'Providing Expert Guidance',
        description: 'Leveraging deep technical knowledge in software architecture to build robust, scalable, and future-proof FinTech solutions.',
    },
];

const ServicesHighlightSection: React.FC = () => {
    return (
        <Section id="services" className={styles.servicesSection} aria-labelledby="services-title">
            <h2 id="services-title" className={styles.sectionTitle}>
                How I Empower Your Business
            </h2>
            <p className={styles.introText}>
                I focus on delivering tangible results that drive your business forward. Here’s how I can help:
            </p>
            <div className={styles.servicesGrid}>
                {serviceHighlightsData.map((service) => (
                    <div key={service.id} className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ServicesHighlightSection;