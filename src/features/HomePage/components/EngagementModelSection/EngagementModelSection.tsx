import React from 'react';
import Section from '../../../../components/common/Section/Section';
import styles from './EngagementModelSection.module.css';

// Placeholder for potential icons - you can use emojis or an icon library
// import { FaClipboardList, FaTools, FaHandshake } from 'react-icons/fa';

const EngagementModelSection: React.FC = () => {
    return (
        <Section id="engagement" className={styles.engagementSection} aria-labelledby="engagement-title">
            <h2 id="engagement-title" className={styles.sectionTitle}>
                Engagement Approach
            </h2>
            <p className={styles.introText}>
                To best serve your diverse needs, I offer a hybrid approach that combines project-based engagements for new developments with flexible support options for ongoing needs, ensuring clarity and value every step of the way.
            </p>

            <div className={styles.modelsGrid}>
                {/* Model 1: Project-Based Development */}
                <div className={styles.modelCard}>
                    <h3 className={styles.modelTitle}>
                        {/* <FaTools className={styles.modelIcon} />  Optional Icon */}
                        Project-Based Development
                    </h3>
                    <p className={styles.modelDescription}>
                        For the development of new custom tools, features, or significant system enhancements, I utilize a structured project model. This provides you with cost predictability and a clear understanding of the scope and deliverables upfront.
                    </p>

                    <h4 className={styles.modelSubtitle}>How It Works:</h4>
                    <ul className={styles.modelList}>
                        <li><strong>Discovery & Scoping:</strong> We begin with a detailed discovery phase to thoroughly understand your requirements, desired outcomes, and existing infrastructure.</li>
                        <li><strong>Proposal & Scope Definition:</strong> Based on the discovery, a comprehensive proposal is presented, outlining the project scope, key deliverables, and timeline.</li>
                        <li><strong>Milestone-Driven Progress:</strong> Projects are typically structured with clear milestones, allowing you to track progress and ensure alignment.</li>
                    </ul>

                    <h4 className={styles.modelSubtitle}>Key Benefits:</h4>
                    <ul className={styles.modelList}>
                        <li><strong>Budget Clarity:</strong> You have a clear understanding of the investment before work begins.</li>
                        <li><strong>Focus on Deliverables:</strong> My focus is on achieving the defined project outcomes efficiently.</li>
                        <li><strong>Risk Mitigation:</strong> I assume the risk of potential unforeseen complexities within the agreed scope.</li>
                    </ul>
                </div>

                {/* Model 2: Ongoing Support & Maintenance */}
                <div className={styles.modelCard}>
                    <h3 className={styles.modelTitle}>
                        {/* <FaHandshake className={styles.modelIcon} /> Optional Icon */}
                        Ongoing Support & Proactive Maintenance
                    </h3>
                    <p className={styles.modelDescription}>
                        To ensure the continued smooth operation, reliability, and minor enhancements of your existing FinTech tools, I offer flexible support agreements. This proactive approach ensures consistent support and peace of mind.
                    </p>

                    <h4 className={styles.modelSubtitle}>Why This Approach?</h4>
                    <ul className={styles.modelList}>
                        <li><strong>Predictable Support:</strong> Guaranteed availability for technical assistance, bug fixes, and minor updates.</li>
                        <li><strong>Cost-Effective:</strong> Often more economical than ad-hoc billing for regular, ongoing needs.</li>
                        <li><strong>System Longevity:</strong> Regular maintenance helps prevent larger issues and extends the life of your tools.</li>
                        <li><strong>Proactive Partnership:</strong> Fosters a continuous collaboration for long-term system health and evolution.</li>
                    </ul>
                    <p className={styles.modelDescription}>
                        Support levels can be tailored to your specific requirements, ranging from essential system upkeep to more comprehensive assistance with minor enhancements and strategic guidance.
                    </p>
                </div>

                {/* Model 3: Ad-Hoc Consulting */}
                <div className={styles.modelCard}>
                    <h3 className={styles.modelTitle}>
                        {/* <FaClipboardList className={styles.modelIcon} /> Optional Icon */}
                        Ad-Hoc Consulting & Flexible Tasks
                    </h3>
                    <p className={styles.modelDescription}>
                        For urgent requests, unplanned tasks, or work falling outside of a defined project scope or ongoing support agreement, services are available on a flexible, as-needed basis.
                    </p>
                    <h4 className={styles.modelSubtitle}>This typically applies to:</h4>
                    <ul className={styles.modelList}>
                        <li>Consultation sessions not part of an active project or support agreement.</li>
                        <li>Urgent bug fixes or issues when no ongoing support agreement is in place.</li>
                        <li>Small, one-off tasks not warranting a full project proposal.</li>
                        <li>Any work explicitly agreed upon as an ad-hoc engagement.</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default EngagementModelSection;