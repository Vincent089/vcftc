import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
    showSubtitle?: boolean;
}

const Logo: React.FC<LogoProps> = () => {
    return (
        <a href="/public" className={styles.logoLink} aria-label="Vincent Corriveau FinTech Consulting Home">
            <img src="/brandLogo.png" alt="" className={styles.logoImage} />
            {/*<div>*/}
            {/*    <span className={styles.logoText}>Vincent Corriveau</span>*/}
            {/*    {showSubtitle && <span className={styles.logoTextSmall}>FinTech Consulting</span>}*/}
            {/*</div>*/}
        </a>
    );
};

export default Logo;