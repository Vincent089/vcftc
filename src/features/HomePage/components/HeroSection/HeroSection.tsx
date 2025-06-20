import React from 'react';
import styles from './HeroSection.module.css';
import Button from "../../../../components/common/Button/Button.tsx";

const HeroSection: React.FC = () => {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={`container ${styles.heroContent}`}>
                <h1 className={styles.headline}>
                    Transforming Finance with High-Tech Software Solutions
                </h1>
                <p className={styles.subHeadline}>
                    I'm Vincent Corriveau, a freelance software engineer specializing in
                    financial process automation and custom-built applications that drive efficiency and innovation.
                </p>
                <Button href="#contact" variant="accent">
                    Discuss Your Project
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;