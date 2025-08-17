import Head from 'next/head';
import styles from '../styles/About.module.css';
import mainStyles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <div id={mainStyles.container}>
            <Head>
                <title>about</title>
                <meta
                    name="description"
                    content="about gagan - more personal stuff"
                ></meta>
            </Head>
            <Header />
            <main id={mainStyles.main}>
                <section id={mainStyles.section}>
                    <h3 className={mainStyles.heading}>
                        beyond the terminal
                    </h3>
                    <p>
                        so here's the deal - when i'm not wrestling with distributed systems or staring at logs, 
                        i actually have a life (shocking, i know). i cook a lot since moving to the united states. 
                        while i can't sing or dance to save my life, but i can make decent donne biryani (*mouth waters*). 
                        also hit the gym regularly because sitting at a desk all day isn't too great for your back.
                    </p>
                    {/* <h4 className={styles.section}>
                        Love for outdoors &#9968;{' '}
                    </h4> */}
                    <p>
                        i like hiking - it's basically the opposite of sitting in front of a computer all day. 
                        did kedarkantha in 2018 which was pretty cool. k2 is on the bucket list but let's be real, 
                        that's probably not happening anytime soon. here are some pics from kedarkantha:
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
                        i've been supporting liverpool since 2008 (yeah, through the rough years too). 
                        nothing beats watching a match with other fans - the banter, the stress, 
                        the occasional moment of pure joy when we actually win something important.
                    </p>
                    {/* <h4 className={styles.section}>Photography &#128248; </h4> */}
                    <p>
                        i mess around with photography when i have time. picked up a canon 600d in 2015 
                        and still use it - mostly for landscapes and random street shots. currently obsessed 
                        with cinematic moody editing styles in lightroom (probably spending way too much time adding grain). 
                        click {' '}
                        <a href="/photography">
                            <u>here</u>
                        </a>
                        {' '}to check them out.
                    </p>
                    {/* <h4 className={styles.section}> Toby &#9829; </h4> */}
                    <p>
                        i have a dog named toby back home in bangalore. he's an indie. miss that guy every day. 
                        here he is as a puppy:
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
