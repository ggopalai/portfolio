import style from '../styles/Photography.module.css'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Photography() {
    const imageUrls = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
        "/images/photo7.jpg",
        "/images/photo8.jpg",
        "/images/photo9.jpg",
        "/images/photo10.jpg",
        "/images/photo11.jpg",
        "/images/photo12.jpg",
    ]

    return (
        <div id={style.container}>
            <Head>Photography</Head>
            <Header />
            {/* <main id={style.main}>
                This page is currently being built. Please check back later! In the meantime, you can check out my <a href="https://www.instagram.com/the_hippiemonk/" target="_blank" id={style.link}>Instagram</a> for some of my photography.
            </main> */}
            <div className={style.gridContainer}>
                {imageUrls.map((url, index) => (
                    <div key={index} className={style.gridItem}>
                        <img src={url} alt={`Photo ${index + 1}`} className={style.image} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}