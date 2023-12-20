import Head from 'next/head';
import styles from '../styles/About.module.css';
import mainStyles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <div id={mainStyles.container}>
            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content="An about me page explaining more details about who I truly am."
                ></meta>
            </Head>
            <Header />
            <main id={mainStyles.main}>
                <section id={mainStyles.section}>
                    <h3 className={mainStyles.heading}>
                        On a more personal note,
                    </h3>
                    <p>
                        Hello, I'm Gagan, a contemplative soul who takes
                        pleasure in life's little treasures. I try to actively
                        practise Stoicism, exploring life's deeper questions in
                        a fast-paced world. While I can't sing or dance to save
                        my life, I make up for it with my enthusiasm for
                        cooking. Living solo in the USA has brought out my inner
                        Gordon Ramsay! I'm all about savoring good food, but I
                        also balance it with my love for lifting weights in the
                        gym. And let's not forget fondness for dogs - these
                        furry companions are, without a doubt, a gift from the
                        heavens.
                    </p>
                    {/* <h4 className={styles.section}>
                        Love for outdoors &#9968;{' '}
                    </h4> */}
                    <p>
                        Hiking outdoors is one of my favorite pastimes. I've had
                        the opportunity to embark on two Himalayan expeditions,
                        immersing myself in the breathtaking beauty of the
                        mountains. Mount K2 is a dream I hope to conquer
                        someday, driven by the desire to live life on the edge.
                        Here are a couple of images from the summit of the
                        Kedarkantha peak from 2018.
                    </p>
                    <div className={styles.kkContainer}>
                        <img
                            src="/himalayas/fullview.avif"
                            alt="Kedarkantha"
                            className={styles.kk}
                        />
                        <img
                            src="/himalayas/sunset.avif"
                            alt="Kedarkantha"
                            className={styles.kk}
                        />
                    </div>
                    {/* <h4 className={styles.section}>Football &#9917; </h4> */}
                    <p>
                        Football holds a special place in my heart, and I have
                        been a devoted supporter of Liverpool FC since 2008. The
                        thrill of the game, the camaraderie among fans, and the
                        rollercoaster of emotions that come with each match make
                        it an exhilarating experience. You'll often find me
                        cheering on the team with unwavering enthusiasm, living
                        by the motto "Red or dead."
                    </p>
                    {/* <h4 className={styles.section}>Photography &#128248; </h4> */}
                    <p>
                        I also love capturing and playing around with images.
                        Since 2015, I have been shooting moments and stories
                        through my Canon 600D. Whether it's the vast landscapes,
                        the vibrant streets, or the essence of individuals in
                        portraits, I strive to encapsulate the beauty and
                        emotions within each frame. You can find some of my work
                        in my{' '}
                        <a href="/photography">
                            <u>photography</u>
                        </a>{' '}
                        page.
                    </p>
                    {/* <h4 className={styles.section}> Toby &#9829; </h4> */}
                    <p>
                        Last, but certainly not the least, I left my pet dog
                        Toby back home in Bangalore, whom I absolutely adore.
                        He's a 2.5-year-old Indie. His playful spirit and
                        unconditional love have brought immeasurable happiness
                        to my life, reminding me of the importance of
                        companionship and cherished connections. Here are some
                        of his pictures.
                    </p>
                    <div className={styles.tobyContainer}>
                        <img
                            src="/toby/toby1.webp"
                            alt="Toby when he was few months old"
                        />
                        <img
                            src="/toby/toby2.webp"
                            alt="Toby sleeping on the couch!"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
