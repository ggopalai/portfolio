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
                            src="/logos/linkedin.svg"
                            className={styles.logoimages}
                            alt="LinkedIn logo in svg format"
                        ></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ggopalai" target="_blank">
                        <img
                            src="/logos/github.svg"
                            className={styles.logoimages}
                            alt="Github logo in svg format"
                        ></img>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/_gagan26/"
                        target="_blank"
                    >
                        <img
                            src="/logos/instagram.svg"
                            className={styles.logoimages}
                            alt="Instagram logo in svg format"
                        ></img>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
