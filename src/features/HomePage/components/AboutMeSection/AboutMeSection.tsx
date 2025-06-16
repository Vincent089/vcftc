import React from 'react';
import Section from '../../../../components/common/Section/Section';
import styles from './AboutMeSection.module.css';

const YOUR_NAME_OR_COMPANY = "Vincent Corriveau";

const AboutMeSection: React.FC = () => {
    return (
        <Section id="about" className={styles.aboutSection} aria-labelledby="about-me-title">
            <div className="container"> {/* This container class is from your global styles */}
                <div className={styles.contentWrapper}>
                    {/* Optional: If you have a professional headshot or relevant graphic
                      <div className={styles.imageContainer}>
                        <img src="/path-to-your-image.jpg" alt="Vincent Corriveau" />
                      </div>
                      */}
                    <div className={styles.textContainer}>
                        <h2 id="about-me-title" className={styles.sectionTitle}>
                            Your Partner in FinTech Innovation
                        </h2>
                        <p>
                            <span className={styles.highlight}>{YOUR_NAME_OR_COMPANY}</span>!
                            Is a dedicated FinTech consultant with a <span className={styles.highlight}>robust background</span> in
                            software
                            engineering and architecture, I specialize in developing{' '}
                            <span className={styles.highlight}>tailored solutions</span> that automate and
                            streamline administrative tasks for small to medium-sized businesses.
                        </p>
                        <p>
                            My expertise lies in transforming <span className={styles.highlight}>complex operational challenges</span> into
                            efficient, technology-driven workflows. This enables you to save
                            valuable time, reduce operational costs, and significantly
                            enhance overall productivity. I'm committed to understanding your unique
                            needs and delivering solutions that are not only powerful but also
                            reliable and scalable for your future growth.
                        </p>
                        <div>
                            <span className={styles.expertisePill}>Client-Focused</span>
                            <span className={styles.expertisePill}>Results-Driven</span>
                            <span className={styles.expertisePill}>Transparent Communication</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutMeSection;