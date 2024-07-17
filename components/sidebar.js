import styles from '../styles/Sidebar.module.css';

export default function Sidebar({ sidebarVisible }) {
    // const sidebarClasses = `${styles.sidebar} ${sidebarVisible ? styles.active : ''}`;
    return (
        // <nav className={sidebarClasses}>
        <nav className={styles.sidebar}>
            <ul className={styles.unlist}>
                <li className={styles.listItem}>
                    <a href="/">Home</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/about">About</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/photography">Photography</a>
                </li>
                {/* <li className={styles.listItem}>
                    <a href="/GaganGopalaiahResume.pdf" download>
                        Resume
                    </a>
                </li> */}
                <li className={styles.listItem}>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
