import React, {type ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    ariaLabelledBy?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className, ariaLabelledBy }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`} aria-labelledby={ariaLabelledBy}>
            <div className={`container ${styles.sectionInner}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
