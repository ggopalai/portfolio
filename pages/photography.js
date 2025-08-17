import style from '../styles/Photography.module.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';

export default function Photography() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(style.visible);
                        }, index * 100); // Stagger the animations
                    }
                });
            },
            { threshold: 0.1 }
        );

        const images = document.querySelectorAll(`.${style.gridItem}`);
        images.forEach((img) => observer.observe(img));

        return () => observer.disconnect();
    }, []);
    const imageUrls = [
        '/images/photo54.avif',
        '/images/photo53.avif',
        '/images/photo52.avif',
        '/images/photo51.avif',
        '/images/photo50.avif',
        '/images/photo49.avif',
        '/images/photo48.avif',
        '/images/photo47.avif',
        '/images/photo46.avif',
        '/images/photo45.avif',
        '/images/photo44.avif',
        '/images/photo43.avif',
        '/images/photo42.avif',
        '/images/photo41.avif',
        '/images/photo40.avif',
        '/images/photo39.avif',
        '/images/photo38.avif',
        '/images/photo37.avif',
        '/images/photo36.avif',
        '/images/photo35.avif',
        '/images/photo34.avif',
        '/images/photo32.avif',
        '/images/photo24.jpg',
        '/images/photo22.avif',
        '/images/photo21.jpg',
        '/images/photo20.jpg',
        '/images/photo19.jpg',
        '/images/photo18.jpg',
        '/images/photo17.jpg',
        '/images/photo16.jpg',
        '/images/photo14.jpg',
        '/images/photo13.jpg',
        '/images/photo12.avif',
        '/images/photo8.avif',
        '/images/photo5.jpg',
        '/images/photo4.avif',
        '/images/photo1.avif',
    ];

    return (
        <div id={style.container}>
            <Head>
                <title>photography</title>
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
