import style from '../styles/Photography.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Photography() {
    const imageUrls = [
        '/images/photo39.avif',
        '/images/photo38.avif',
        '/images/photo37.avif',
        '/images/photo34.avif',
        '/images/photo35.avif',
        '/images/photo36.avif',
        '/images/photo1.avif',
        '/images/photo2.avif',
        '/images/photo3.avif',
        '/images/photo4.avif',
        '/images/photo5.jpg',
        '/images/photo6.avif',
        '/images/photo7.avif',
        '/images/photo8.avif',
        '/images/photo9.avif',
        '/images/photo10.avif',
        '/images/photo11.avif',
        '/images/photo12.avif',
        '/images/photo13.jpg',
        '/images/photo14.jpg',
        '/images/photo15.jpg',
        '/images/photo22.avif',
        '/images/photo23.avif',
        '/images/photo24.jpg',
        '/images/photo16.jpg',
        '/images/photo17.jpg',
        '/images/photo18.jpg',
        '/images/photo19.jpg',
        '/images/photo20.jpg',
        '/images/photo21.jpg',
        '/images/photo25.avif',
        '/images/photo26.avif',
        '/images/photo27.avif',
        '/images/photo31.avif',
        '/images/photo32.avif',
        '/images/photo33.avif',
    ];

    return (
        <div id={style.container}>
            <Head>
                <title>Photography</title>
            </Head>
            <Header />
            <div className={style.gridContainer}>
                {imageUrls.map((url, index) => (
                    <div key={index} className={style.gridItem}>
                        <img
                            src={url}
                            alt={`Photo ${index + 1}`}
                            className={style.image}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
