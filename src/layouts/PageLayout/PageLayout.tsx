import React, {type ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className={styles.pageLayout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;