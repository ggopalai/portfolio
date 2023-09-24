import styles from '../styles/Socials.module.css';

export default function Socials() {
    return (
        <nav className={styles.container}>
            <ul className={styles.unlist}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/gdgopalaiah-26/"
                        target="_blank"
                    >
                        <img
                            src="/logos/linkedin.png"
                            className={styles.logoimages}
                        ></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ggopalai" target="_blank">
                        <img
                            src="/logos/github.svg"
                            className={styles.logoimages}
                        ></img>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/_gagan26/"
                        target="_blank"
                    >
                        <img
                            src="/logos/instagram.png"
                            className={styles.logoimages}
                        ></img>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
