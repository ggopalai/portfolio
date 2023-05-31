import styles from '../styles/Header.module.css';
import Sidebar from './sidebar';

export default function Header() {
    return (
        <header id={styles.header}>
            <div id={styles.name}>Gagan Gopalaiah</div>
            <Sidebar />
      </header>
    );
}