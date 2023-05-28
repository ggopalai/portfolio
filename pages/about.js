import Head from 'next/head'
import styles from '../styles/About.module.css'
import sideStyles from '../styles/Sidebar.module.css'
import mainStyles from '../styles/Home.module.css'
import Sidebar from './sidebar'

export default function About() {
    return (
        <div id={mainStyles.container}>
            <Head>About</Head>
            <header id={mainStyles.header}>
                <div id={mainStyles.name}>Gagan Gopalaiah</div>
                <Sidebar />
            </header>
        </div>
    )
}