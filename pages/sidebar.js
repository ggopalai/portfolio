import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.unlist}>
                <li className={styles.listItem}>
                    <a href='/'>Home</a>
                </li>
                <li className={styles.listItem}>
                    <a href='/about'>About</a>
                </li>
                
                <li className={styles.listItem}>
                    <a href='/GaganGopalaiahResume.pdf' download>Resume</a>
                </li>
                <li className={styles.listItem}>Photography</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </nav>
    )
}