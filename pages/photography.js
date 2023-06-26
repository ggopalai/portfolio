import style from '../styles/Photography.module.css'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Photography() {
    return (
        <div id={style.container}>
            <Head>Photography</Head>
            <Header />
            <main id={style.main}>
                This page is currently being built. Please check back later! In the meantime, you can check out my <a href="https://www.instagram.com/the_hippiemonk/" target="_blank">Instagram</a> for some of my photography.
            </main>
            <Footer />
        </div>
    )
}