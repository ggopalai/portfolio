import styles from '../styles/Header.module.css';
import Sidebar from './sidebar';
import { useState } from 'react';
export default function Header() {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }
    const sidebarClasses = `${styles.menuIcon} ${sidebarVisible ? '' : styles.menuIconActive}`;

    return (
        <header id={styles.header}>
            <div id={styles.name}>Gagan Gopalaiah</div>
            <div id="menu-icon" className={sidebarClasses} onClick={toggleSidebar}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <Sidebar sidebarVisible={sidebarVisible}/>
        </header>
    );
}