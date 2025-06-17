import React from 'react';
import Section from '../../../../components/common/Section/Section';
import styles from './ContactPromptSection.module.css';
import Button from "../../../../components/common/Button/Button.tsx";

// It's good practice to put configurable items like email in a constant or env variable
const YOUR_CONSULTING_EMAIL = "vincent.corriveau89@gmail.com";

const ContactPromptSection: React.FC = () => {
    return (
        <Section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
            <h2 id="contact-title" className={styles.sectionTitle}>
                Ready to Transform Your Operations?
            </h2>
            <div className={styles.contentWrapper}>
                <p className={styles.promptText}>
                    I am eager to partner with you to streamline your operations and drive efficiency through custom FinTech solutions.
                    Please reach out to schedule a discovery call to discuss your specific needs and how I can best support your business goals.
                </p>
                <Button
                    href={`mailto:${YOUR_CONSULTING_EMAIL}?subject=Discovery Call Request - FinTech Consulting`}
                    variant="accentLarge"
                >
                    Schedule a Discovery Call
                </Button>
            </div>
        </Section>
    );
};

export default ContactPromptSection;