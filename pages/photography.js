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
        '/images/mt-rainier-basecamp-dawn.jpg',
        '/images/mt-rainier-basecamp-moon.jpg',
        '/images/cannon-beach-sunset.jpg',
        '/images/kamo-river-walk.jpg',
        '/images/kamo-river-kyoto.jpg',
        '/images/kyoto-rainy-night.jpg',
        '/images/fuji-through-window.jpg',
        '/images/fuji-fall-foliage.jpg',
        '/images/fuji-golden-hour.jpg',
        '/images/lake-crescent-dusk.jpg',
        '/images/ruby-beach-branches.jpg',
        '/images/ruby-beach-headland.jpg',
        '/images/ruby-beach-sea-stacks.jpg',
        '/images/ruby-beach-cabins.jpg',
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
        '/images/photo34.avif',
        '/images/photo32.avif',
        '/images/photo19.jpg',
        '/images/photo16.jpg',
        '/images/photo13.jpg',
        '/images/photo5.jpg',
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
