import styles from '../styles/Header.module.css';
import Sidebar from './sidebar';
import ThemeToggle from './theme-toggle';

export default function Header() {
    return (
        <header id={styles.header}>
            {/* &#128640; (Rocket) */}
            {/* &#128187; &#128248; &#9968; &#9917; */}
            <div
                id={styles.name}
                onClick={() => {
                    window.location.href = '/';
                }}
            >
                gagan gopalaiah{' '}
            </div>
            <Sidebar />
            <div id={styles.themeToggleFixed}>
                <ThemeToggle />
            </div>
        </header>
    );
}
