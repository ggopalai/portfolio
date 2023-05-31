import style from '../styles/Photography.module.css'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Photography() {
    return (
        <div id={style.container}>
            <Head>Photography</Head>
            <Header />
            <Footer />
        </div>
    )
}