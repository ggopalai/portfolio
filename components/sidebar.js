import styles from '../styles/Sidebar.module.css';

export default function Sidebar({ sidebarVisible }) {
    // const sidebarClasses = `${styles.sidebar} ${sidebarVisible ? styles.active : ''}`;
    return (
        // <nav className={sidebarClasses}>
        <nav className={styles.sidebar}>
            <ul className={styles.unlist}>
                <li className={styles.listItem}>
                    <a href="/">home</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/about">about</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/photography">photography</a>
                </li>
                {/* <li className={styles.listItem}>
                    <a href="/GaganGopalaiahResume.pdf" download>
                        Resume
                    </a>
                </li> */}
                <li className={styles.listItem}>
                    <a href="/contact">contact</a>
                </li>
            </ul>
        </nav>
    );
}
