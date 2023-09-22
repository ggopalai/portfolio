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
        "/images/photo13.jpg",
        "/images/photo14.jpg",
        "/images/photo15.jpg",
        "/images/photo22.jpg",
        "/images/photo23.jpg",
        "/images/photo24.jpg",
        "/images/photo16.jpg",
        "/images/photo17.jpg",
        "/images/photo18.jpg",
        "/images/photo19.jpg",
        "/images/photo20.jpg",
        "/images/photo21.jpg",
    ]

    return (
        <div id={style.container}>
            <Head>
                <title>Photography</title>
            </Head>
            <Header />
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