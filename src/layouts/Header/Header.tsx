import React, {useState, useEffect} from 'react';
import Logo from '../../components/common/Logo/Logo';
import styles from './Header.module.css';
// import { NavLink } from 'react-router-dom'; // Uncomment if using React Router

const NAV_ITEMS = [
    {href: '#about', label: 'About'},
    {href: '#services', label: 'Services'},
    {href: '#engagement', label: 'Engagement Model'},
    // {href: '#tech', label: 'Technology'},
    {href: '#contact', label: 'Contact'},
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu on link click
    const handleNavLinkClick = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    // Effect for active link highlighting based on scroll
    useEffect(() => {
        const sections = NAV_ITEMS.map(item => document.getElementById(item.href.substring(1)));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {rootMargin: "-50% 0px -50% 0px"} // Adjust rootMargin to trigger when section is in middle of viewport
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerInner}`}>
                <Logo/>
                <button
                    className={styles.mobileMenuButton}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? '✕' : '☰'} {/* Simple X and Hamburger icons */}
                </button>
                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
                    {NAV_ITEMS.map((item) => (
                        // Replace <a> with <NavLink> from react-router-dom if you add routing and want its activeClassName feature
                        <a
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.navLinkActive : ''}`}
                            onClick={handleNavLinkClick}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;