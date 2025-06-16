import React from 'react';
import styles from './Footer.module.css';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Example using react-icons

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                {/* Optional: Add social links if you have them
        <div className={styles.socialLinks}>
          <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com" className={styles.socialLink} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        */}
                <p>
                    &copy; {currentYear} Vincent Corriveau FinTech Consulting.
                </p>
                <p>
                    Innovating Financial Technology. Built with Precision.
                </p>
                {/* <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p> */}
            </div>
        </footer>
    );
};

export default Footer;