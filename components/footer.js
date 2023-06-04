import styles from '../styles/Footer.module.css'
import Socials from './socials'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <p>© 2023 Gagan Gopalaiah</p>
            <Socials />
        </footer>
    )
}